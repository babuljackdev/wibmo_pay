'use client'

import React, { useEffect, useState } from 'react'
import { BarChart, Bell, CreditCard, Smartphone, TrendingUp, Wallet, X } from 'lucide-react'
import { QRCodeSVG as QRCode } from 'qrcode.react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import Nav from '../components/navbar'

/* const recentTransactions = [
  { id: 'TX123456', amount: 100.00, type: 'Payment', date: '2024-03-05', description: 'Fuel Purchase' },
  { id: 'TX123457', amount: 500.00, type: 'Top-up', date: '2024-03-04', description: 'Wallet Recharge' },
  { id: 'TX123458', amount: 75.50, type: 'Payment', date: '2024-03-03', description: 'Fuel Purchase' },
  { id: 'TX123459', amount: 200.00, type: 'Withdrawal', date: '2024-03-02', description: 'Bank Transfer' },
  { id: 'TX123460', amount: 50.00, type: 'Payment', date: '2024-03-01', description: 'Fuel Purchase' },
] */

export default function WalletPage() {
  const [paymentType, setPaymentType] = useState<string>('send')
  const [amount, setAmount] = useState('0')
  const [showQRCode, setShowQRCode] = useState(false)
  const [nfcScanning, setNfcScanning] = useState(false)


  const [balance, setBalance] = useState(0.0)
  function handleReceive(): void {
    localStorage.setItem('balance', String(balance + parseFloat(amount)))
    setBalance(balance + parseFloat(amount))
  }

  function handleSend(): void {
    localStorage.setItem('balance', String(balance - parseFloat(amount)))
    setBalance(balance - parseFloat(amount))

  }

  useEffect(() => {
    const balance = localStorage.getItem('balance')
    if (balance) {
      setBalance(parseFloat(balance))
    } else {
      localStorage.setItem('balance', '0')
    }
  }, [])

  const generateQRCode = () => {
    if (amount) {
      setShowQRCode(true)
    }
  }

  const startNFCScanning = () => {
    setNfcScanning(true)
    setTimeout(() => {
      setNfcScanning(false)
      alert('NFC scanning completed. Payment processed.')

      if(paymentType === 'send') {
        handleSend()
      } else {
        handleReceive()
      }
    }, 5000)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <div className="flex items-center mb-8">
          <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-2xl font-bold">Wibmo Pay</span>
        </div>
        <Nav />
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Wallet</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${balance}</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$789.00</div>
              <p className="text-xs text-muted-foreground">78.9% of monthly budget</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fuel Purchases</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Transactions this month</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quick Payment</CardTitle>
            <CardDescription>Generate QR code or use NFC for quick payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-4">
                <Label>Payment Type</Label>
                <RadioGroup value={paymentType} onValueChange={setPaymentType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="send" id="send" />
                    <Label htmlFor="send">Send Payment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="receive" id="receive" />
                    <Label htmlFor="receive">Receive Payment</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Button onClick={generateQRCode}>Generate QR</Button>
              </div>
              <div className="flex justify-center">
                <Button onClick={startNFCScanning} disabled={nfcScanning}>
                  {nfcScanning ? 'Scanning...' : 'Scan NFC'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {showQRCode && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Scan QR Code</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowQRCode(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <QRCode 
                value={JSON.stringify({
                  type: paymentType,
                  amount: parseFloat(amount) || 0
                })}
                size={200}
              />
              <p className="mt-4 text-center">Scan this QR code to {paymentType} payment of ${amount}</p>
            </div>
          </div>
        )}

        {nfcScanning && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">NFC Scanning</h2>
              <div className="animate-pulse">
                <Smartphone className="h-24 w-24 text-blue-500 mx-auto" />
              </div>
              <p className="mt-4">Hold your device near the NFC reader</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}