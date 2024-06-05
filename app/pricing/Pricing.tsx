import React from 'react'
import PricePower from './PricePower'
import ComparePlan from './ComparePlan'
import FAQPricing from '../components/FAQ/FAQPricing';

import GridThreeGadient from '../components/HomeNew/(NewTemplate)/GridThreeGadient';
const Pricing = () => {

    return (
        <div className='container mx-auto pt-32'>
             <GridThreeGadient/>
            <PricePower />
           
            <ComparePlan />
            <h2 className="mt-12 mb-4 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">คำถามที่พบบ่อย</h2>
            <FAQPricing />
        </div>
    )
}

export default Pricing