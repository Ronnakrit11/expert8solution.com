import EbookDetailsPage from '@/app/components/Ebook/EbookDetailsPage'

import React from 'react'

import dynamic from 'next/dynamic'

const page = ({ params }: any) => {
  return (
    <div>
      <EbookDetailsPage id={params.id} />
    </div>
  )
}

export default page
