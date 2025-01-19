'use client'

import React from 'react'
import { Bell, ChevronDown, CreditCard, Search, Shield, Lock, AlertTriangle, CheckCircle2, KeyRound, Fingerprint, History, RefreshCcw } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Nav from '../components/navbar'

export default function SecurityPage() {
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
                placeholder="Search security logs..." 
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

        {/* Security Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Security Overview */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Security Center</h1>
              <p className="text-gray-500 mt-1">Monitor and manage your payment security settings</p>
            </div>

            {/* Security Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Security Score
                  </CardTitle>
                  <Shield className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">92/100</div>
                      <Badge variant="success">Strong</Badge>
                    </div>
                    <Progress value={92} className="h-2 bg-gray-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Active Sessions
                  </CardTitle>
                  <History className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-sm text-gray-500">Devices connected</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Last Security Scan
                  </CardTitle>
                  <RefreshCcw className="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">2h ago</div>
                      <p className="text-sm text-green-600">All systems normal</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <RefreshCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Security Alerts
                  </CardTitle>
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-sm text-yellow-600">Require attention</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Security Settings and Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Security Settings */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure your security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <Fingerprint className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Biometric Authentication</span>
                      </div>
                      <p className="text-sm text-gray-500">Use fingerprint or face recognition</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <KeyRound className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Two-Factor Authentication</span>
                      </div>
                      <p className="text-sm text-gray-500">Additional security layer for transactions</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <Lock className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Transaction PIN</span>
                      </div>
                      <p className="text-sm text-gray-500">Require PIN for all transactions</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Security Notifications</span>
                      </div>
                      <p className="text-sm text-gray-500">Get alerts for suspicious activities</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              {/* Security Activity Log */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Security Activity</CardTitle>
                      <CardDescription>Recent security events and alerts</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Successful login</p>
                          <span className="text-sm text-gray-500">2 min ago</span>
                        </div>
                        <p className="text-sm text-gray-500">Login from Chrome on Windows</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Failed login attempt</p>
                          <span className="text-sm text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-sm text-gray-500">3 failed attempts from unknown IP</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Shield className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Security scan completed</p>
                          <span className="text-sm text-gray-500">2 hours ago</span>
                        </div>
                        <p className="text-sm text-gray-500">No vulnerabilities detected</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Lock className="h-5 w-5 text-indigo-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Password changed</p>
                          <span className="text-sm text-gray-500">1 day ago</span>
                        </div>
                        <p className="text-sm text-gray-500">Password updated successfully</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Status */}
              <Card className="hover:shadow-xl transition-shadow lg:col-span-2">
                <CardHeader>
                  <CardTitle>Compliance & Certifications</CardTitle>
                  <CardDescription>Security standards and compliance status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <div className="flex-shrink-0 mr-4">
                        <Shield className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">PCI DSS</h4>
                        <p className="text-sm text-green-600">Certified Level 1</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                      <div className="flex-shrink-0 mr-4">
                        <Lock className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">ISO 27001</h4>
                        <p className="text-sm text-blue-600">Certified</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                      <div className="flex-shrink-0 mr-4">
                        <CheckCircle2 className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">GDPR</h4>
                        <p className="text-sm text-purple-600">Compliant</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}