import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header';
import Image from 'next/image';

import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Holel Management',
  description: "Hotel Management involves the efficient coordination of various hotel operations to ensure exceptional guest experiences and maximize profitability.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {/* Header */}
          <Header/>
        {children}
        {/* Footer */}
        </main>
      </body>
    </html>
  )
}
