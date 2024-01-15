import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oracle foundation',
  description: 'Next big thing on fantom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap" rel="stylesheet" />
        {/* Outros elementos de Head */}
        <link rel="icon" href="/logo.png" type="image/png" />

      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
