import { styles } from '@/styles'
import { Box, Modal } from '@mui/material'

import React, { useEffect, useState } from 'react'

const ModalAddCourse = ({
  handleAddCourse,
  selectCourse,
  openModalAddCourse,
  setOpenModalAddCourse,
  userInfo,
  courseList,
  setSelectCourse,
}: any) => {
  const [courseOption, setCourseOption] = useState([])

  useEffect(() => {
    if (courseList?.courses.length) {
      const newOption = courseList?.courses.map((ele: any) => {
        const isExits = userInfo.courses.some((course: any) => course._id === ele._id)
        return {
          ...ele,
          isExits,
        }
      })
      setCourseOption(newOption)
    }
  }, [])

  return (
    <Modal
      open={openModalAddCourse}
      onClose={() => setOpenModalAddCourse(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <h1 className={`${styles.title}`}>Add Course To "{userInfo?.name}"</h1>
        <div className="w-[100%] mt-4">
          <select
            name=""
            id=""
            className={`${styles.input}`}
            value={selectCourse}
            onChange={(e: any) => setSelectCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courseOption.map?.((item: any) => (
              <option value={item._id} key={item._id} disabled={item.isExits}>
                {item.name}
              </option>
            ))}
          </select>
          <div />
        </div>
        <div className="flex w-full items-center justify-center mb-6 mt-6">
          <button
            disabled={!!!selectCourse}
            className={`${styles.button}  w-full h-[30px] bg-[#2190ff] mt-4`}
            onClick={handleAddCourse}
          >
            Add
          </button>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalAddCourse
