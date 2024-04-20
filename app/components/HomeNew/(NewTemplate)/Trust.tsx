import React from 'react'

const Trust = () => {
    const item = [
        {
            img: "https://ampire.tailus.io/images/clients/airbnb.svg"
        },
        {
            img: "https://ampire.tailus.io/images/clients/coty.svg"
        },
        {
            img: "https://ampire.tailus.io/images/clients/ge.svg"
        },
        {
            img: "https://ampire.tailus.io/images/clients/lilly.png"
        },
        {
            img: "https://ampire.tailus.io/images/clients/microsoft.svg"
        }
    ]
    return (
        <div className='container mx-auto mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20'>
            <p className='text-sm text-center font-semibold tracking-wider text-gray-800 dark:text-white'>TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</p>
            <div className='mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24'>
                {item.map((item, index) => (
                    <img src={item.img} key={index} className='h-8 w-auto lg:h-10 lg:w-auto' />
                ))}
            </div>
        </div>
    )
}

export default Trust