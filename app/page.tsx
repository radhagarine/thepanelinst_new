import { Navbar } from "@/components/nav/navbar"
import { Hero } from "@/components/hero/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      <Navbar />
      <Hero />
    </div>
  )
}

