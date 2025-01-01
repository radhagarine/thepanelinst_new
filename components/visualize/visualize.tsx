'use client'
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { StoryboardCanvas } from './StoryBoardCanvas'

const storyboardFrames = [
    "/images/dummystoryframe1.jpg",
    "/images/dummystoryframe2.jpg",
    "/images/dummystoryframe3.jpg",
    "/images/dummystoryframe4.jpg",
    "/images/dummystoryframe5.jpg",
    "/images/dummystoryframe6.jpg",
    "/images/dummystoryframe7.jpg",
    "/images/dummystoryframe8.jpg",
    "/images/dummystoryframe9.jpg",
    "/images/dummystoryframe10.jpg",
    "/images/dummystoryframe11.jpg",
    "/images/dummystoryframe12.jpg",
    "/images/dummystoryframe13.jpg",
    "/images/dummystoryframe14.jpg",
    "/images/dummystoryframe15.jpg",
    "/images/dummystoryframe16.jpg",
]

const AnimatedArrow = () => {
    return (
        <motion.div
            animate={{
                x: [0, 20, 0],
                opacity: [0.5, 1, 0.5],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            }}
            className="text-purple-400"
        >
            <ArrowRight size={48} />
        </motion.div>
    )
}


export function Visualize() {
    return (
        <section className="w-full py-24 relative overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-4">
                <h1 className="text-6xl font-bold text-center text-white mb-16">
                    Visualize your Story
                </h1>
                <Card className="bg-purple-900/10 border-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/40" />
                    <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            {/* Script Column */}
                            <div className="w-full lg:w-1/5 h-40 md:h-48 lg:h-56">
                                <div className="w-full h-full relative">
                                    <Image
                                        src="/images/script.jpg"
                                        alt="Script example"
                                        fill
                                        className="rounded-lg object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Animated Arrow */}
                            <div className="lg:w-1/5 flex items-center justify-center">
                                <AnimatedArrow />
                            </div>

                            {/* Canvas Animation */}
                            <div className="w-full lg:w-3/5 h-[400px] lg:h-[600px] relative">
                                <StoryboardCanvas frames={storyboardFrames} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
