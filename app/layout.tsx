'use client'

import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import { Analytics } from '@vercel/analytics/react'

import React, { FC, useEffect } from 'react'

import { SessionProvider, useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import socketIO from 'socket.io-client'
import Script from 'next/script'

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
          <head>
          
          <Script id="tawk-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6688a7b6e1e4f70f24edfc5c/1i22su8v3';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

      </head>
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
