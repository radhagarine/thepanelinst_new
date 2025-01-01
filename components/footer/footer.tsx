import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="w-full py-8 border-t border-purple-900/20">
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