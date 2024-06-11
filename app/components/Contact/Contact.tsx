import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
type Props = {};
import { Button, Label, TextInput, Textarea } from "flowbite-react";
interface FormW3 {
  email: string,
  name: string,
  subject: string,
  message: string,
  phone: string
}
const Contact = (props: Props) => {
  const [result, setResult] = useState("");

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email!")
      .required("Please enter your email!"),
    name: Yup.string()
      .required("Please enter your name!"),
    message: Yup.string()
      .required("Please enter your message!"),
    phone: Yup.string()
      .required("Please enter your phone!"),
  });
  const formik = useFormik({
    initialValues: { email: "", name: "", subject: "", message: "", phone: "" },
    validationSchema: schema,
    onSubmit: async (prop: FormW3) => {
      if (!result) {
        onSubmitToW3(prop)
      }

    },
  });

  const onSubmitToW3 = async (event: FormW3) => {
    setResult("Sending....");
    let formData: any = new FormData();

    for (var key in event) {
      formData.append(key, event[key]);
    }
    formData.append("access_key", "7f1167f1-42d2-4065-b7f4-37ee69e92c9b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const { errors, touched, values, handleChange, handleSubmit } = formik;


  return (
    <div className="bg-white dark:bg-darkbg  rounded-md shadow-lg">
      <div className="w-full text-black ">
        <div className="w-[90%] 800px:w-[80%] m-auto">
          <div className="pt-12">
            <dl className="space-y-8">
              <div className='grid grid-cols-1  gap-3'>
                {/* <div>
                  <div className=" text-4xl font-bold">Expert 8 Sulution Co.,Ltd.</div>
                  <div> เราเน้นให้บริการเรื่องคุณภาพ ความรวดเร็ว เเละการนำไปใช้เเล้วเกิดความคุ้มค่าเเก่ลูกค้า
                    <a className='underline mx-2 text-primary hover:opacity-50'
                      href="https://www.messenger.com/t/111601928593371/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0" >ติดต่อเลย</a></div>
                  <div className='flex gap-5 my-5'>
                    <div className='bg-primary  p-2 rounded-full h-fit'>
                      <HiPhone size={18} className="fill-white" />
                    </div>
                    <div>
                      <div className='text-md '>Call Us</div>
                      <div className='text-xl'>099-456-9591</div>
                    </div>
                  </div>
                  <div className='flex gap-5 mb-5'>
                    <div className='bg-primary  p-2 rounded-full h-fit'>
                      <HiMail size={18} className="fill-white" />
                    </div>
                    <div>
                      <div className='text-md'>Mail Us</div>
                      <div className='text-xl'>info@expert8-solution.com</div>
                    </div>
                  </div>
                  <div className='flex gap-5 mb-5'>
                    <div className='bg-primary  p-2 rounded-full h-fit'>
                      <HiLocationMarker size={18} className="fill-white" />
                    </div>
                    <div>
                      <div className='text-md'>Our Office</div>
                      <div className='text-xl'>170/51 , Nst, Thailand</div>
                    </div>
                  </div>
                </div> */}
                <div className='grid grid-cols-2 gap-3'>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      id="name"
                      placeholder="your name"
                    />
                    {errors.name && touched.name && (
                      <span className="text-red-500 pt-2 block">{errors.name}</span>
                    )}
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Your Email" />
                    </div>
                    <TextInput
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      placeholder="your email"
                    />
                    {errors.email && touched.email && (
                      <span className="text-red-500 pt-2 block">{errors.email}</span>
                    )}
                  </div>
                  <div className='col-span-2'>
                    <div className="mb-2 block ">
                      <Label htmlFor="phone" value="Phone" />
                    </div>
                    <TextInput
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      id="phone"
                      placeholder="Phone"
                    />
                    {errors.phone && touched.phone && (
                      <span className="text-red-500 pt-2 block">{errors.phone}</span>
                    )}
                  </div>
                  <div className='col-span-2'>
                    <div className="mb-2 block ">
                      <Label htmlFor="message" value="Message" />
                    </div>
                    <Textarea
                      rows={4}
                      name=""
                      value={values.message}
                      onChange={handleChange}
                      id="message"
                      placeholder="your message"
                    />
                    {errors.message && touched.message && (
                      <span className="text-red-500 pt-2 block">{errors.message}</span>
                    )}
                  </div>
                </div>
                <div className='col-span-1 flex justify-end py-2'>
                  <Button onClick={handleSubmit} color="blue">{result ? result : 'Send'}</Button>
                </div>
              </div>

            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
