'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Using the credentials from your provided callback code
const SB_URL = 'https://zfxnhbymlhvukeqmsyhj.supabase.co'
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeG5oYnltbGh2dWtlcW1zeWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MTIyMTIsImV4cCI6MjA3NzM4ODIxMn0.kKB1RsLvXJuROPlBY5bWeBzTWDGGe_UTouWkfSc7RXs'

const supabase = createClient(SB_URL, SB_KEY)

interface AuthContextType {
  user: any | null
  loading: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true, login: () => {}, logout: () => {} })

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check localStorage on mount (matching your EJS logic)
    const checkSession = async () => {
      const sessionToken = localStorage.getItem('crowbar_session')
      const storedUser = localStorage.getItem('crowbar_user')

      if (sessionToken && storedUser) {
        // We have data, set it to state
        setUser(JSON.parse(storedUser))
      }
      setLoading(false)
    }

    checkSession()
  }, [])

  const login = () => {
    // 1. Calculate Return URL (Your Localhost or Vercel URL + /auth/callback)
    const returnUrl = `${window.location.origin}/auth/callback`
    const encodedUrl = encodeURIComponent(returnUrl)
    
    // 2. Redirect to Crowbar (Exact logic from your server.js)
    window.location.href = `https://www.crowbarltd.com/login?redirect_to=${encodedUrl}`
  }

  const logout = () => {
    localStorage.removeItem('crowbar_session')
    localStorage.removeItem('crowbar_user')
    setUser(null)
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)