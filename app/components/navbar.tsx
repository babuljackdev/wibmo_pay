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
                    <Link href="/dashboard" onClick={() => handleLinkClick('/dashboard')} className={`block py-2 px-4 rounded ${activeLink === '/dashboard' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/transactions" onClick={() => handleLinkClick('/transactions')} className={`block py-2 px-4 rounded ${activeLink === '/transactions' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Transactions
                    </Link>
                </li>
                <li>
                    <Link href="#" onClick={() => handleLinkClick('/wallets')} className={`block py-2 px-4 rounded ${activeLink === '/wallets' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Wallets
                    </Link>
                </li>
                <li>
                    <Link href="#" onClick={() => handleLinkClick('/security')} className={`block py-2 px-4 rounded ${activeLink === '/security' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Security
                    </Link>
                </li>
                <li>
                    <Link href="/reports" onClick={() => handleLinkClick('/reports')} className={`block py-2 px-4 rounded ${activeLink === '/reports' ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Reports
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
