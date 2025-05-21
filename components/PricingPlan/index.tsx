import React, { useMemo } from 'react'

import PricingPlanItem from './PricingPlanItem'
import { pricingPlanItems } from './constants'

const title = 'Pricing Plan'
const desc = 'ทุก package รองรับจำนวน Traffic ไม่จำกัด'

const PricingPlan = () => {
  const renderPricingPlanItems = useMemo(
    () =>
      pricingPlanItems.map((pricingPlanProps, index) => (
        <PricingPlanItem
          key={`pricing-plan-item:${index}`}
          {...pricingPlanProps}
          isIntensive={index % 2 === 1}
        />
      )),
    [pricingPlanItems],
  )

  return (
    <div className="bg-white dark:bg-[#101726]">
      <div className="container mx-auto">
        <div className="relative py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
          >
            <div className="h-60 bg-gradient-to-br from-purple-600 to-purple-400 blur-[106px] dark:from-blue-700"></div>
            <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
          </div>
          <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl ">
                {title}
              </p>
              <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
                {desc}
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
              {renderPricingPlanItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PricingPlan)
