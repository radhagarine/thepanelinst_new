'use client'

import { FC } from 'react'
import { Bell, Settings, LogOut } from 'lucide-react'
import { User2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/supabase-provider'
import { StarField } from './starfield'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface TopNavProps {
  onMenuClick: () => void;
}

export const TopNav: FC<TopNavProps> = ({ onMenuClick }) => {
  const pathname = usePathname()
  const { user, userName, signOut } = useAuth()

  // Get the current page title from the pathname
  const getPageTitle = () => {
    const segments = pathname.slice(1).split('/')
    if (segments.length) {
      const lastSegment = segments[segments.length - 1]
      return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
    }
    return 'Dashboard'
  }

  return (
    <header className="bg-[#0a0118] shadow relative">
      {/* Background Effects */}
      <StarField />
      
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
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(123, 31, 162, 0.1), transparent, rgba(123, 31, 162, 0.1))',
          filter: 'blur(100px)',
        }}
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <span className="text-xl text-white/90">Dashboard</span>
            <span className="text-white/70 mx-2">→</span>
            <span className="text-xl font-semibold text-white">{getPageTitle()}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Bell className="h-5 w-5 text-white/90" />
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-full transition-colors">
                {user?.user_metadata?.picture ? (
                  <img 
                    src={user.user_metadata.picture}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full object-cover border-2 border-[#9333EA] shadow-lg"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/fallback-avatar.png';
                    }}
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border-2 border-[#9333EA] shadow-lg">
                    <User2 className="h-5 w-5 text-white/90" />
                  </div>
                )}
                <span className="hidden md:block text-white">
                  {userName}
                </span>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>{user?.email || 'My Account'}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopNav;