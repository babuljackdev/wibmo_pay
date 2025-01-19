"use client"

import React, { useEffect, useState } from 'react'
import { Bell, ChevronDown, CreditCard, Search, Wallet, ArrowUpRight, DollarSign, QrCode, X, Smartphone } from 'lucide-react'
import { QRCodeSVG as QRCode } from 'qrcode.react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Nav from '../components/navbar'

export default function PaymentPage() {
  const [paymentType, setPaymentType] = useState<string>('send')
  const [amount, setAmount] = useState('0')
  const [showQRCode, setShowQRCode] = useState(false)
  const [nfcScanning, setNfcScanning] = useState(false)
  const [balance, setBalance] = useState(0.0)

  function handleReceive(): void {
    if(isNaN(parseFloat(amount))) return
    localStorage.setItem('balance', String(balance + parseFloat(amount)))
    setBalance(balance + parseFloat(amount))
  }

  function handleSend(): void {
    if(isNaN(parseFloat(amount)) || parseFloat(amount) > balance) return
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

        {/* Payment Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Balance Card */}
            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Available Balance</CardTitle>
                    <CardDescription>Your current wallet balance</CardDescription>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">${balance.toFixed(2)}</div>
                <div className="flex items-center text-green-600 text-sm mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Last updated just now
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                    <QrCode className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>Quick Payment</CardTitle>
                    <CardDescription>Generate QR code or use NFC for quick payments</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Payment Type</Label>
                  <RadioGroup value={paymentType} onValueChange={setPaymentType} className="bg-gray-50/50 p-4 rounded-lg border">
                    <div className="flex items-center space-x-2 p-2 hover:bg-white rounded transition-colors">
                      <RadioGroupItem value="send" id="send" />
                      <Label htmlFor="send">Send Payment</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 hover:bg-white rounded transition-colors">
                      <RadioGroupItem value="receive" id="receive" />
                      <Label htmlFor="receive">Receive Payment</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      onClick={generateQRCode}
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                    >
                      <QrCode className="h-4 w-4 mr-2" />
                      Generate QR
                    </Button>
                    <Button 
                      onClick={startNFCScanning} 
                      disabled={nfcScanning}
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/5"
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      {nfcScanning ? 'Scanning...' : 'Scan NFC'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Scan QR Code</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setShowQRCode(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <CardDescription>
                Scan this code to {paymentType} payment of ${amount}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              <div className="bg-white p-4 rounded-xl shadow-inner">
                <QRCode 
                  value={JSON.stringify({
                    type: paymentType,
                    amount: parseFloat(amount) || 0
                  })}
                  size={200}
                />
              </div>
              <p className="text-sm text-gray-500 text-center">
                Hold your device's camera up to the QR code to process the payment
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* NFC Scanning Modal */}
      {nfcScanning && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>NFC Scanning</CardTitle>
              <CardDescription>Hold your device near the NFC reader</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6 py-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping"></div>
                <div className="relative bg-gradient-to-br from-primary to-blue-600 p-6 rounded-full">
                  <Smartphone className="h-12 w-12 text-white" />
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Processing payment of ${amount}...
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}