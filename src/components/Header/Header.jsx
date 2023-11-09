import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Dropdown from '../Dropdown'
import List from '../List'
import Listitems from '../Listitems'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cartEmptyImg from '../../assets/cartEmpty.png'

const Header = () => {
  const data = useSelector(state => state.cartTotal.cartInitial)
  console.log(data);
  const [show,setShow] = useState(false);
  const handleClick = ()=>{
    setShow(!show)
  }
  const [id,setId] = useState(false);
  const idClick = ()=>{
    setId(!id);
  }
  const [cart,setCart] = useState(false);
  const cartClick = ()=>{
    setCart(!cart);
    if(data == ''){
      setEmptyCart(!cart)
    }
    else{
      setEmptyCart()
    }
  }
  const noCart = () =>{
    setCart(!cart)
  }
  const [emptyCart,setEmptyCart] = useState()
  return (
    <>
    <div className='bg-[#F5F5F3]'>
    <Container className='py-8 px-2.5 lg:px-0'>
            <Flex className='justify-between items-center'>
               <div>
                <Dropdown dropDown={handleClick}>
                  <Flex className='items-center gap-x-2.5 hover:cursor-pointer'>
                    <div className="icon">
                       <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626"/>
                       <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626"/>
                       </svg>
                    </div>
                    <p className='hidden lg:block font-DM text-sm text-secondary'>Shop by Category</p>
                  </Flex>
                  {
                    show &&
                      <List className='z-10 w-[263px] absolute bg-secondary pl-[21px] mt-5 hover:cursor-pointer'>
                         <Listitems className=' py-4 text-sm text-[#BDBDBD] font-DM hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out ' itemName='Accesories'/>
                         <Listitems className=' py-4 text-sm text-[#BDBDBD] font-DM hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out ' itemName='Furniture'/>
                         <Listitems className=' py-4 text-sm text-[#BDBDBD] font-DM hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out ' itemName='Electronics'/>
                         <Listitems className=' py-4 text-sm text-[#BDBDBD] font-DM hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out ' itemName='Clothes'/>
                         <Listitems className=' py-4 text-sm text-[#BDBDBD] font-DM hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out ' itemName='Bags'/>
                         <Listitems className=' py-4 text-sm text-[#BDBDBD] font-DM hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out ' itemName='Home appliances'/>
                      </List>
                  }
                </Dropdown>
               </div>
               <div className='relative w-auto lg:w-[601px]'>
                <input type="text" className='w-full py-4 pl-[21px] placeholder:text-[#C4C4C4] placeholder:font-DM placeholder:text-sm' placeholder='Search Products'/>
                <AiOutlineSearch className='absolute top-[20px] right-[20px] hover:cursor-pointer'/>
               </div>
               <div>
                <Flex className='gap-10'>
                  <div className='relative'>
                    <div onClick={idClick}>
                     <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g id="Icon_user">
                         <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M10.5953 3.85284C10.5953 5.98094 8.87057 7.70569 6.74248 7.70569C4.61438 7.70569 2.88963 5.98094 2.88963 3.85284C2.88963 1.72475 4.61438 0 6.74248 0C8.87057 0 10.5953 1.72475 10.5953 3.85284ZM8.93679 8.6689H9.43946C11.6729 8.6689 13.485 10.4809 13.485 12.7144V13.9666C13.485 14.7642 12.8378 15.4114 12.0401 15.4114H1.44482C0.647157 15.4114 0 14.7642 0 13.9666V12.7144C0 10.4809 1.81204 8.6689 4.04549 8.6689H4.54816C5.2194 8.97592 5.95987 9.1505 6.74248 9.1505C7.52508 9.1505 8.26856 8.97592 8.93679 8.6689Z" fill="#262626"/>
                         <path id="Path" d="M24.6056 6H32.3944C32.9333 6 33.2027 6.63741 32.8213 7.01097L28.9283 10.8266C28.6922 11.0578 28.3078 11.0578 28.0717 10.8266L24.1787 7.01097C23.7973 6.63741 24.0667 6 24.6056 6Z" fill="#262626"/>
                       </g>
                     </svg>
                   </div>
                   {
                    id &&
                    <div className='absolute z-10 border-2 border-[#F0F0F0] right-[13px] w-[210px] bg-white '>
                      <Link to = '/login'>
                      <div className='py-4 px-[60px] text-sm font-DM font-bold hover:bg-[#2B2B2B] hover:text-white duration-300 '>My Account</div>
                      </Link>
                      <Link to = '/'>
                      <div className='py-4 px-[75px] text-sm font-DM font-bold hover:bg-[#2B2B2B] hover:text-white duration-300 '>Log Out</div>
                      </Link>
                    </div>
                   }
                  </div>
                <div className='relative' >
                  <FaShoppingCart onClick={cartClick}/>
                  {
                    cart &&
                    <div className='z-10 absolute right-[0px] bg-white w-[360px] border-2 border-[#F0F0F0] '>
                      {
                        data.map((item => ( 
                          <div className='px-5 py-5 bg-[#F5F5F3]'>
                          <Flex className='items-center'>
                            <img src={item.images[1]} alt="watch" className='h-[80px] w-[80px] object-cover' />
                            <div className='ml-5 mr-20'>
                              <h6>{item.title}</h6>
                              <p>${item.price}</p>
                            </div>
                            <div className="cross">
                              <RxCross1 onClick={noCart}/>
                            </div>
                          </Flex>
                        </div>
                        )))
                      }
                      {
                        data.map((item => ( 
                        <div  className='px-5 py-5 '>
                          <div className='mb-3.5'>
                            <h6 className='text-base font-DM text-[#767676]'>Subtotal:<span className='text-base font-DM text-secondary font-bold'> ${item.price}</span></h6>
                          </div>
                          <Flex className='gap-x-5'>
                            <button className='py-4 px-10 text-sm font-DM font-bold text-secondary border-2 border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white duration-300'>View Cart</button>
                            <button className='py-4 px-10 text-sm font-DM font-bold text-secondary border-2 border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white duration-300'>Checkout</button>
                          </Flex>
                        </div>
                        )))
                      }
                    </div>
                   }
                   {
                    emptyCart &&
                     <div className='w-[360px] h-[259px] z-10 absolute right-[0px]  border-2 border-[#F0F0F0]  bg-white text-center '>
                      <img src={cartEmptyImg} alt="" className='mx-auto'/>
                      <Link to='/shop' >
                        <button className='font-DM font-bold text-sm text-white bg-secondary py-4 px-[50px]'>Shop</button>
                      </Link>
                     </div>
                   }
                </div>
                </Flex>
               </div>
            </Flex>
      </Container>
    </div>
    </>
  )
}

export default Header