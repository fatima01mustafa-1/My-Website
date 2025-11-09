import nodemailer from 'nodemailer'

// Create reusable transporter object using SMTP transport
// Use port 465 with secure: true if port 587 is blocked
const smtpPort = parseInt(process.env.SMTP_PORT || '587')
const useSecure = smtpPort === 465

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: smtpPort,
  secure: useSecure, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email
    pass: process.env.SMTP_PASS, // Your email password or app password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
  connectionTimeout: 15000, // 15 seconds
  greetingTimeout: 15000,
  socketTimeout: 15000,
  // Only require TLS if not using secure connection
  requireTLS: !useSecure,
})

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: EmailData) {
  const mailOptions = {
    from: `"${data.name}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || 'fatima01mustafa@gmail.com',
    replyTo: data.email,
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2a8a7a; border-bottom: 2px solid #2a8a7a; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2a8a7a; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
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
  }

  try {
    // Verify connection first
    await transporter.verify()
    console.log('SMTP connection verified')
    
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error: any) {
    console.error('Error sending email:', error)
    
    // Provide more helpful error messages
    if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
      throw new Error('Connection timeout. Please check your network/firewall settings or try using port 465 with SSL.')
    } else if (error.code === 'EAUTH') {
      throw new Error('Authentication failed. Please check your email and app password.')
    } else if (error.code === 'ECONNREFUSED') {
      throw new Error('Connection refused. Please check your SMTP host and port settings.')
    }
    
    throw error
  }
}

// Verify transporter configuration
export async function verifyTransporter() {
  try {
    await transporter.verify()
    console.log('SMTP server is ready to send emails')
    return true
  } catch (error) {
    console.error('SMTP verification failed:', error)
    return false
  }
}

