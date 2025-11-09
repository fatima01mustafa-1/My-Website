import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: EmailData) {
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'fatima01mustafa@gmail.com',
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0A0F0D; color: #E5E5E5; padding: 20px;">
          <h2 style="color: #5eead4; border-bottom: 2px solid #5eead4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5eead4;">
            <p style="margin: 10px 0; color: #E5E5E5;"><strong style="color: #5eead4;">Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0; color: #E5E5E5;"><strong style="color: #5eead4;">Email:</strong> <a href="mailto:${data.email}" style="color: #5eead4;">${data.email}</a></p>
            <p style="margin: 10px 0; color: #E5E5E5;"><strong style="color: #5eead4;">Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5eead4;">
            <h3 style="color: #5eead4; margin-top: 0;">Message:</h3>
            <p style="color: #E5E5E5; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; color: #999; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from your portfolio contact form.
Timestamp: ${new Date().toLocaleString()}
      `,
    })

    if (result.error) {
      throw new Error(result.error.message || 'Failed to send email')
    }

    console.log('Email sent successfully via Resend:', result.data?.id)
    return { success: true, messageId: result.data?.id }
  } catch (error: any) {
    console.error('Error sending email via Resend:', error)
    throw error
  }
}

