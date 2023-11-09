import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='absolute top-5 left-5  font-DM font-bold text-sm text-white bg-secondary py-2.5 px-8 inline-block'>{title}</span>
  )
}

export default Badge