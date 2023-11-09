import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import {PiNumberTwoBold} from 'react-icons/pi'
import {FaTruck} from 'react-icons/fa'
import {PiArrowCounterClockwiseBold} from 'react-icons/pi'

const Info = () => {
  return (
    <div className="border-2 border-[#F0F0F0] -mt-[6px]">
            <Container className='py-5'>
                  <Flex className='justify-between items-center'>
                       <Flex className='gap-x-1 lg:gap-x-4 '>
                            <PiNumberTwoBold className='text-xl text-secondary font-bold'/>
                             <p className='font-DM text-sm lg:text-base text-[#6D6D6D]'>Two years warranty</p>
                       </Flex>
                        <Flex className='gap-x-1 lg:gap-x-4'>
                              <FaTruck className='text-xl text-secondary font-bold'/>
                              <p className='font-DM text-sm lg:text-base text-[#6D6D6D]'>Free shipping</p>
                        </Flex>
                         <Flex className='gap-x-1 lg:gap-x-4'>
                                <PiArrowCounterClockwiseBold className='text-xl text-secondary font-bold'/>
                               <p className='font-DM text-sm lg:text-base text-[#6D6D6D]'>Return policy in 30 days</p>
                         </Flex>
                </Flex>
         </Container>
    </div>
  )
}

export default Info