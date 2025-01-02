// app/auth/callback/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      const cookieStore = cookies()
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

      // Exchange the code for a session
      await supabase.auth.exchangeCodeForSession(code)

      // Let the dashboard/page.tsx handle the redirect
      return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
    }

    // If there's no code, redirect to home
    return NextResponse.redirect(new URL('/', requestUrl.origin))
  } catch (error) {
    console.error('Auth callback error:', error)
    return NextResponse.redirect(new URL('/', request.url))
  }
}