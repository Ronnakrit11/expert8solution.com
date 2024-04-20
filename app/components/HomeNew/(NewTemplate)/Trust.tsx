import React from 'react'

const Trust = () => {
    const item = [
        {
            img: "E-Lernning"
        },
        {
            img: "App Shop"
        },
        {
            img: "E-commerce"
        },
        {
            img: "Add"
        },
        {
            img: "Graphic"
        }
    ]
    return (
        <div className='container mx-auto mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20'>
            <div className='mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24'>
                {item.map((item, index) => (
                    <p className='text-xl text-sky-600 font-semibold '>{item.img}</p>
                ))}
            </div>
        </div>
    )
}

export default Trust