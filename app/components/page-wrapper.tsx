"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import PageTransition from './page-transition'

export default function PageWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 800) // Show loading for at least 800ms
    }

    // Subscribe to route change events
    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  // Show loading animation on route changes
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {isLoading && <PageTransition />}
      {children}
    </>
  )
} 