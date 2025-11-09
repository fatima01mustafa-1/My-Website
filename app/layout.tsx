import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ErrorBoundary } from '@/components/error-boundary'
import LayoutWrapper from '@/components/LayoutWrapper'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Fatima Mustafa - Full Stack Developer',
  description: 'Portfolio website of Fatima Mustafa, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Next.js', 'JavaScript', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Fatima Mustafa' }],
  creator: 'Fatima Mustafa',
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fatimamustafa.dev',
    title: 'Fatima Mustafa - Full Stack Developer',
    description: 'Portfolio website of Fatima Mustafa, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Fatima Mustafa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatima Mustafa - Full Stack Developer',
    description: 'Portfolio website of Fatima Mustafa, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ErrorBoundary>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ErrorBoundary>
      </body>
    </html>
  )
}
