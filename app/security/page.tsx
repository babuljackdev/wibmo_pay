import React from 'react'
import { Bell, ChevronRight, CreditCard, Shield, Smartphone, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Nav from '../components/navbar'

const securityLogs = [
  { id: 'LOG001', event: 'Login Attempt', status: 'Success', ip: '192.168.1.1', date: '2024-03-05 14:30:00' },
  { id: 'LOG002', event: 'Password Change', status: 'Success', ip: '192.168.1.1', date: '2024-03-04 10:15:00' },
  { id: 'LOG003', event: 'Failed Login', status: 'Failed', ip: '203.0.113.0', date: '2024-03-03 08:45:00' },
  { id: 'LOG004', event: 'MFA Setup', status: 'Success', ip: '192.168.1.1', date: '2024-03-02 16:20:00' },
  { id: 'LOG005', event: 'Account Lock', status: 'Warning', ip: '203.0.113.0', date: '2024-03-01 22:10:00' },
]

export default function SecurityPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <div className="flex items-center mb-8">
          <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-2xl font-bold">Wibmo Pay</span>
        </div>
        <Nav />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Security Settings</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Security Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Security Score
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85/100</div>
              <p className="text-xs text-muted-foreground">
                Your account is well-protected
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Last Login
              </CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 hours ago</div>
              <p className="text-xs text-muted-foreground">
                From 192.168.1.1
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Sessions
              </CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                Devices currently logged in
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Security Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your account security preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="mfa" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mfa">Multi-Factor Authentication</TabsTrigger>
                <TabsTrigger value="password">Password Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="mfa">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mfa-toggle">Enable MFA</Label>
                      <p className="text-sm text-muted-foreground">Secure your account with multi-factor authentication</p>
                    </div>
                    <Switch id="mfa-toggle" />
                  </div>
                  <div>
                    <Label>MFA Methods</Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="sms-mfa" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        <Label htmlFor="sms-mfa">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="email-mfa" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        <Label htmlFor="email-mfa">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="authenticator-mfa" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        <Label htmlFor="authenticator-mfa">Authenticator App</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input type="password" id="current-password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input type="password" id="new-password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input type="password" id="confirm-password" />
                  </div>
                  <Button>Change Password</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Security Logs */}
        <Card>
          <CardHeader>
            <CardTitle>Security Logs</CardTitle>
            <CardDescription>Recent security events on your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Log ID</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead className="text-right">Date & Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {securityLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.id}</TableCell>
                    <TableCell>{log.event}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          log.status === 'Success' ? 'success' :
                          log.status === 'Failed' ? 'destructive' : 'warning'
                        }
                      >
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{log.ip}</TableCell>
                    <TableCell className="text-right">{log.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Download Full Log</Button>
            <Button variant="outline">
              View All Logs
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}