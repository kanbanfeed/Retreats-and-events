import type { Metadata } from 'next'
import './globals.css'
// Import the Provider
import { AuthProvider } from '@/components/AuthProvider'

export const metadata: Metadata = {
  title: 'Retreats & Events - Lifetime Membership for Exclusive Experiences',
  description: 'Pay once. Use forever. Global access to premium retreats, events, and exclusive perks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap children in AuthProvider */}
        <AuthProvider>
            {children}
        </AuthProvider>
      </body>
    </html>
  )
}