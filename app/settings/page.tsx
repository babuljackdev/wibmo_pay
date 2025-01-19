"use client"

import React from 'react'
import { Bell, ChevronDown, CreditCard, Search, Shield, Bell as BellIcon, Sun, Globe, Lock, LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import Nav from '../components/navbar'

export default function SettingsPage() {
  const router = useRouter()

  const handleLogout = () => {
    router.replace('/')
  }

  return (
    <div className="flex h-screen bg-gray-50/50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <CreditCard className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Wibmo Pay
          </span>
        </div>
        <div className="p-6">
          <Nav />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search settings..." 
                className="w-64 pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors" 
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="icon" variant="ghost" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            <div className="flex items-center space-x-2 border-l pl-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <span>Admin User</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Settings Header */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-500 mt-1">Manage your account preferences and system settings</p>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Settings */}
              <Card className="hover:shadow-xl transition-shadow lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                        <User className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <CardTitle>Profile Settings</CardTitle>
                      <CardDescription>Update your personal information</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input defaultValue="Admin" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input defaultValue="User" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input defaultValue="admin@wibmopay.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <Input defaultValue="+1 234 567 890" type="tel" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-6">
                {/* Theme Settings */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle>Theme Preferences</CardTitle>
                    <CardDescription>Customize your interface</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4" />
                        <span className="text-sm font-medium">Light Mode</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span className="text-sm font-medium">Language</span>
                      </div>
                      <Badge>English</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Security Settings */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-medium">2FA</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BellIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">Notifications</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Button variant="outline" className="w-full">
                      <Lock className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                  </CardContent>
                </Card>

                {/* Logout Card */}
                <Card className="hover:shadow-xl transition-shadow bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                    <CardDescription>Proceed with caution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="destructive" 
                      className="w-full"
                      onClick={handleLogout}
                      type="button"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 