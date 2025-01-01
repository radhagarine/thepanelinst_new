import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-black to-purple-900/20">
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Ready to bring your scripts to life?
            </h2>
            <form className="relative flex max-w-md mx-auto gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-purple-900/20 border-purple-700/50 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
              />
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

      {/* Footer */}
      <footer className="w-full py-8 bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 ThePanelist. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}