'use client'

import React from 'react';
import { useAuth } from '@/lib/supabase-provider';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Chrome } from 'lucide-react';
import Link from 'next/link';

const animations = ['animate-twinkle', 'animate-twinkle-slow', 'animate-twinkle-fast'];

interface AuthComponentProps {
  mode?: 'signin' | 'signup';
}

const AuthComponent = ({ mode = 'signin' }: AuthComponentProps) => {
  const { signIn } = useAuth();

  return (
    <div className="min-h-screen w-full bg-[#0a0118] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full overflow-hidden">
        {/* Grid Effect */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(transparent 95%, rgba(255, 255, 255, 0.1) 95%),
              linear-gradient(90deg, transparent 95%, rgba(255, 255, 255, 0.1) 95%)
            `,
            backgroundSize: '20px 20px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'bottom',
          }}
        />
        {/* Gradient Glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[400px]"
          style={{
            background: 'linear-gradient(to top, rgba(123, 31, 162, 0.5), transparent)',
            filter: 'blur(100px)',
          }}
        />
        {/* Stars Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-[2px] h-[2px] bg-white rounded-full ${animations[Math.floor(Math.random() * animations.length)]}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/" className="flex items-center text-white relative z-50">
          <span className="text-lg font-medium">— ThePanelist</span>
          <span className="ml-1">→</span>
        </Link>
      </div>

      {/* Auth Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <Card className="w-full max-w-md bg-black/20 backdrop-blur-sm border-[#9333EA]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-white">
              {mode === 'signin' ? 'Sign in to your account' : 'Create your account'}
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              {mode === 'signin' 
                ? 'Welcome back! Please sign in to continue.'
                : 'Get started by creating a new account.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <Button 
                variant="outline" 
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
                onClick={signIn}
              >
                <Chrome className="mr-2 h-4 w-4" />
                {mode === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-[#9333EA]/30" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0a0118] px-2 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="text-sm text-center text-gray-400">
                {mode === 'signin' ? (
                  <>
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-[#9333EA] hover:text-[#9333EA]/90 underline">
                      Sign up
                    </Link>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#9333EA] hover:text-[#9333EA]/90 underline">
                      Sign in
                    </Link>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthComponent;