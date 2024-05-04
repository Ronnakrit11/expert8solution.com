import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Trust = () => {
    const items = [
        {
            img: "/cus1.png",
            url: 'https://www.facebook.com/'
        },
        {
            img: "/cus2.png",
            url: '/'

        },
        {
            img: "/cus3.png",
            url: ''

        },
        {
            img: "/cus55.png",
            url: ''

        },
        {
            img: "/cus6.png"
        }
        ,
        {
            img: "/cus8.png",
            url: '/'

        }
        ,
        {
            img: "/cus9.png",
            url: ''

        }
        ,
        {
            img: "/cus11.png",
            url: '/'

        }
        ,
        {
            img: "/cus10.png",
            url: '/'

        }
    ];
    return (
        <div className='bg-white dark:bg-darkbg pt-12 p-4 '>
            <div className='container mx-auto border-y border-gray-100 py-8 text-center dark:border-gray-800  md:py-12 xl:mt-15 '>
                <div className='mt-4 flex flex-wrap justify-center gap-6 brightness-75  sm:justify-between lg:gap-24'>
                    {items.map((item, index) => (
                        <div key={index} className='h-15 w-auto lg:h-17 lg:w-auto'>
                            <Link href={item.url || ""} target='__blank'>
                                <Image
                                    src={item.img}
                                    alt=''
                                    width={200}
                                    height={200}
                                    className='w-[100px] h-[100px] grayscale hover:grayscale-0 dark:grayscale-0 duration-200 xl:w-[200px] xl:h-[200px]'
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trust;
