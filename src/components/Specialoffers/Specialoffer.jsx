import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Product from '../Product'
import sp1 from '../../assets/sp1.png'
import sp2 from '../../assets/sp2.png'
import sp3 from '../../assets/sp3.png'
import sp4 from '../../assets/sp4.png'
import Badge from '../Badge'

const Specialoffer = () => {
  return (
    <div>
        <Container className='pb-[118px]'>
            <Heading title='Special Offers'/>
            <div className='flex-wrap lg:flex gap-x-10'>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={sp1} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={sp2} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={sp3} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={sp4} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Specialoffer