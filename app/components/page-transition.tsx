"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function PageTransition() {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative">
        {/* Glowing Circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600 blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Spinning Logo */}
        <motion.div
          className="relative h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-[0_0_15px_rgba(0,0,255,0.5)] flex items-center justify-center"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <span className="text-xl font-bold text-white">WP</span>
        </motion.div>

        {/* Orbital Line */}
        <motion.div
          className="absolute -inset-4 border border-blue-500/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  )
} 