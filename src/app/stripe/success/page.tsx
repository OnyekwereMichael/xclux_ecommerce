'use client'
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import React from 'react';
import Link from 'next/link';


export default function Success() {
  useEffect(() => {
    // Create confetti burst on load
    const confettiInstance = confetti.create(undefined, { resize: true });
    confettiInstance({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Interval bursts
    const interval = setInterval(() => {
      confettiInstance({
        particleCount: 50,
        spread: 100,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
      });
    }, 1500);

    return () => clearInterval(interval); // Cleanup on unmount

  }, []);
  return (
    <div className="bg-gradient-to-r from-teal-100 to-pink-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
          <div className="flex flex-col items-center px-6 py-8">
            {/* Success Icon */}
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m-7 8h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            {/* Success Message */}
            <h1 className="text-2xl font-bold text-gray-800 mt-6">Payment Done</h1>
            <p className="text-gray-600 mt-3 text-center">
              Your operation was completed successfully. Thank you for your action, and have a great day.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="bg-black hover:bg-black/70 text-white px-6 py-3 mt-2 rounded-lg transition"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
