import React from 'react'

import dynamic from 'next/dynamic'

import FAQPricing from '../../components/FAQ/FAQPricing'
import ComparePlan from './ComparePlan'
import PricePower from './PricePower'

const PricingPlan = dynamic(() => import('@/components/PricingPlan'))

const Pricing = () => {
  return (
    <div className="container mx-auto pt-10">
      <PricingPlan />
      <PricePower />

      <ComparePlan />
      <h2 className="mt-12 mb-4 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
        คำถามที่พบบ่อย
      </h2>
      <FAQPricing />
    </div>
  )
}

export default Pricing
