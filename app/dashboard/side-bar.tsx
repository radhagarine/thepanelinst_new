'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  BarChart, 
  Calendar, 
  Settings, 
  User, 
  Building2,
  Menu
} from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { StarField } from './starfield'

const navItems = [
  { name: 'Projects', href: '/dashboard/projects', icon: LayoutDashboard }
  /*{ name: 'Business', href: '/dashboard/business', icon: Building2 },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar }, 
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Profile', href: '/dashboard/profile', icon: User },*/
]

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const pathname = usePathname()

  return (
    <div className={`fixed top-0 left-0 h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0a0118]" />
      
      {/* Stars Effect */}
      <StarField numberOfStars={20} />
      
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
      
      {/* Content wrapper */}
      <div className="relative h-full flex flex-col">
        {/* Header section */}
        <div className="h-14 flex items-center px-4">
          {/* Menu toggle button */}
          <button 
            onClick={onToggle} 
            className="bg-white/10 p-2 rounded-lg transition-colors focus:outline-none hover:bg-white/20"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
          
          {/* Logo section */}
          {isOpen && (
            <div className="flex-grow flex items-center pl-6">
              <Logo />
            </div>
          )}
        </div>

        {/* Navigation section */}
        <nav className="flex-1 px-3 py-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-2 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 border border-transparent hover:border-white/20 ${
                pathname === item.href ? 'text-white bg-white/10 backdrop-blur-sm border-white/20' : ''
              }`}
              title={!isOpen ? item.name : undefined}
            >
              <item.icon 
                className={`h-5 w-5 flex-shrink-0 ${!isOpen ? 'mx-auto' : ''}`} 
              />
              {isOpen && (
                <span className="whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}