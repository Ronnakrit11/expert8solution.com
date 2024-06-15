import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi"
import React, { useEffect, useState } from "react"
import Loader from "../Loader/Loader"
import Heading from "@/app/utils/Heading"
import Header from "@/components/Layout/Header"
import Footer from "../Footer"
import CourseDetails from "./CourseDetails"
import {
  useCreatePaymentIntentMutation,
  useGetStripePublishablekeyQuery,
} from "@/redux/features/orders/ordersApi"
import { useLoadUserQuery } from "@/redux/features/api/apiSlice"

type Props = {
  id: string
}

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login")
  const [open, setOpen] = useState(false)
  const { data, isLoading } = useGetCourseDetailsQuery(id)
  const { data: config } = useGetStripePublishablekeyQuery({})
  const [createPaymentIntent] = useCreatePaymentIntentMutation()
  const { data: userData } = useLoadUserQuery(undefined, {})

  useEffect(() => {
    if (data && userData?.user) {
      const amount = Math.round(data.course.price * 100)
      createPaymentIntent(amount)
    }
  }, [config, data, userData])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <Heading
        title={data.course.name + " - ELearning"}
        description="ELearning is a programming community which is developed by shahriar sajeeb for helping programmers"
        keywords={data?.course?.tags}
      />
      <Header
        route={route}
        setRoute={setRoute}
        open={open}
        setOpen={setOpen}
        activeItem={1}
      />
      <div className="w-full bg-gradient-4 text-white">
        <CourseDetails
          data={data.course}
          setRoute={setRoute}
          setOpen={setOpen}
        />
      </div>
      <Footer />
    </div>
  )
}

export default CourseDetailsPage
