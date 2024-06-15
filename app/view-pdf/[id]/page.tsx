'use client'

import Header from '@/components/Layout/Header'
import Loader from '@/components/Loader/Loader'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import type { ToolbarProps, ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar'

import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useSearchParams } from 'next/navigation'

import Footer from '../../components/Footer'

const Page = ({ params }: any) => {
  const [open, setOpen] = useState(false)
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [activeItem, setActiveItem] = useState(2)
  const [route, setRoute] = useState('Login')

  const searchParams = useSearchParams()
  const paymentToken = searchParams?.get('ptoken')

  useEffect(() => {
    if (paymentToken) {
      checkPaymentToken()
    }
  }, [])

  const checkPaymentToken = async () => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/create-order-ebook-postback?payment_token=${paymentToken}`,
      )
    } catch (err) {}
    window.location.href = `/view-pdf/${params.id}`
  }

  useEffect(() => {
    if (!paymentToken) {
      function handleContextMenu(e) {
        e.preventDefault() // prevents the default right-click menu from appearing
      }
      // add the event listener to the component's root element
      const rootElement: any = document.getElementById('my-component')
      rootElement.addEventListener('contextmenu', handleContextMenu)
      // remove the event listener when the component is unmounted

      return () => {
        rootElement.removeEventListener('contextmenu', handleContextMenu)
      }
    }
  }, [])

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    Download: () => <></>,
    DownloadMenuItem: () => <></>,
    EnterFullScreen: () => <></>,
    EnterFullScreenMenuItem: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
    Print: () => <></>,
    PrintMenuItem: () => <></>,
  })

  const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
  )
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  })
  const { renderDefaultToolbar } = defaultLayoutPluginInstance.toolbarPluginInstance

  if (paymentToken) {
    return <Loader />
  }

  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className="w-full text-center py-10">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
          <div style={{ height: '750px' }} id="my-component">
            <Viewer
              withCredentials={true}
              fileUrl={`${process.env.NEXT_PUBLIC_ORIGIN_URI}/api/v1/get-ebook/${params.id}/download`}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </div>
      <Footer />
    </>
  )
}

export default Page
