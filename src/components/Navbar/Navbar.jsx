import React, { useState } from 'react'
import Container from '../Container'
import logo from '../../assets/logo.png'
import List from '../List'
import Listitems from '../Listitems'
import {FaBars} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'
import { Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  const [show,setShow]= useState(false);
  const handleClick =()=>{
    setShow(!show)
  }
  return (
  <>
    <Container className='flex py-10 px-2.5 lg:px-0'>
      <div className='w-full lg:w-1/5'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='w-full lg:w-4/5 flex justify-end'>
      <div onClick={handleClick}>
          {
          show == true ? <RxCross1/>:<FaBars className="block lg:hidden"/>
          }
        </div>
      <div>
        <List className={`absolute hover:cursor-pointer lg:static duration-300 lg:flex justify-end gap-x-10 font-DM text-primary text-sm bg-white px-5 py-5 lg:px-0 lg:py-0 shadow rounded lg:shadow-none w-[200px] text-center z-10   ${show ? 'top-[88px] left-0' : 'top-[88px] -left-72'}`}>
          <NavLink to ='/'>
            <Listitems className=' hover:text-secondary hover:font-bold hover:transition hover:duration-300 hover:ease-in-out' itemName='Home'/>
          </NavLink>
          <NavLink to ='/shop'>
            <Listitems className='hover:text-secondary hover:font-bold hover:transition hover:duration-300 hover:ease-in-out' itemName='Shop'/>
          </NavLink>
          <NavLink to ='/about'>
            <Listitems className='hover:text-secondary hover:font-bold hover:transition hover:duration-300 hover:ease-in-out' itemName='About'/>
          </NavLink>
          <NavLink to ='/contacts'>
            <Listitems className='hover:text-secondary hover:font-bold hover:transition hover:duration-300 hover:ease-in-out' itemName='Contacts'/>
          </NavLink>
          <NavLink to ='/journal'>
            <Listitems className='hover:text-secondary hover:font-bold hover:transition hover:duration-300 hover:ease-in-out' itemName='Journal'/>
          </NavLink>
        </List>
      </div>
      </div>
    </Container>
  </>
  )
}

export default Navbar