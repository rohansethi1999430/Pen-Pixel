import { Inter } from 'next/font/google'
import './globals.css'
import Head from './head';
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
