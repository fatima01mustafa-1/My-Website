// Environment configuration utility
export const config = {
  // Server configuration
  port: process.env.PORT || 3005,
  hostname: process.env.HOSTNAME || 'localhost',
  
  // Application info
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'Fatima Mustafa Portfolio',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3005',
  
  // Contact information
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'fatima01mustafa@gmail.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567',
    location: process.env.NEXT_PUBLIC_CONTACT_LOCATION || 'San Francisco, CA'
  },
  
  // Social media links
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/fatimamustafa',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/fatimamustafa',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/fatimamustafa'
  },
  
  // Analytics (optional)
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID
  },
  
  // Form configuration
  form: {
    endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/contact',
    recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  },
  
  // Image optimization
  imageDomains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS?.split(',') || [
    'images.unsplash.com',
    'via.placeholder.com'
  ],
  
  // Development flags
  isDevelopment: process.env.NODE_ENV === 'development',
  isDebug: process.env.NEXT_PUBLIC_DEBUG === 'true'
}
