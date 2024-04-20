import React from 'react'
import PricePower from './PricePower'
import ComparePlan from './ComparePlan'
import FAQPricing from '../components/FAQ/FAQPricing';

const Pricing = () => {

    return (
        <div className='container mx-auto pt-32'>
            <PricePower />
            <ComparePlan />
            <h2 className="my-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Frequently Asqued Questions</h2>
            <FAQPricing />
        </div>
    )
}

export default Pricing