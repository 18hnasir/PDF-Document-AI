import boto3
import json
import os
import logging
from botocore.exceptions import ClientError

# Initialize DynamoDB and Bedrock clients
dynamodb = boto3.resource('dynamodb')
bedrock_client = boto3.client('bedrock-runtime')

# Set up logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Environment variables for DynamoDB table name
DYNAMODB_TABLE = os.environ['DYNAMODB_TABLE']

# Bedrock Model Identifier
BEDROCK_MODEL_ID = os.environ['BEDROCK_MODEL_ID']

def lambda_handler(event, context):
    # Common CORS headers
    cors_headers = {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
    }

    # Handle OPTIONS preflight request
    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'message': 'Preflight call successful'})
        }

    try:
        # Check if body is already a dict or needs to be parsed
        body = event['body'] if isinstance(event['body'], dict) else json.loads(event['body'])
        file_key = body.get('file_key')
        question = body.get('question')

        if not file_key or not question:
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'file_key and question are required.'})
            }

        # Fetch document text from DynamoDB using file_key as the id
        table = dynamodb.Table(DYNAMODB_TABLE)
        response = table.get_item(Key={'id': file_key})
        if 'Item' not in response:
            return {
                'statusCode': 404,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Document not found.'})
            }

        document_text = response['Item']['extractedText']

        # Use AWS Bedrock to answer the question
        answer = ask_question_with_bedrock(document_text, question)

        # Return the answer
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'answer': answer})
        }

    except ClientError as e:
        logger.error(f"AWS error: {e.response['Error']['Message']}")
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Internal server error.'})
        }
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Internal server error.'})
        }

#Sends the document text and question to AWS Bedrock and returns the answer.
def ask_question_with_bedrock(document_text, question):
    try:
        prompt = f"""Use the following document text to answer the question.
        Document text: {document_text}

        Question: {question}
        Answer:"""
        
        response = bedrock_client.invoke_model_with_response_stream(
            modelId=BEDROCK_MODEL_ID,
            accept='application/json',
            contentType='application/json',
            body=json.dumps({
                'inputText': prompt,
                'textGenerationConfig': {
                    'maxTokenCount': 2000,
                    'temperature': 0.7,
                    'topP': 1
                }
            })
        )

        # Handle streaming response
        full_response = ''
        for event in response['body']:
            chunk = json.loads(event['chunk']['bytes'].decode())
            full_response += chunk.get('outputText', '')

        # Log the response for debugging
        logger.info(f"Bedrock response: {full_response}")
        
        return full_response if full_response else 'No answer provided.'

    except ClientError as e:
        logger.error(f"Bedrock error: {e.response['Error']['Message']}")
        raise
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {str(e)}")
        logger.error(f"Response content: {response}")
        raise
    except Exception as e:
        logger.error(f"Unexpected error in ask_question_with_bedrock: {str(e)}")
        raise
