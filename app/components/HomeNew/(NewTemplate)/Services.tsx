import React from 'react'

const Services = () => {
    return (
        <div className='bg-white dark:bg-darkbg  p-8  border-y-[1px] dark:border-gray-800'>
            <div className='container mx-auto text-black dark:text-white py-20'>
                <div className='text-center my-20'>
                    <p className='text-[50px]'>บริการที่เกี่ยวข้องกับ Kengweb.</p>
                    <p className='text-[18px]'>บริการเหล่านี้โดยบริษัทที่เชี่ยวชาญในการพัฒนาและดูแลเว็บไซต์ หรือผู้ที่มีความเชี่ยวชาญในด้านเทคโนโลยีและการตลาดออนไลน์</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 text-black'>
                    <div className='flex flex-col gap-4'>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B]  h-[500px] rounded-xl flex flex-col'>
                            <div className='flex-grow p-8 space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>ออกแบบและจัดทำเว็บไซต์ Web Design & Web Development</p>
                                <p className='text-[16px] text-gray-500'>บริการที่ให้คำปรึกษาและการออกแบบเว็บไซต์ให้สวยงาม ใช้งานง่าย และมีประสิทธิภาพสูง</p>
                                <div className='flex justify-between '>
                                    <div>
                                        <p className='text-[40px] text-primary dark:text-white'>1,000+</p>
                                        <p className='text-[16px] text-gray-500'>ผลงานเว็บไชต์</p>
                                    </div>
                                    <div>
                                        <p className='text-[40px] text-primary dark:text-white'>1,000+</p>
                                        <p className='text-[16px] text-gray-500'>ผลงานเว็บไชต์</p>
                                    </div>
                                </div>
                            </div>
                            <img src='https://media.licdn.com/dms/image/D4D12AQErV5S_buj95w/article-cover_image-shrink_600_2000/0/1662363673907?e=2147483647&v=beta&t=FLqEHqQ_zKwj_8qH6Thrac6b2KhPN9yLjxHf0bOxw1A' className='w-full overflow-hidden object-cover rounded-xl opacity-70' />
                        </div>
                        <div className='bg-[#eef5fe]  dark:bg-[#15131B] h-[500px] rounded-xl flex flex-col'>
                            <div className='flex-grow p-8 space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>การตลาดออนไลน์ ( SEO , SEM , Content )</p>
                                <p className='text-[16px] text-gray-500'>การให้บริการที่ช่วยในการสร้างและส่งเสริมการตลาดสินค้าหรือบริการของธุรกิจผ่านช่องทางออนไลน์ เพื่อเพิ่มโอกาสในการเชื่อมต่อกับกลุ่มเป้าหมายและเพิ่มยอดขาย ซึ่งรวมถึงการใช้เทคนิคต่างๆ เช่น SEO, SEM, และ Content Marketing</p>
                            </div>
                            <img src='/tap/mac.png' className='w-full overflow-hidden object-cover rounded-xl opacity-70' />
                        </div>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B] p-8 space-y-4 h-[500px] rounded-xl flex flex-col'>
                            <img src='https://media.licdn.com/dms/image/D4D12AQErV5S_buj95w/article-cover_image-shrink_600_2000/0/1662363673907?e=2147483647&v=beta&t=FLqEHqQ_zKwj_8qH6Thrac6b2KhPN9yLjxHf0bOxw1A' className='w-full overflow-hidden object-cover rounded-xl opacity-70' />
                            <div className='flex-grow space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>รับออกแบบ Presentation Powerpoint โปรไฟล์บริษัท</p>
                                <p className='text-[16px] text-gray-500'>ทีมของเรามีความเชี่ยวชาญในการออกแบบ Presentation PowerPoint ที่มีความมืออาชีพและน่าสนใจ เพื่อให้โปรไฟล์ของบริษัทของคุณมีความสามารถในการสื่อสารและประทับใจผู้ชมได้อย่างเหมาะสม</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B] p-8 space-y-4 h-[480px] rounded-xl flex flex-col'>
                            <img src='https://www.kengweb.com/wp-content/uploads/2024/03/Stunning-Interactions.webp' className='w-full overflow-hidden object-cover rounded-xl opacity-70' />
                            <div className='flex-grow space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>ดูแลเว็บไซต์ อัพเดตเว็บไซต์</p>
                                <p className='text-[16px] text-gray-500' >ให้บริการดูแลและรักษาเว็บไซต์ของลูกค้าให้ทันสมัยและมีประสิทธิภาพตามความต้องการ รวมถึงการอัพเดตเนื้อหา ซอฟต์แวร์ และปรับปรุงความปลอดภัยของเว็บไซต์เพื่อให้ผู้เยี่ยมชมมีประสบการณ์ที่ดี</p>
                            </div>
                        </div>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B] p-8 space-y-4 h-[350px] rounded-xl flex flex-col'>
                            <img src='https://www.kengweb.com/wp-content/uploads/2024/03/3-plugins.webp' className='w-2/3 overflow-hidden object-cover rounded-xl opacity-70' />
                            <div className='flex-grow space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>จดโดเมนเนม / ย้ายโดเมนเนม</p>
                                <p className='text-[16px] text-gray-500'>บริการจดโดเมนเนมและย้ายโดเมนเนมช่วยให้คุณสามารถจดซื้อโดเมนใหม่หรือย้ายโดเมนเนมจากผู้ให้บริการเดิมไปยังผู้ให้บริการใหม่ได้อย่างสะดวก ทำให้คุณสามารถควบคุมและบริหารจัดการโดเมนเนมของคุณได้ง่ายดายและมั่นใจได้ในความเชื่อถือได้ของเว็บไซต์</p>
                            </div>
                        </div>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B] space-y-4 h-[670px] rounded-xl flex flex-col justify-between'>
                            <div className='p-8 space-y-8'>
                                <img src='https://www.kengweb.com/wp-content/uploads/2024/04/service5-768x175.webp' className='w-full overflow-hidden object-cover rounded-xl opacity-70' />
                                <div className='flex-grow space-y-4'>
                                    <p className='text-[20px] text-primary dark:text-white font-semibold'>บริการ Hosting WordPress ฟรี Elementor Pro</p>
                                    <p className='text-[16px] text-gray-500'>ช่วยให้คุณได้รับการโฮสต์เว็บไซต์ WordPress พร้อมกับการใช้งาน Elementor Pro ฟรี เพื่อช่วยให้คุณสร้างและดูแลเว็บไซต์ของคุณได้อย่างง่ายดายและมีประสิทธิภาพในการสร้างเนื้อหาและดีไซน์ได้ง่ายยิ่งขึ้น</p>
                                </div>
                            </div>
                            <img src='https://media.licdn.com/dms/image/D4D12AQErV5S_buj95w/article-cover_image-shrink_600_2000/0/1662363673907?e=2147483647&v=beta&t=FLqEHqQ_zKwj_8qH6Thrac6b2KhPN9yLjxHf0bOxw1A' className='w-full overflow-hidden object-cover rounded-xl opacity-70' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B] p-8 space-y-4 h-[320px] rounded-xl flex flex-col'>
                            <img src='https://www.kengweb.com/wp-content/uploads/2024/04/service9.webp' className='w-2/3 overflow-hidden object-cover rounded-xl opacity-70' />
                            <div className='flex-grow space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>โฆษณาหน้าแรก Google ADS</p>
                                <p className='text-[16px] text-gray-500'>โปรโมทธุรกิจหรือสินค้าของคุณให้ปรากฏบนหน้าแรกของผลการค้นหาใน Google ซึ่งเป็นวิธีที่มีประสิทธิภาพในการเพิ่มโอกาสในการเข้าถึงลูกค้าที่เป็นไปได้และเพิ่มยอดขาย โดยใช้เทคนิคการประมวลผลข้อมูลและการวิเคราะห์คำค้นหาเพื่อเลือกคำหลักที่เหมาะสมและการวางแผนโฆษณาที่เชื่อถือได้</p>
                            </div>
                        </div>
                        <div className='bg-[#eef5fe]  dark:bg-[#15131B] h-[480px] rounded-xl flex flex-col'>
                            <div className='flex-grow p-8 space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>บริการ VPS Linux , VPS Windows</p>
                                <p className='text-[16px] text-gray-500'>ให้บริการเซิร์ฟเวอร์เสมือนที่มีความเป็นส่วนตัว ในรูปแบบรายเดือนหรือรายปี คุณสามารถเลือกระบบปฏิบัติการ Linux หรือ Windows ตามความต้องการ มีความยืดหยุ่นและความสมบูรณ์ในการดำเนินการเว็บไซต์หรือแอปพลิเคชันของคุณ</p>
                            </div>
                            <img src='/tap/mac.png' className='w-full overflow-hidden object-cover rounded-xl opacity-70' />
                        </div>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B] p-8 space-y-4 h-[320px] rounded-xl flex flex-col'>
                            <img src='https://www.kengweb.com/wp-content/uploads/2024/03/speed.webp' className='w-1/4 overflow-hidden object-cover rounded-xl opacity-70' />
                            <div className='flex-grow space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>แก้ไขมัลแวร์ WordPress Malware</p>
                                <p className='text-[16px] text-gray-500'>ช่วยให้เว็บไซต์ของคุณปลอดภัยจากการโจมตีและความเสียหายที่อาจเกิดขึ้นจากมัลแวร์ โดยทีมผู้เชี่ยวชาญจะตรวจสอบและลบโค้ดมัลแวร์ออกจากเว็บไซต์ของคุณอย่างรวดเร็วและปลอดภัย</p>
                            </div>
                        </div>
                        <div className='bg-[#eef5fe] dark:bg-[#15131B] p-8 space-y-4 h-[364px] rounded-xl flex flex-col'>
                            <img src='https://www.kengweb.com/wp-content/uploads/2024/04/service6.webp' className='w-2/4 overflow-hidden object-cover rounded-xl opacity-70' />
                            <div className='flex-grow space-y-4'>
                                <p className='text-[20px] text-primary dark:text-white font-semibold'>Email องค์กร</p>
                                <p className='text-[16px] text-gray-500'>บริการ Email องค์กรช่วยให้คุณสร้างและใช้งานบัญชีอีเมลที่เชื่อถือได้ ด้วยโดเมนของคุณเอง</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services