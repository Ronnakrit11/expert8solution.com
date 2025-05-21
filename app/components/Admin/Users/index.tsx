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

import ModalAddCourse from './components/ModalAddCourse'
import ModalAddEbook from './components/ModalAddEbook'
import ModalAddUser from './components/ModalAddUser'

type Props = {
  isTeam?: boolean
}

interface IUserState {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Users: FC<Props> = ({ isTeam }) => {
  const { theme } = useTheme()
  const [active, setActive] = useState(false)
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('admin')
  const [open, setOpen] = useState(false)
  const [openModalAddCourse, setOpenModalAddCourse] = useState(false)
  const [openModalAddEbook, setOpenModalAddEbook] = useState(false)
  const [openModalAddUser, setOpenModalAddUser] = useState(false)
  const [userId, setUserId] = useState('')
  const [userInfo, setUserInfo] = useState({
    name: '',
  })
  const [updateUserRole, { error: updateError, isSuccess }] = useUpdateUserRoleMutation()

  const [userState, setUserState] = useState<IUserState>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [addUser, { isLoading: isLoadingAddUser, error: AddUserError, isSuccess: AddUserSuccess }] =
    useAddUserMutation()

  const [
    addCourse,
    { isLoading: isLoadingAddCourse, error: AddCourseError, isSuccess: AddCourseSuccess },
  ] = useAddCourseToUserMutation()

  const [addEbook, { error: AddEbookError, isSuccess: AddEbookSuccess }] = useAddEbookUserMutation()

  const { isLoading, data, refetch } = useGetAllUsersQuery({}, { refetchOnMountOrArgChange: true })

  const { data: courseList } = useGetAllCoursesQuery({}, { refetchOnMountOrArgChange: true })

  const { data: ebookList } = useGetAllEbookQuery({}, { refetchOnMountOrArgChange: true })

  const [deleteUser, { isSuccess: deleteSuccess, error: deleteError }] = useDeleteUserMutation({})

  const [selectCourse, setSelectCourse] = useState('')
  const [selectEbook, setSelectEbook] = useState('')

  useEffect(() => {
    if (updateError) {
      if ('data' in updateError) {
        const errorMessage = updateError as any
        toast.error(errorMessage.data.message)
      }
    }

    if (isSuccess) {
      refetch()
      toast.success('User role updated successfully')
      setActive(false)
    }

    if (AddCourseSuccess) {
      refetch()
      toast.success('Add Course successfully')
      setOpenModalAddCourse(false)
      setSelectCourse('')
    }

    if (AddEbookSuccess) {
      refetch()
      toast.success('Add Ebook successfully')
      setOpenModalAddEbook(false)
      setSelectEbook('')
    }

    if (deleteSuccess) {
      refetch()
      toast.success('Delete user successfully!')
      setOpen(false)
    }

    if (AddUserSuccess) {
      refetch()
      toast.success('Add User successfully')
      setOpenModalAddUser(false)
    }

    if (deleteError) {
      if ('data' in deleteError) {
        const errorMessage = deleteError as any
        toast.error(errorMessage.data.message)
      }
    }

    if (AddCourseError) {
      if ('data' in AddCourseError) {
        const errorMessage = AddCourseError as any
        toast.error(errorMessage.data.message)
      }
    }
    if (AddEbookError) {
      if ('data' in AddEbookError) {
        const errorMessage = AddEbookError as any
        toast.error(errorMessage.data.message)
      }
    }

    if (AddUserError) {
      if ('data' in AddUserError) {
        const errorMessage = AddUserError as any
        toast.error(errorMessage?.data?.message)
      }
    }
  }, [
    updateError,
    isSuccess,
    deleteSuccess,
    deleteError,
    AddCourseError,
    AddCourseSuccess,
    AddEbookError,
    AddEbookSuccess,
    AddUserError,
    AddUserSuccess,
  ])

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    { field: 'name', headerName: 'Name', flex: 0.5 },
    { field: 'email', headerName: 'Email', flex: 0.5 },
    { field: 'role', headerName: 'Role', flex: 0.5 },
    { field: 'courses', headerName: 'Purchased Courses', flex: 0.5 },
    { field: 'created_at', headerName: 'Joined At', flex: 0.5 },
    {
      field: '     ',
      headerName: 'Add Ebook',
      flex: 0.25,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpenModalAddEbook(true)
                setUserId(params.row.id)

                const userObj = data.users.find((ele: any) => ele._id === params.row.id)

                setUserInfo(userObj)
              }}
            >
              <AiOutlineFileAdd className="dark:text-white text-black" size={20} />
            </Button>
          </>
        )
      },
    },
    {
      field: '    ',
      headerName: 'Add Course',
      flex: 0.25,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpenModalAddCourse(prev => !prev)
                setUserId(params.row.id)

                const userObj = data.users.find((ele: any) => ele._id === params.row.id)

                setUserInfo(userObj)
              }}
            >
              <AiOutlineVideoCameraAdd className="dark:text-white text-black" size={20} />
            </Button>
          </>
        )
      },
    },
    {
      field: ' ',
      headerName: 'Delete',
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpen(!open)
                setUserId(params.row.id)
              }}
            >
              <AiOutlineDelete className="dark:text-white text-black" size={20} />
            </Button>
          </>
        )
      },
    },
    {
      field: '  ',
      headerName: 'Email',
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <a href={`mailto:${params.row.email}`}>
              <AiOutlineMail className="dark:text-white text-black" size={20} />
            </a>
          </>
        )
      },
    },
  ]

  const rows: any = []

  if (isTeam) {
    const newData = data && data.users.filter((item: any) => item.role === 'admin')

    newData &&
      newData.forEach((item: any) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          courses: item.courses.length,
          created_at: format(item.createdAt),
        })
      })
  } else {
    data &&
      data.users.forEach((item: any) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          courses: item.courses.length,
          created_at: format(item.createdAt),
        })
      })
  }

  const handleSubmit = async () => {
    await updateUserRole({ email, role })
  }

  const handleDelete = async () => {
    const id = userId
    await deleteUser(id)
  }

  const handleAddCourse = () => {
    const body = { user_id: userId, course_id: selectCourse }
    addCourse(body)
  }

  const handleAddEbook = () => {
    const body = { user_id: userId, ebook_id: selectEbook }
    addEbook(body)
  }

  const handleAddUser = () => {
    addUser(userState)
  }

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          {isLoadingAddCourse || (isLoadingAddUser && <LoadingBackDrop />)}

          {isTeam ? (
            <div className="w-full flex justify-end">
              <div
                className={`${styles.button} !w-[200px] !rounded-[10px] dark:bg-[#57c7a3] !h-[35px] dark:border dark:border-[#ffffff6c]`}
                onClick={() => setActive(!active)}
              >
                Add New Member
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-end">
              <div
                className={`${styles.button} !w-[200px] !rounded-[10px] bg-primary text-white dark:bg-primary !h-[35px] dark:border dark:border-[#ffffff6c]`}
                onClick={() => setOpenModalAddUser(prev => !prev)}
              >
                + Add New User
              </div>
            </div>
          )}
          <Box
            m="40px 0 0 0"
            height="80vh"
            sx={{
              '& .MuiDataGrid-root': {
                border: 'none',
                outline: 'none',
              },
              '& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon': {
                color: theme === 'dark' ? '#fff' : '#fff',
              },
              '& .MuiDataGrid-sortIcon': {
                color: theme === 'dark' ? '#fff' : '#fff',
              },
              '& .MuiDataGrid-row': {
                color: theme === 'dark' ? '#fff' : '#000',
                borderBottom:
                  theme === 'dark' ? '1px solid #ffffff30!important' : '1px solid #ccc!important',
              },
              '& .MuiTablePagination-root': {
                color: theme === 'dark' ? '#fff' : '#fff',
              },
              '& .MuiDataGrid-cell': {
                borderBottom: 'none!important',
              },
              '& .name-column--cell': {
                color: theme === 'dark' ? '#fff' : '#fff',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: theme === 'dark' ? '#1565c0' : '#1565c0',
                borderBottom: 'none',
                color: theme === 'dark' ? '#fff' : '#fff',
              },
              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: theme === 'dark' ? '#1F2A40' : '#F2F0F0',
              },
              '& .MuiDataGrid-footerContainer': {
                color: theme === 'dark' ? '#fff' : '#fff',
                borderTop: 'none',
                backgroundColor: theme === 'dark' ? '#1565c0' : '#1565c0',
              },
              '& .MuiCheckbox-root': {
                color: theme === 'dark' ? `#b7ebde !important` : `#000 !important`,
              },
              '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
          {active && (
            <Modal
              open={active}
              onClose={() => setActive(!active)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
                <h1 className={`${styles.title}`}>Add New Member</h1>
                <div className="mt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter email..."
                    className={`${styles.input}`}
                  />
                  <select
                    name=""
                    id=""
                    className={`${styles.input} !mt-6`}
                    onChange={(e: any) => setRole(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                  <br />
                  <div className={`${styles.button} my-6 !h-[30px]`} onClick={handleSubmit}>
                    Submit
                  </div>
                </div>
              </Box>
            </Modal>
          )}

          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
                <h1 className={`${styles.title}`}>Are you sure you want to delete this user?</h1>
                <div className="flex w-full items-center justify-between mb-6 mt-4">
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#57c7a3]`}
                    onClick={() => setOpen(!open)}
                  >
                    Cancel
                  </div>
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#d63f3f]`}
                    onClick={handleDelete}
                  >
                    Delete
                  </div>
                </div>
              </Box>
            </Modal>
          )}
          {openModalAddCourse && (
            <ModalAddCourse
              {...{
                openModalAddCourse,
                setOpenModalAddCourse,
                userInfo,
                courseList,
                setSelectCourse,
                selectCourse,
                handleAddCourse,
              }}
            />
          )}
          {openModalAddEbook && (
            <ModalAddEbook
              {...{
                openModalAddEbook,
                setOpenModalAddEbook,
                userInfo,
                ebookList,
                setSelectEbook,
                selectEbook,
                handleAddEbook,
              }}
            />
          )}
          {openModalAddUser && (
            <ModalAddUser
              {...{
                openModalAddUser,
                setOpenModalAddUser,
                userState,
                setUserState,
                handleSubmit: handleAddUser,
              }}
            />
          )}
        </Box>
      )}
    </div>
  )
}

export default Users
