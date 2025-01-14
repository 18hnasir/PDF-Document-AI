import boto3
import base64
import os
import uuid
import json

# Initialize the S3 client
s3 = boto3.client('s3')

# Environment variable for the bucket name
BUCKET_NAME = os.environ['BUCKET_NAME']

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

    # Handle actual POST request
    try:
        print("Received POST event:", json.dumps(event))
        body = event['body'] if isinstance(event['body'], dict) else json.loads(event['body'])
        file_content = base64.b64decode(body)
        
        # Generate a unique key for the uploaded file
        file_key = f"uploads/{str(uuid.uuid4())[:8]}.pdf"
        print(f"Generated file key: {file_key}")  # Log the generated key
        
        # Upload the file to the S3 bucket
        s3.put_object(Bucket=BUCKET_NAME, Key=file_key, Body=file_content)
        
        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": json.dumps({
                "message": "File uploaded successfully",
                "file_key": file_key
            })
        }
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({
                "error": f"Error uploading file: {str(e)}"
            })
        }