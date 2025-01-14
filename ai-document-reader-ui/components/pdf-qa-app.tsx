'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function PdfQaApp() {
  const [file, setFile] = useState<File | null>(null)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [isAsking, setIsAsking] = useState(false)
  const [documentId, setDocumentId] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)
    
    try {
      // Convert file to base64
      const base64File = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const base64String = (reader.result as string).split(',')[1]
          resolve(base64String)
        }
        reader.onerror = reject
      })

      const response = await fetch('API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(base64File)
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      setDocumentId(data.file_key)
      setIsUploading(false)
    } catch (error) {
      console.error('Error uploading file:', error)
      setIsUploading(false)
    }
  }

  const handleAskQuestion = async () => {
    if (!question || !documentId) return

    setIsAsking(true)
    try {
      const response = await fetch('API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          file_key: documentId,
          question: question
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get answer')
      }

      const data = await response.json()
      setAnswer(data.answer)
      setIsAsking(false)
    } catch (error) {
      console.error('Error asking question:', error)
      setIsAsking(false)
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload PDF Document</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input type="file" accept=".pdf" onChange={handleFileChange} />
            <Button onClick={handleUpload} disabled={!file || isUploading}>
              {isUploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {documentId && (
        <Card>
          <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="question">Your Question</Label>
                <Textarea
                  id="question"
                  placeholder="Ask a question about the document..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <Button onClick={handleAskQuestion} disabled={!question || isAsking}>
                {isAsking ? 'Asking...' : 'Ask'}
              </Button>
              {answer && (
                <div className="mt-4">
                  <Label>Answer:</Label>
                  <p className="mt-2 p-4 bg-gray-100 rounded-md">{answer}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

