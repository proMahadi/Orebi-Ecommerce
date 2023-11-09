import React from 'react'
import Heading from './Heading'
import {LiaAngleRightSolid} from 'react-icons/lia'


const PageTitle = ({title,root,path}) => {
  return (
    <div className='mb-36'>
        <Heading title={title}/>
        <p className='text-primary font-DM text-xs'>{root} <LiaAngleRightSolid className='inline-block'/>{path}</p>
    </div>
  )
}

export default PageTitle