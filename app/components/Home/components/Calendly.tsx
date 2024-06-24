'use client'

import { useState } from 'react'

import { Button, Modal } from 'flowbite-react'
import { InlineWidget } from 'react-calendly'

import { Separator } from './Separator'

export const Calendly = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <button
        className="bg-primary text-white px-6 py-4 rounded-2xl  "
        onClick={() => setOpenModal(true)}
      >
        Booking Demo
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} className="z-[999999]">
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="text-center" id="calendly">
            <div className="flex items-center justify-center">
              <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
            <InlineWidget
              url="https://calendly.com/expert8-solution-info/30min"
              styles={{ height: '1000px', borderRadius: '5px' }}
            />
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}
