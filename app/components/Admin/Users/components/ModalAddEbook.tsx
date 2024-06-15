import { styles } from '@/styles'
import { Box, Modal } from '@mui/material'

import React, { useEffect, useState } from 'react'

const ModalAddEbook = ({
  openModalAddEbook,
  setOpenModalAddEbook,
  userInfo,
  ebookList,
  setSelectEbook,
  selectEbook,
  handleAddEbook,
}: any) => {
  const [ebookOption, setEbookOption] = useState([])

  useEffect(() => {
    if (ebookList?.ebooks.length) {
      const newOption = ebookList?.ebooks.map((ele: any) => {
        const isExits = userInfo.ebooks.some((item: any) => item._id === ele._id)
        return {
          ...ele,
          isExits,
        }
      })
      setEbookOption(newOption)
    }
  }, [])

  return (
    <Modal
      open={openModalAddEbook}
      onClose={() => setOpenModalAddEbook(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <h1 className={`${styles.title}`}>Add Ebook To "{userInfo?.name}"</h1>
        <div className="w-[100%] mt-4">
          <select
            name=""
            id=""
            className={`${styles.input}`}
            value={selectEbook}
            onChange={(e: any) => setSelectEbook(e.target.value)}
          >
            <option value="">Select Course</option>
            {ebookOption.map?.((item: any) => (
              <option value={item._id} key={item._id} disabled={item.isExits}>
                {item.name}
              </option>
            ))}
          </select>
          <div />
        </div>
        <div className="flex w-full items-center justify-center mb-6 mt-6">
          <button
            disabled={!!!selectEbook}
            className={`${styles.button}  w-full h-[30px] bg-[#2190ff] mt-4`}
            onClick={handleAddEbook}
          >
            Add
          </button>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalAddEbook
