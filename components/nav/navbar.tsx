import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[rgb(21,11,46)] fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="flex items-center text-white relative z-50">
        <span className="text-lg font-medium">— ThePanelist</span>
        <span className="ml-1">→</span>
      </Link>
      
      <div className="flex items-center space-x-8 relative z-50">
        <Link href="/product" className="text-white hover:text-gray-300 transition-colors">
          Product
        </Link>
        <Link href="/pricing" className="text-white hover:text-gray-300 transition-colors">
          Pricing
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
          Contact Us
        </Link>
      </div>
      
      <div className="flex items-center space-x-4 relative z-50">
        <Button 
          variant="ghost" 
          className="text-white hover:text-gray-300 hover:bg-white/10"
          asChild
        >
          <Link href="/login">Login</Link>
        </Button>
        <Button 
          className="bg-transparent border-2 border-[#9333EA] text-white hover:bg-[#9333EA]/10"
          asChild
        >
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </nav>
  )
}