import boto3
import json
import os
from datetime import datetime

# Initialize Textract, S3, and DynamoDB clients
textract = boto3.client('textract')
dynamodb = boto3.resource('dynamodb')

# Environment variables for DynamoDB table name
DYNAMODB_TABLE = os.environ['DYNAMODB_TABLE']

def lambda_handler(event, context):
    try:
        # Parse S3 event information
        record = event['Records'][0]  # Get the first record
        bucket_name = record['s3']['bucket']['name']
        file_key = record['s3']['object']['key']
        
        # Call Textract to analyze the document
        response = textract.detect_document_text(
            Document={
                'S3Object': {
                    'Bucket': bucket_name,
                    'Name': file_key
                }
            }
        )
        
        # Extract and concatenate text from the Textract response
        extracted_text = " ".join([
            block['Text'] for block in response['Blocks'] if block['BlockType'] == 'LINE'
        ])
        
        # Store the extracted text in DynamoDB
        table = dynamodb.Table(DYNAMODB_TABLE)
        item = {
            'id': file_key,
            'extractedText': extracted_text,
            'timestamp': datetime.utcnow().isoformat()
        }
        table.put_item(Item=item)
        
        return {
            "statusCode": 200,
            "body": json.dumps({"message": "Text extracted and stored successfully", "id": file_key})
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": f"Error extracting text: {str(e)}"
        }
