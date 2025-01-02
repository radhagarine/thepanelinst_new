'use client'

import { FC } from 'react'

const animations = ['animate-twinkle', 'animate-twinkle-slow', 'animate-twinkle-fast']

export const StarField: FC<{ numberOfStars?: number }> = ({ numberOfStars = 20 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(numberOfStars)].map((_, i) => (
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
  )
}