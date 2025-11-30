'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

// Same credentials
const SB_URL = 'https://zfxnhbymlhvukeqmsyhj.supabase.co'
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeG5oYnltbGh2dWtlcW1zeWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MTIyMTIsImV4cCI6MjA3NzM4ODIxMn0.kKB1RsLvXJuROPlBY5bWeBzTWDGGe_UTouWkfSc7RXs'
const client = createClient(SB_URL, SB_KEY)

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleSSO = async () => {
      const hash = window.location.hash
      
      if (hash && hash.includes('access_token')) {
        try {
          // 1. Parse Hash
          const params = new URLSearchParams(hash.substring(1))
          const accessToken = params.get('access_token')

          if (accessToken) {
            // 2. Save to Storage
            localStorage.setItem('crowbar_session', accessToken)

            // 3. Get User Details
            const { data } = await client.auth.getUser(accessToken)
            
            if (data && data.user) {
              localStorage.setItem('crowbar_user', JSON.stringify(data.user))
            } else {
              // Fallback if direct lookup fails
              localStorage.setItem('crowbar_user', JSON.stringify({ email: 'user@crowbar.com' }))
            }

            // 4. Redirect Home
            window.location.href = '/'
          }
        } catch (err) {
          console.error("Auth failed", err)
          router.push('/')
        }
      } else {
        // Check if session exists in supabase client
        const { data: { session } } = await client.auth.getSession()
        if (session) {
            localStorage.setItem('crowbar_session', session.access_token)
            localStorage.setItem('crowbar_user', JSON.stringify(session.user))
            window.location.href = '/'
        }
      }
    }

    handleSSO()
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      <h2 className="text-xl font-bold text-slate-700">Verifying Crowbar ID...</h2>
    </div>
  )
}