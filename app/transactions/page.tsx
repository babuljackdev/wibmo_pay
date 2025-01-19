import React from 'react'
import { ArrowUpDown, Bell, ChevronLeft, ChevronRight, CreditCard, Download, Filter, Search } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Nav from '../components/navbar'

const transactions = [
  { id: 'TX123456', amount: 100.00, status: 'completed', date: '2024-03-05', customer: 'John Doe', type: 'Payment', method: 'Credit Card' },
  { id: 'TX123457', amount: 75.50, status: 'pending', date: '2024-03-05', customer: 'Jane Smith', type: 'Refund', method: 'Bank Transfer' },
  { id: 'TX123458', amount: 200.00, status: 'failed', date: '2024-03-04', customer: 'Alice Johnson', type: 'Top-up', method: 'Debit Card' },
  { id: 'TX123459', amount: 50.00, status: 'completed', date: '2024-03-04', customer: 'Bob Brown', type: 'Payment', method: 'Wallet' },
  { id: 'TX123460', amount: 150.00, status: 'completed', date: '2024-03-03', customer: 'Charlie Davis', type: 'Payment', method: 'Credit Card' },
  { id: 'TX123461', amount: 80.00, status: 'pending', date: '2024-03-03', customer: 'Diana Evans', type: 'Top-up', method: 'UPI' },
  { id: 'TX123462', amount: 120.00, status: 'completed', date: '2024-03-02', customer: 'Ethan Foster', type: 'Payment', method: 'Net Banking' },
  { id: 'TX123463', amount: 90.00, status: 'failed', date: '2024-03-02', customer: 'Fiona Grant', type: 'Refund', method: 'Bank Transfer' },
  { id: 'TX123464', amount: 180.00, status: 'completed', date: '2024-03-01', customer: 'George Harris', type: 'Payment', method: 'Credit Card' },
  { id: 'TX123465', amount: 60.00, status: 'completed', date: '2024-03-01', customer: 'Hannah Irving', type: 'Top-up', method: 'UPI' },
]

export default function TransactionsPage() {
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
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
            <p className="text-gray-500 mt-1">Monitor and manage your payment transactions</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search transactions..." 
                className="w-64 pl-10" 
              />
            </div>
            <Button size="icon" variant="ghost" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Transaction Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-green-600 mt-1">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-green-600 mt-1">+0.5% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Average Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$110.50</div>
              <p className="text-xs text-green-600 mt-1">+5.2% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Failed Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">1.5%</div>
              <p className="text-xs text-green-600 mt-1">-0.3% from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Recent Transactions</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Showing last 10 transactions</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Advanced Filters
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="payment">Payment</SelectItem>
                    <SelectItem value="refund">Refund</SelectItem>
                    <SelectItem value="top-up">Top-up</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Payment Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Methods</SelectItem>
                    <SelectItem value="credit-card">Credit Card</SelectItem>
                    <SelectItem value="debit-card">Debit Card</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="net-banking">Net Banking</SelectItem>
                    <SelectItem value="wallet">Wallet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[140px]">Transaction ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4 inline cursor-pointer" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell className="text-right font-medium">
                        ${transaction.amount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            transaction.status === 'completed' ? 'success' :
                              transaction.status === 'pending' ? 'warning' : 'destructive'
                          }
                          className="capitalize"
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between space-x-2 py-4">
              <div className="text-sm text-gray-500">
                Showing 1-10 of 50 transactions
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}