import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

import * as React from 'react'

export default function SimpleBackdrop({ open = false, setOpen }: any) {
  const handleClose = () => {
    setOpen?.(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 2 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
