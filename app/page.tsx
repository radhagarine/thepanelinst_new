import { Navbar } from "@/components/nav/navbar"
import { Hero } from "@/components/hero/hero"

const animations = ['animate-twinkle', 'animate-twinkle-slow', 'animate-twinkle-fast'];


export default function Home() {
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
      <Navbar />
      <Hero />
    </div>
  )
}