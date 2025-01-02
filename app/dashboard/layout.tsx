'use client'

import { FC, ReactNode, useState } from 'react'
import { Sidebar } from '@/app/dashboard/side-bar'
import { TopNav } from '@/app/dashboard/top-nav'
import { SupabaseProvider } from '@/lib/supabase-provider'
import AuthCheck from '@/app/dashboard/auth-check'

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen)

  return (
    <SupabaseProvider>
      <AuthCheck>
        <div className="min-h-screen bg-gray-50">
          <Sidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
          
          {/* Main content wrapper with margin for sidebar */}
          <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            {/* Replace the simple header with TopNav */}
            <TopNav onMenuClick={handleSidebarToggle} />
            
            {/* Main content */}
            <main className="p-8">
              <div className="mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </AuthCheck>
    </SupabaseProvider>
  )
}

export default DashboardLayout;