"use client"

import React, { useEffect, useState } from 'react'
import { Bell, ChevronRight, CreditCard, DollarSign, Wallet } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
  const [enteredAmount, setEnteredAmount] = useState(0)
  function handleAddFunds(): void {
    localStorage.setItem('balance', String(balance + enteredAmount))
    setBalance(balance + enteredAmount)
  }

  function handleWithdraw(): void {
    localStorage.setItem('balance', String(balance - enteredAmount))
    setBalance(balance - enteredAmount)

  }

  useEffect(() => {
    const balance = localStorage.getItem('balance')
    if (balance) {
      setBalance(parseFloat(balance))
    } else {
      localStorage.setItem('balance', '0')
    }
  }, [])

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
          <h1 className="text-3xl font-bold">Wallet</h1>
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

        {/* Wallet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Wallet Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${balance}</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Spending
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$789.00</div>
              <Progress value={78.9} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                78.9% of monthly budget
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Fuel Purchases
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">
                Transactions this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Wallet Management */}
        <Card className="mb-6">
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
                    <Button onClick={()=> setEnteredAmount(50)} variant="outline">$50</Button>
                    <Button onClick={()=> setEnteredAmount(100)} variant="outline">$100</Button>
                    <Button onClick={()=> setEnteredAmount(200)} variant="outline">$200</Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      onChange={(e) => setEnteredAmount(Number(e.target.value))}
                      value={enteredAmount}
                      type="number" placeholder="Enter amount" />
                    <Button
                      onClick={handleAddFunds}
                    >Add Funds</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="withdraw">
                <div className="space-y-4">
                  <Input type="number"
                    onChange={(e) => setEnteredAmount(Number(e.target.value))}
                    placeholder="Enter amount to withdraw" />

                  <Button
                    onClick={handleWithdraw}
                  >Withdraw to Bank Account</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest wallet activities</CardDescription>
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
                  <TableRow key={transaction.id}>
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
                    <TableCell className="text-right">
                      ${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">{transaction.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Download Statement</Button>
            <Button variant="outline">
              View All Transactions
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}