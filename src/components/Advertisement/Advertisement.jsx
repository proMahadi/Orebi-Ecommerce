import React from 'react'
import Container from '../Container'
import adOne from '../../assets/adOne.png'
import adTwo from '../../assets/adTwo.png'
import adThree from '../../assets/adThree.png'
import Flex from '../Flex'

const Advertisement = () => {
  return (
    <div>
        <Container className='py-7 lg:pt-36 lg:pb-32'>
            <Flex className='gap-x-2 lg:gap-x-10'>
                <div className='w-[780px]'>
                    <img src={adOne} alt="ad-1" />
                </div>
                <div>
                    <div  className='pb-[10px] lg:pb-10'>
                    <img src={adTwo} alt="ad-2" />
                    </div>
                    <div>
                    <img src={adThree} alt="ad-3" />
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Advertisement