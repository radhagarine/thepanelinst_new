import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center z-10">
      <div className="relative z-20">
        <h1 className="max-w-4xl mx-auto text-6xl font-bold tracking-tight text-white mb-6">
          New Era of Script Visualization
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-xl mb-8">
          Find out what's working and what's not to bring your scripts to life.
        </p>
        <div className="relative flex items-center justify-center gap-4 mb-16">
          <Button
            variant="outline"
            className="text-white bg-[#0A0A0A] border-[#9333EA] hover:bg-[#1A1A1A]"
          >
            Learn More
          </Button>
          <Button
            className="bg-[#9333EA] hover:bg-[#9333EA]/90 text-white"
          >
            Get Started
          </Button>
        </div>

        <div className="relative flex w-full max-w-3xl gap-4 mx-auto">
          <Input
            placeholder="Enter script in < than 1000 chars"
            className="border-[#9333EA] bg-[#1A1A1A] text-white w-full placeholder:text-gray-500 focus:ring-[#9333EA] focus:border-[#9333EA]"
          />
          <Button
            className="bg-[#9333EA] hover:bg-[#9333EA]/90 text-white px-8 whitespace-nowrap"
          >
            Try Demo
          </Button>
        </div>
      </div>
    </main>
  )
}