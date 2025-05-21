import Loader from '@/components/Loader/Loader'
import LoadingBackDrop from '@/components/Loader/LoadingBackDrop'
import { useGetAllCoursesQuery } from '@/redux/features/courses/coursesApi'
import { useAddEbookUserMutation, useGetAllEbookQuery } from '@/redux/features/ebooks/ebookApi'
import {
  useAddCourseToUserMutation,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from '@/redux/features/user/userApi'
import { styles } from '@/styles'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import { Box, Button, Modal } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import React, { FC, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { toast } from 'react-hot-toast'
import {
  AiOutlineDelete,
  AiOutlineFileAdd,
  AiOutlineMail,
  AiOutlineVideoCameraAdd,
} from 'react-icons/ai'
import { format } from 'timeago.js'

const ModalAddUser = ({
  openModalAddUser,
  setOpenModalAddUser,
  userState,
  setUserState,
  handleSubmit,
}) => {
  const validateError = () => {
    let error = ''
    if (!userState.name) {
      error = 'name user is required!'
    } else if (!userState.email) {
      error = 'email is required!'
    } else if (!userState.password) {
      error = 'password is required!'
    } else if (!userState.confirmPassword) {
      error = 'confirm password is required!'
    } else if (userState.password !== userState.confirmPassword) {
      error = 'password and confirm password is not match!'
    }

    return error
  }

  const onSubmit = () => {
    let error = validateError()
    if (error) {
      return alert(error)
    }

    handleSubmit()
  }

  return (
    <Modal
      open={openModalAddUser}
      onClose={() => setOpenModalAddUser(prev => !prev)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <h1 className={`${styles.title}`}>Add New User</h1>
        <div className="mt-4 text-black">
          Name:
          <input
            type="text"
            value={userState.name}
            onChange={e => setUserState(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter name..."
            className={`${styles.input} mb-2`}
          />
          Email:
          <input
            type="email"
            value={userState.email}
            onChange={e => setUserState(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Enter email..."
            className={`${styles.input} mb-2`}
          />
          Password:
          <input
            type="text"
            value={userState.password}
            onChange={e => setUserState(prev => ({ ...prev, password: e.target.value }))}
            placeholder="Enter Password"
            className={`${styles.input} mb-2`}
          />
          Confirm Password:
          <input
            type="text"
            value={userState.confirmPassword}
            onChange={e => setUserState(prev => ({ ...prev, confirmPassword: e.target.value }))}
            placeholder="Confirm Password"
            className={`${styles.input} mb-2`}
          />
          <br />
          <div className={`${styles.button} my-6 !h-[30px]`} onClick={onSubmit}>
            Submit
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalAddUser
