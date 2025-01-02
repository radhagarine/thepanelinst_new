import { Navbar } from "@/components/nav/navbar"
import { Hero } from "@/components/hero/hero"
import { Features } from "@/components/features/features"
import { Footer } from "@/components/footer/footer"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* You can add global elements like headers or footers here */}
      
      {children}
    </div>
  )
}

export default RootLayout; 