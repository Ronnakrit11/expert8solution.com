"use client"
import React, { FC, useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { styles } from "@/app/styles/style"
import { useLoginMutation } from "@/redux/features/auth/authApi"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"
import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react"
import { FaEye, FaEyeLowVision } from "react-icons/fa6"

type Props = {
  setRoute: (route: string) => void
  setOpen: (open: boolean) => void
  refetch: any
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
})

const Login: FC<Props> = ({ setRoute, setOpen, refetch }) => {
  const [show, setShow] = useState(false)
  const [login, { isSuccess, error }] = useLoginMutation()
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password })
    },
  })

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully!")
      setOpen(false)
      refetch()
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any
        toast.error(errorData.data.message)
      }
    }
  }, [isSuccess, error])

  const { errors, touched, values, handleChange, handleSubmit } = formik

  return (
    <Card>
      <div className="flex justify-center items-center">
        <p className="text-xl sm:text-2xl lg:text-left lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Login With Expert8Shop
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your Email" />
        </div>
        <TextInput
          type="email"
          name=""
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your Password" />
          </div>
          <TextInput
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
          />
          {!show ? (
            <FaEyeLowVision
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <FaEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <Button type="submit" className="w-full">
            LogIn
          </Button>
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Not have any account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign up
          </span>
        </h5>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Or join with</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col items-center justify-center my-3 space-y-2">
          <button className="flex justify-center items-center py-2 rounded-xl border-2 w-full">
            <FcGoogle
              size={30}
              className="cursor-pointer mr-2"
              onClick={() => signIn("google")}
            />
            <p>Login With Gmail</p>
          </button>
          <button className="flex justify-center items-center py-2 rounded-xl border-2 w-full">
            <AiFillGithub
              size={30}
              className="cursor-pointer mr-2"
              onClick={() => signIn("github")}
            />
            <p>Login With Github</p>
          </button>
        </div>
      </form>
      <br />
    </Card>
  )
}

export default Login
