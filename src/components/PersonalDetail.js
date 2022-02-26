import React from 'react'

const PersonalDetail = ({title , detail}) => {
  return (
    <dl className='flex'>
    <dt className='text-gray-200 uppercase font-semibold  text-base w-32'>{title} :</dt>
    <dd className='pb-4'>{detail}</dd>
  </dl>
  )
}

export default PersonalDetail