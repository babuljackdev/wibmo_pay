"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100))
    }, 70)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="relative">
        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
          initial={{ y: -200 }}
          animate={{ y: 200 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{ height: '400px' }}
        />

        {/* Orbital Rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-blue-500/30 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1 + (i * 0.2), 
              rotate: 360 * (i % 2 ? 1 : -1)
            }}
            transition={{ 
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        ))}

        {/* Center Logo */}
        <motion.div
          className="relative h-32 w-32 rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-[0_0_50px_rgba(0,0,255,0.3)] flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <motion.span 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            WP
          </motion.span>
        </motion.div>

        {/* Particles */}
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(0,0,255,0.5)]"
            initial={{ 
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{ 
              scale: [0, 1, 0],
              x: Math.cos(i * 15 * Math.PI / 180) * 150,
              y: Math.sin(i * 15 * Math.PI / 180) * 150,
            }}
            transition={{ 
              duration: 3,
              delay: 1 + (i * 0.1),
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}

        {/* Data Stream Effects */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-40 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
              initial={{ rotate: i * 45, scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading Progress */}
      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center">
        <motion.div
          className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-blue-600"
            style={{ width: `${progress}%` }}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.h2 
            className="text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Welcome to Wibmo Pay
          </motion.h2>
          <motion.div 
            className="text-blue-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <span className="text-sm">Initializing Secure Environment... {progress}%</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Holographic Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/scanline.svg')] opacity-[0.03]"></div>
    </div>
  )
} 