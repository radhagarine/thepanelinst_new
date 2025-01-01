import React from 'react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Crafting Narratives: The Future of Storyboarding with AI',
    description: 'Explore AI\'s pivotal role in narrative creation, revolutionizing storyboarding with intelligent scene recognition, and crafting stories beyond imagination.',
    image: '/images/Narratives.jpeg',
    alt: 'Futuristic corridor with neon lights and screens'
  },
  {
    title: 'From Concept to Visual: AI-Driven Storyboarding Uncovered',
    description: 'Discover how AI transforms storyboarding from an idea to a visual masterpiece, accelerating creative processes and enhancing artistic collaboration.',
    image: '/images/Concept.jpeg',
    alt: 'Artist working on storyboard sketches'
  },
  {
    title: 'Beyond Fiction: Elevating Storyboarding with AI Innovations',
    description: 'Dive into the world where AI enhances storytelling. Discover how innovative tools streamline storyboarding, making the creative process faster and more efficient, turning imaginative ideas into reality like never before.',
    image: '/images/BeyondFiction.jpeg',
    alt: 'Person working with multiple screens showing AI tools'
  }
];

export function BlogArticles() {
  return (
    <section className="w-full py-16 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <h1 className="text-6xl font-bold text-center text-white mb-16">
          Latest blog articles
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-purple-900/20 backdrop-blur-sm">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.description}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 text-white hover:text-white bg-black hover:bg-purple-900/50 border-purple-600"
                >
                  Learn more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}