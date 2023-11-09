import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Product from '../Product'
import best1 from '../../assets/best1.png'
import best2 from '../../assets/best2.png'
import best3 from '../../assets/best3.png'
import best4 from '../../assets/best4.png'
import Badge from '../Badge'
const Bestseller = () => {
  return (
    <div>
        <Container className='pb-[118px]'>
            <Heading title='Our Bestsellers'/>
            <div className='flex-wrap lg:flex gap-x-10'>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={best1} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={best2} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={best3} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
                <div className='w- auto lg:w-[370px]'>
                    <Product NewBadge={<Badge title='New'/>} imgsrc={best4} productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Bestseller