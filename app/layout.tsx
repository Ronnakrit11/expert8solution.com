'use client'

import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import { Analytics } from '@vercel/analytics/react'

import React, { FC, useEffect } from 'react'

import { SessionProvider, useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import socketIO from 'socket.io-client'

import Loader from '../components/Loader/Loader'
import { ThemeProvider } from '../components/theme-provider'
import { Providers } from './Provider'
import './globals.css'

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || ''
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] })

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <LoadUser>
                <Analytics />
                <div>{children}</div>
              </LoadUser>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  )
}

const LoadUser: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({})
  const { data: session } = useSession()

  useEffect(() => {
    socketId.on('connection', () => {})
  }, [])

  return (
    <div>{isLoading && session ? <Loader /> : <div className="font-Inter">{children} </div>}</div>
  )
}
