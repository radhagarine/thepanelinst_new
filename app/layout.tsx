// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"  // Make sure you have this utility
import { SupabaseProvider } from '@/lib/supabase-provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <SupabaseProvider>
        {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}