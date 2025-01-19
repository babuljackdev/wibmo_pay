"use client"

import React, { useEffect, useState } from 'react'
import { Bell, ChevronDown, CreditCard, Search, Wallet, ArrowUpRight, ArrowDownRight, DollarSign, History, QrCode } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
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

const recentTransactions = [
  { id: 'TX123456', amount: 100.00, type: 'Payment', date: '2024-03-05', description: 'Fuel Purchase' },
  { id: 'TX123457', amount: 500.00, type: 'Top-up', date: '2024-03-04', description: 'Wallet Recharge' },
  { id: 'TX123458', amount: 75.50, type: 'Payment', date: '2024-03-03', description: 'Fuel Purchase' },
  { id: 'TX123459', amount: 200.00, type: 'Withdrawal', date: '2024-03-02', description: 'Bank Transfer' },
  { id: 'TX123460', amount: 50.00, type: 'Payment', date: '2024-03-01', description: 'Fuel Purchase' },
]

export default function WalletPage() {
  const [balance, setBalance] = useState(0.0)
  const [enteredAmount, setEnteredAmount] = useState<number>(0)
  const [showQRCode, setShowQRCode] = useState(false)

  useEffect(() => {
    const storedBalance = localStorage.getItem('balance')
    if (storedBalance) {
      setBalance(parseFloat(storedBalance))
    } else {
      localStorage.setItem('balance', '0')
    }
  }, [])

  function handleAddFunds() {
    if(isNaN(enteredAmount)) return
    const newBalance = balance + enteredAmount
    localStorage.setItem('balance', String(newBalance))
    setBalance(newBalance)
    setEnteredAmount(0)
  }

  function handleWithdraw() {
    if(isNaN(enteredAmount) || enteredAmount > balance) return
    const newBalance = balance - enteredAmount
    localStorage.setItem('balance', String(newBalance))
    setBalance(newBalance)
    setEnteredAmount(0)
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
                placeholder="Search transactions..." 
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

        {/* Wallet Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Wallet Header */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Digital Wallet</h1>
              <p className="text-gray-500 mt-1">Manage your wallet balance and transactions</p>
            </div>

            {/* Wallet Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Available Balance
                  </CardTitle>
                  <Wallet className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">${balance.toFixed(2)}</div>
                      <div className="flex items-center text-green-600 text-sm">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        Last updated just now
                      </div>
                    </div>
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Monthly Spending
                  </CardTitle>
                  <History className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">$789.00</div>
                      <div className="flex items-center text-blue-600 text-sm">
                        78.9% of limit
                      </div>
                    </div>
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <History className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <Progress value={78.9} className="h-2 mt-4" />
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Quick Actions
                  </CardTitle>
                  <QrCode className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full" onClick={() => setShowQRCode(true)}>
                      Show QR
                    </Button>
                    <Button variant="outline" className="w-full">
                      Send Money
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Wallet Management */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Manage Wallet</CardTitle>
                <CardDescription>Add or withdraw funds from your wallet</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="add-funds" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="add-funds">Add Funds</TabsTrigger>
                    <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                  </TabsList>
                  <TabsContent value="add-funds">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <Button onClick={() => setEnteredAmount(50)} variant="outline">$50</Button>
                        <Button onClick={() => setEnteredAmount(100)} variant="outline">$100</Button>
                        <Button onClick={() => setEnteredAmount(200)} variant="outline">$200</Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          value={enteredAmount}
                          onChange={(e) => setEnteredAmount(Number(e.target.value))}
                          placeholder="Enter amount"
                          className="flex-1"
                        />
                        <Button onClick={handleAddFunds} className="w-32">Add Funds</Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="withdraw">
                    <div className="space-y-4">
                      <Input
                        type="number"
                        value={enteredAmount}
                        onChange={(e) => setEnteredAmount(Number(e.target.value))}
                        placeholder="Enter amount to withdraw"
                      />
                      <Button onClick={handleWithdraw} className="w-full">
                        Withdraw to Bank Account
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest wallet activities</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Transaction ID</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              transaction.type === 'Payment' ? 'default' :
                                transaction.type === 'Top-up' ? 'success' : 'secondary'
                            }
                          >
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ${transaction.amount.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right text-gray-500">{transaction.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}