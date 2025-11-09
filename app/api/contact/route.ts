import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
// Try Resend first (no port issues), fallback to Nodemailer
import { sendContactEmail as sendViaResend } from '@/lib/resend'
import { sendContactEmail as sendViaNodemailer } from '@/lib/nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Try Resend first (recommended - no port/firewall issues)
    // Fallback to Nodemailer if Resend is not configured
    let emailResult
    
    if (process.env.RESEND_API_KEY) {
      try {
        emailResult = await sendViaResend({
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
        })
      } catch (error) {
        console.error('Resend failed, trying Nodemailer:', error)
        // Fallback to Nodemailer
        emailResult = await sendViaNodemailer({
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
        })
      }
    } else {
      // Use Nodemailer if Resend is not configured
      emailResult = await sendViaNodemailer({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      })
    }
    
    if (!emailResult.success) {
      throw new Error('Failed to send email')
    }
    
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Error processing contact form:', error)
    
    // Provide more specific error messages
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Failed to send message. Please try again later.'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

