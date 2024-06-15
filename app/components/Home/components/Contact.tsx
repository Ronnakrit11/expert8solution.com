import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'

import React, { useEffect, useState } from 'react'

import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface FormW3 {
  email: string
  name: string
  subject: string
  message: string
  phone: string
}

const Contact = () => {
  const [result, setResult] = useState('')

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Please Enter Your Email!'),
    name: Yup.string().required('Please Enter Your name!'),
    message: Yup.string().required('Please Enter Your Message!'),
    phone: Yup.string().required('Please Enter Your Phone!'),
  })
  const formik = useFormik({
    initialValues: { email: '', name: '', subject: '', message: '', phone: '' },
    validationSchema: schema,
    onSubmit: async (prop: FormW3) => {
      if (!result) {
        onSubmitToW3(prop)
      }
    },
  })

  const onSubmitToW3 = async (event: FormW3) => {
    setResult('Sending....')
    let formData: any = new FormData()

    for (var key in event) {
      formData.append(key, event[key])
    }
    formData.append('access_key', '7f1167f1-42d2-4065-b7f4-37ee69e92c9b')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }
  const { errors, touched, values, handleChange, handleSubmit } = formik

  return (
    <div className="">
      <div className="w-full text-black ">
        <div className="px-5 m-auto">
          <div className="pt-9">
            <dl className="space-y-8">
              <div className="grid grid-cols-1  gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="sm:col-span-1 col-span-2">
                    <div className=" mb-2 block">
                      <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput
                      type="text"
                      name="name"
                      sizing="lg"
                      value={values.name}
                      onChange={handleChange}
                      id="name"
                      placeholder="your name"
                    />
                    {errors.name && touched.name && (
                      <span className="text-red-500 pt-2 block">{errors.name}</span>
                    )}
                  </div>
                  <div className="sm:col-span-1 col-span-2">
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Your Email" />
                    </div>
                    <TextInput
                      type="email"
                      name="email"
                      sizing="lg"
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      placeholder="your email"
                    />
                    {errors.email && touched.email && (
                      <span className="text-red-500 pt-2 block">{errors.email}</span>
                    )}
                  </div>
                  <div className="col-span-2">
                    <div className="mb-2 block ">
                      <Label htmlFor="phone" value="Phone" />
                    </div>
                    <TextInput
                      type="text"
                      name="phone"
                      sizing="lg"
                      value={values.phone}
                      onChange={handleChange}
                      id="phone"
                      placeholder="Phone"
                    />
                    {errors.phone && touched.phone && (
                      <span className="text-red-500 pt-2 block">{errors.phone}</span>
                    )}
                  </div>
                  <div className="col-span-2">
                    <div className="mb-2 block ">
                      <Label htmlFor="message" value="Message" />
                    </div>
                    <Textarea
                      rows={4}
                      name=""
                      value={values.message}
                      onChange={handleChange}
                      id="message"
                      placeholder="Your message"
                    />
                    {errors.message && touched.message && (
                      <span className="text-red-500 pt-2 block">{errors.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-span-1 flex justify-end py-4">
                  <Button
                    onClick={() => {
                      handleSubmit()
                    }}
                    color="blue"
                  >
                    {result ? result : 'Send'}
                  </Button>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
