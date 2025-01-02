'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import type { User, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient | null = null;

export const getSupabaseInstance = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClientComponentClient();
  }
  return supabaseInstance;
};

interface AuthContextType {
  user: User | null | undefined  // Added undefined state
  userEmail: string | null
  userName: string | null
  userAvatar: string | null
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: undefined,  // Initial state is undefined
  userEmail: null,
  userName: null,
  userAvatar: null,
  signIn: async () => {},
  signOut: async () => {} 
})

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined)  // Start with undefined
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [userAvatar, setUserAvatar] = useState<string | null>(null)
  const router = useRouter()
  const supabase = getSupabaseInstance()

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error
        
        if (session?.user) {
          setUser(session.user)
          setUserEmail(session.user.email || null)
          setUserName(session.user.user_metadata?.full_name)
          setUserAvatar(session.user.user_metadata?.avatar_url)
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Error:', error)
        setUser(null)
      }
    }

    initializeAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
        setUserEmail(session.user.email || null)
        setUserName(session.user.user_metadata?.full_name)
        setUserAvatar(session.user.user_metadata?.avatar_url)
        router.refresh()
      } else {
        setUser(null)
        setUserEmail(null)
        setUserName(null)
        setUserAvatar(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, router])

  const signIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
      if (error) throw error
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      userEmail, 
      userName, 
      userAvatar,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)