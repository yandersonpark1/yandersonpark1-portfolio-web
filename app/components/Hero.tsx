'use client'
import { useState, useEffect } from 'react'

export default function Hero() {
    //currentRole = initial value, setCurrentRole = function to update the value
    const [currentRole, setCurrentRole] = useState(0)
  
  // Array of roles that will rotate
  const roles = [
    "Full Stack Developer",
    "Data Engineer", 
    "UI/UX Designer",
    "BioChemist"
  ]

  // Auto-rotate roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/10 rounded-full animate-float-${i % 3 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          {/* Profile image placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold border-4 border-white/30">
            YN
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Hey, I'm{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Anderson Park
            </span>
          </h1>
          
          {/* Rotating role text */}
          <div className="text-xl sm:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="font-light">I'm a{' '}</span>
            <span className="ml-2 font-semibold text-yellow-300 min-w-[280px] text-left">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-lg sm:text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            I engineer and design, user-friendly web applications transforming data into actionable 
            insights solving real world problems.
          </p>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
          
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}