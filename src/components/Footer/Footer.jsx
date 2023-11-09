import React from 'react'
import Container from '../Container'
import List from '../List'
import Listitems from '../Listitems'
import Flex from '../Flex'
import footerLogo from '../../assets/footerLogo.png'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='py-14 bg-[#F5F5F3]'>
        <Container>
            <div className='lg:flex relative '>
                <div className=' flex gap-x-14 lg:gap-x-36 mb-16'>
                    <div>
                        <h5 className='text-secondary font-DM text-base font-bold pb-4'>MENU</h5>
                        <List className='text-[#6D6D6D] font-DM text-sm'>
                            <Listitems className='mt-1.5' itemName='Home'/>
                            <Listitems className='mt-1.5' itemName='Shop'/>
                            <Listitems className='mt-1.5' itemName='About'/>
                            <Listitems className='mt-1.5' itemName='Contact'/>
                            <Listitems className='mt-1.5' itemName='Journal'/>
                        </List>
                    </div>
                    <div>
                        <h5 className='text-secondary font-DM text-base font-bold pb-4'>SHOP</h5>
                        <List className='text-[#6D6D6D] font-DM text-sm'>
                            <Listitems className='mt-1.5' itemName='Category 1'/>
                            <Listitems className='mt-1.5' itemName='Category 2'/>
                            <Listitems className='mt-1.5' itemName='Category 3'/>
                            <Listitems className='mt-1.5' itemName='Category 4'/>
                            <Listitems className='mt-1.5' itemName='Category 5'/>
                        </List>
                    </div>
                    <div>
                        <h5 className='text-secondary font-DM text-base font-bold pb-4'>HELP</h5>
                        <List className='text-[#6D6D6D] font-DM text-sm'>
                            <Listitems className='mt-1.5' itemName='Privacy Policy'/>
                            <Listitems className='mt-1.5' itemName='Terms & Conditions'/>
                            <Listitems className='mt-1.5' itemName='Special E-shop'/>
                            <Listitems className='mt-1.5' itemName='Shipping'/>
                            <Listitems className='mt-1.5' itemName='Secure Payments'/>
                        </List>
                    </div>
                </div>
                <div className=' lg:pl-36 lg:pr-[261px] mb-6'>
                    <p className='text-secondary font-DM text-base font-bold pb-2'>(052) 611-5711</p>
                    <p className='text-secondary font-DM text-base font-bold pb-4'>company@domain.com</p>
                    <p className='text-[#6D6D6D] font-DM text-sm'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className='mb-3'>
                    <img src={footerLogo} alt="footerLogo" />
                </div>
            </div>
            <div className=' lg:flex justify-between'>
                <div className='flex gap-x-7 mb-5'>
                    <FaFacebookF className='text-base'/>
                    <FaLinkedinIn className='text-base'/>
                    <BsInstagram className='text-base'/>
                </div>
                <div>
                    <p className='text-[#6D6D6D] font-DM text-sm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer