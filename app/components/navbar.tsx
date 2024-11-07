"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <nav>
            <ul className="space-y-2">
                <li>
                    <Link href="/dashboard" onClick={() => handleLinkClick('/wibmo_pay/dashboard')} className={`block py-2 px-4 rounded ${activeLink === '/wibmo_pay/dashboard' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/transactions" onClick={() => handleLinkClick('/wibmo_pay/transactions')} className={`block py-2 px-4 rounded ${activeLink === '/wibmo_pay/transactions' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Transactions
                    </Link>
                </li>
                <li>
                    <Link href="/wallets" onClick={() => handleLinkClick('/wibmo_pay/wallets')} className={`block py-2 px-4 rounded ${activeLink === '/wibmo_pay/wallets' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Wallets
                    </Link>
                </li>
                <li>
                    <Link href="/payment" onClick={() => handleLinkClick('/wibmo_pay/payment')} className={`block py-2 px-4 rounded ${activeLink === '/wibmo_pay/payment' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Payment
                    </Link>
                </li>
                <li>
                    <Link href="/security" onClick={() => handleLinkClick('/wibmo_pay/security')} className={`block py-2 px-4 rounded ${activeLink === '/wibmo_pay/security' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Security
                    </Link>
                </li>
                <li>
                    <Link href="/reports" onClick={() => handleLinkClick('/wibmo_pay/reports')} className={`block py-2 px-4 rounded ${activeLink === '/wibmo_pay/reports' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Reports
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
