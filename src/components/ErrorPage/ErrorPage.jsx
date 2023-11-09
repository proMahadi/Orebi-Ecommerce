import React from 'react'
import Container from '../Container'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <Container className='pt-20 pb-[140px]'>
        <div>
          <h1 className='text-secondary font-DM font-bold text-[200px]'>404</h1>
          <p className='text-primary font-DM text-base '>The page you were looking for couldn't be found. The page could be removed or you <span className='block'>misspelled the word while searching for it. Maybe try a search?</span></p>
        </div>
        <div className='relative w-auto lg:w-[601px] mt-12 mb-[60px]'>
          <input type="text" className='w-full py-4 pl-[21px] placeholder:text-[#C4C4C4] placeholder:font-DM placeholder:text-sm border-2 border-[ 1px solid #F0F0F0] outline-none' placeholder='Type to search'/>
          <AiOutlineSearch className='absolute top-[20px] right-[20px] hover:cursor-pointer'/>
        </div>
        <div>
          <Link to='/'>
            <button className='font-DM font-bold text-sm text-white bg-secondary py-4 px-[50px]'>Back to Home</button>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default ErrorPage