'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  const raindrops = useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 2 + 2}s`,
        delay: `${Math.random() * 5}s`,
        height: `${Math.random() * 20 + 10}px`,
      })),
    []
  );

  // Roles wrapped in useMemo
  const roles = useMemo(
    () => [
      "Full Stack Software Engineer",
      "Data Engineer", 
      "Machine Learning Engineer",
      "BioChemist"
    ],
    []
  );

  useEffect(() => {
    const currentText = roles[currentRole];

    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
          setIsTyping(true)
        }, 500)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentRole, charIndex, isTyping]) // roles removed from dependencies

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-600 animate-gradient-x"></div>

      {/* Raindrop effect */} 
      <div className="absolute inset-0">
        {raindrops.map((drop) => (
          <div
            key={drop.id}
            className="raindrop"
            style={{
              left: drop.left,
              animationDuration: drop.duration,
              animationDelay: drop.delay,
              height: drop.height,
            }}
          />
        ))}
      </div>
       
      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          {/* Profile image*/}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-white/30 overflow-hidden">
            <Image 
              src="/profile/profile.jpeg" 
              alt="Profile Image" 
              width={128} 
              height={128} 
              className="w-full h-full object-cover"
            />
          </div>
                     
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {`Hey, I'm `}
            <span className="bg-gradient-to-r from-blue-500 to-green-200 bg-clip-text text-transparent">
              Anderson Park
            </span>
          </h1>
                     
          {/* Typewriter role text */}
          <div className="text-xl sm:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="font-semibold text-blue-300 min-w-[350px] text-center relative">
              {displayedText}
              <span className="animate-pulse ml-1 text-blue-200">|</span>
            </span>
          </div>
                     
          <p className="text-lg sm:text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {`I engineer and design user-friendly web applications transforming data into actionable insights solving real world problems.`}
          </p>
        </div>
         
        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="group px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            {`View My Work`}
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
                     
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-8 py-4 border-2 border-gray-300 text-gray-100 rounded-full font-semibold text-lg hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            {`Get In Touch`}
          </button>
        </div>
      </div>
       
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
