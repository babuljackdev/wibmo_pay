"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  WalletCards,
  Receipt,
  Shield,
  FileBarChart,
  CreditCard,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Transactions', href: '/transactions', icon: Receipt },
  { name: 'Wallets', href: '/wallets', icon: WalletCards },
  { name: 'Payments', href: '/payment', icon: CreditCard },
  { name: 'Security', href: '/security', icon: Shield },
  { name: 'Reports', href: '/reports', icon: FileBarChart },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      <div className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-100 group ${
                isActive
                  ? 'bg-primary/10 text-primary hover:bg-primary/20'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <Icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${
                isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
              }`} />
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 w-1 h-8 bg-primary rounded-r-full transform -translate-y-1/2 top-1/2" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="space-y-1">
          <Link
            href="/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-primary transition-all duration-200 group"
          >
            <Settings className="h-5 w-5 text-gray-400 group-hover:text-primary transition-transform group-hover:scale-110" />
            <span className="font-medium">Settings</span>
          </Link>
          <Link
            href="/"
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
          >
            <LogOut className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-transform group-hover:scale-110" />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
