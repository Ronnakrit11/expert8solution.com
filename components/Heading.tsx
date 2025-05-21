import React, { FC } from 'react'

interface HeadProps {
  title: string
  description: string
  keywords: string
  canonical?: string
}

const Heading: FC<HeadProps> = ({ title, description, keywords, canonical }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && (
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_ORIGIN_URI}/${canonical}`} />
      )}
    </>
  )
}

export default Heading
