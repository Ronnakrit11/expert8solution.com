import { Box, Modal } from '@mui/material'

import React, { FC } from 'react'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  component: any
  setRoute?: (route: string) => void
  refetch?: any
}

const CustomModal: FC<Props> = ({ open, setOpen, setRoute, component: Component, refetch }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] m-auto  800px:w-[450px] outline-none">
        <Component setOpen={setOpen} setRoute={setRoute} refetch={refetch} />
      </div>
    </Modal>
  )
}

export default CustomModal
