import React from 'react'

import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  imgSrc: string
  title: string
  price: string
  promotions: string[]
  isIntensive?: boolean
}

const PricingPlanItem = ({ imgSrc, title, price, promotions, isIntensive }: Props) => {
  return (
    <div
      className={clsx(
        'rounded-3xl border border-gray-100 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none sm:p-12',
        isIntensive ? 'bg-gray-800 dark:bg-[#101726]' : 'bg-white dark:bg-gray-800',
      )}
    >
      <div className="space-y-12 text-center">
        <Image
          src={imgSrc}
          className="mx-auto h-14 w-auto"
          width="512"
          height="512"
          alt="burger illustration"
        />
        <div className="space-y-6">
          <h3
            className={clsx(
              'text-2xl font-semibold transition dark:text-white',
              isIntensive ? 'text-white' : 'text-gray-800',
            )}
          >
            {title}
          </h3>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-blue-600">฿ {price}</p>
            <p
              className={clsx(
                'text-xl text-black dark:text-white',
                isIntensive ? 'text-white' : 'text-gray-800',
              )}
            >
              ปีเเรก
            </p>
          </div>
          <ul
            className={clsx(
              'dark:text-gray-300 flex flex-col justify-start',
              isIntensive ? 'text-white' : 'text-gray-800',
            )}
          >
            {promotions.map((promotion, index) => (
              <li
                key={`promotion-item-name:${promotion}`}
                className={clsx('border-b py-4 dark:border-gray-700', { 'border-t': index === 0 })}
              >
                {promotion}
              </li>
            ))}
          </ul>
          <a
            aria-label="read more"
            href="#"
            className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PricingPlanItem
