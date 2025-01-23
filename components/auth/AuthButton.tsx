'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { supabase } from '@/lib/supabase'

export function AuthButton() {
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div>
      <Button onClick={handleSignIn}>Sign In with Google</Button>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
} 