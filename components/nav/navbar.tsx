import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[rgb(21,11,46)] fixed top-0 left-0 right-0 z-10">
      <Link href="/" className="flex items-center text-white">
        <span className="text-lg font-medium">— ThePanelist</span>
        <span className="ml-1">→</span>
      </Link>
      
      <div className="flex items-center space-x-8">
        <Link href="/product" className="text-white hover:text-gray-300">
          Proudct
        </Link>
        <Link href="/pricing" className="text-white hover:text-gray-300">
          Pricing
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300">
          Contact Us
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-gray-300">
          Login
        </Button>
        <Button className="bg-transparent border-2 border-[#9333EA] text-white hover:bg-[#9333EA]/10">
          Sign Up
        </Button>
      </div>
    </nav>
  )
}



/* "use client"

import { BrandLogo } from "./brand-logo"
import { NavLinks } from "./nav-links"
import { AuthButtons } from "./auth-buttons"

interface NavbarProps {
  onOpenSignUp: () => void;
  onOpenSignIn: () => void;
}

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 h-16">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo />
          <NavLinks />
          <AuthButtons />
        </div>
      </div>
    </header>
  )
}

 */