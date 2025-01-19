"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreditCard, Lock, Mail, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import LoadingAnimation from '../components/loading-animation'

export default function LoginPage() {
  const router = useRouter()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // For demo, we'll redirect after the animation (8 seconds)
    setTimeout(() => {
      router.push('/dashboard')
    }, 8000)
  }

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        {/* Animated Glow Effects */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Card className="w-full max-w-md relative bg-black/40 backdrop-blur-xl border-gray-800">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 blur-2xl opacity-20"></div>
            <CreditCard className="h-12 w-12 text-primary relative" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent ml-2 relative">
              Wibmo Pay
            </span>
          </div>
          <CardTitle className="text-2xl text-center text-white">Welcome back</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Username or Email"
                  className="pl-10 bg-black/40 border-gray-800 text-white placeholder:text-gray-500"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="pl-10 bg-black/40 border-gray-800 text-white placeholder:text-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/80 hover:to-blue-600/80 transition-all duration-300"
            >
              Sign in
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Forgot password?
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-ping animation-delay-2000"></div>
      </div>
    </div>
  )
}