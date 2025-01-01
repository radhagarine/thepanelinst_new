import React from 'react';
import { BookOpen, PenTool, Users } from 'lucide-react';
import { Button } from '../ui/button';

export function Features() {
  return (
    <section className="w-full py-16 bg-purple-900/10">
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <h1 className="text-6xl font-bold text-center text-white mb-16">
          Powerful Features
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-purple-900/20 backdrop-blur-sm">
            <BookOpen className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Script Analysis</h3>
            <p className="text-gray-400 mb-4">
              Automated breakdown of your script into structured scenes and panels
            </p>
            <Button
              variant="outline"
              className="mt-4 text-white hover:text-white bg-black hover:bg-purple-900/50 border-purple-600"
            >
              Learn More
            </Button>
          </div>
          <div className="p-6 rounded-lg bg-purple-900/20 backdrop-blur-sm">
            <PenTool className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Storyboard Generation</h3>
            <p className="text-gray-400 mb-4">
              Convert your scenes into visually appealing storyboard frames
            </p>
            <Button
              variant="outline"
              className="mt-4 text-white hover:text-white bg-black hover:bg-purple-900/50 border-purple-600"
            >
              Learn More
            </Button>
          </div>
          <div className="p-6 rounded-lg bg-purple-900/20 backdrop-blur-sm">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Collaboration Tools</h3>
            <p className="text-gray-400 mb-4">
              Share and collaborate with your team in real-time
            </p>
            <Button
              variant="outline"
              className="mt-4 text-white hover:text-white bg-black hover:bg-purple-900/50 border-purple-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}