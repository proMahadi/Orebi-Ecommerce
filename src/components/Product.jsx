import React from 'react'
import Image from './Image'
import Flex from './Flex'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {MdOutlineScreenRotationAlt} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'


const Product = ({imgsrc,NewBadge,productName,productPrice,category}) => {

  return (
    <div className='mb-10'>
      <div className='relative overflow-y-hidden group'>
          <Image imgsrc={imgsrc} className='w-full lg:w-[370px] h-full lg:h-[370px] object-cover'/>
          <div>{NewBadge}</div>
          <div className='absolute group-hover:bottom-0 duration-500 bottom-[-156px]  bg-[#F5F5F5]/75 h-[156px] w-full lg:w-[370px] pt-6 pr-7'>
                          <Flex className=' gap-x-4 items-center gap-x-3.5 justify-end'>
                              <p className='font-DM text-base text-primary'>Add to Wish List</p>
                              <BsFillSuitHeartFill className='text-base text-secondary font-bold'/>
                        </Flex>
                          <Flex className=' gap-x-4 items-center gap-x-3.5 justify-end py-5'>
                              <p className='font-DM text-base text-primary'>Compare</p>
                              <MdOutlineScreenRotationAlt className='text-base text-secondary font-bold'/>
                        </Flex>
                          <Flex className=' gap-x-4 items-center gap-x-3.5 justify-end'>
                              <p className='font-DM text-base text-primary'>Add to Cart</p>
                              <FaShoppingCart className='text-base text-secondary font-bold'/>
                        </Flex>
          </div>
      </div>
      <div className='mt-[24px] w-full lg:w-[370px]'>
        <div className='lg:flex flex-wrap justify-between'>
          <h3 className='font-DM font-bold text-secondary text-xl'>{productName}</h3>
          <p className='font-DM text-primary text-base'>${productPrice}</p>
        </div>
        <p className='font-DM text-primary text-base mt-4'>{category}</p>
      </div>
    </div>
  )
}

export default Product