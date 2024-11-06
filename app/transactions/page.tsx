import React from 'react'
import { ArrowUpDown, Bell, ChevronLeft, ChevronRight, CreditCard, Download, Search } from 'lucide-react'

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
  { id: 'TX123456', amount: 100.00, status: 'completed', date: '2024-03-05', customer: 'John Doe', type: 'Payment' },
  { id: 'TX123457', amount: 75.50, status: 'pending', date: '2024-03-05', customer: 'Jane Smith', type: 'Refund' },
  { id: 'TX123458', amount: 200.00, status: 'failed', date: '2024-03-04', customer: 'Alice Johnson', type: 'Top-up' },
  { id: 'TX123459', amount: 50.00, status: 'completed', date: '2024-03-04', customer: 'Bob Brown', type: 'Payment' },
  { id: 'TX123460', amount: 150.00, status: 'completed', date: '2024-03-03', customer: 'Charlie Davis', type: 'Payment' },
  { id: 'TX123461', amount: 80.00, status: 'pending', date: '2024-03-03', customer: 'Diana Evans', type: 'Top-up' },
  { id: 'TX123462', amount: 120.00, status: 'completed', date: '2024-03-02', customer: 'Ethan Foster', type: 'Payment' },
  { id: 'TX123463', amount: 90.00, status: 'failed', date: '2024-03-02', customer: 'Fiona Grant', type: 'Refund' },
  { id: 'TX123464', amount: 180.00, status: 'completed', date: '2024-03-01', customer: 'George Harris', type: 'Payment' },
  { id: 'TX123465', amount: 60.00, status: 'completed', date: '2024-03-01', customer: 'Hannah Irving', type: 'Top-up' },
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
          <h1 className="text-3xl font-bold">Transactions</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search transactions..." className="w-64" />
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Transactions Table Card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex justify-between items-center mb-4">
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
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
            </div>

            {/* Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Transaction ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.customer}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell className="text-right">${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.status === 'completed' ? 'success' :
                            transaction.status === 'pending' ? 'warning' : 'destructive'
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{transaction.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-end space-x-2 py-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}