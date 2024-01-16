import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Loading from './Loading'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rightchoice Travels & Tours',
  description: 'officiall website of RTC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body
        className={cn('relative h-full font-sans antialiased',
          inter.className)}>
        <main className='relative flex flex-col min-h-screen'>
          <Suspense fallback={<Loading/>}>
          <Navbar/>
          <div className='flex-grow flex-1'>
          {children}
          </div>
          <Footer/>
          </Suspense>
        </main>
      </body>
    </html>
  )
}
