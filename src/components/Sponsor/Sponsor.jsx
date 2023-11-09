import React from 'react'
import Container from '../Container'
import ads from '../../assets/adsPart.png'

const Sponsor = () => {
  return (
    <div>
        <Container className='pb-[60px] lg:pb-[118px]'>
            <img src={ads} alt="" />
        </Container>
    </div>
  )
}

export default Sponsor