import React from 'react';
import Image from 'next/image';

const Trust = () => {
    const items = [
        {
            img: "/cus1.png"
        },
        {
            img: "/cus2.png"
        },
        {
            img: "/cus3.png"
        },
        {
            img: "/cus55.png"
        },
        {
            img: "/cus6.png"
        }
        ,
        {
            img: "/cus8.png"
        }
        ,
        {
            img: "/cus9.png"
        }
        ,
        {
            img: "/cus11.png"
        }
        ,
        {
            img: "/cus10.png"
        }
    ];
    return (
        <div className='bg-white dark:bg-[#101726] pt-12 p-4'>
            <div className='container mx-auto border-y border-gray-100 py-8 text-center dark:border-gray-800  md:py-12 xl:mt-20'>
                <div className='mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24'>
                    {items.map((item, index) => (
                        <div key={index} className='h-15 w-auto lg:h-17 lg:w-auto'>
                            <Image
                                src={item.img}
                                alt=''
                                width={100}
                                height={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trust;
