import React, { useState } from 'react'
import Container from '../Container'
import PageTitle from '../PageTitle'
import contactMap from '../../assets/contactMap.png'

const ContactPage = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [nameErr,setNameErr] = useState('')
    const [emailErr,setEmailErr] = useState('')


    const handleName = (e) => {
        setName(e.target.value);
        setNameErr('')
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr('')
    }
    const handleClick = () => {
        if(!name){
            setNameErr('Enter Your Name !')
        }
        if(!email){
            setEmailErr('Enter Your Email !')
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailErr(['Email is invalid'])
        }
    }
  return (
    <div>
        <Container className='pt-[124px] pb-[140px]'>
            <PageTitle title='Contacts' root='Home' path='Contacts'/>
            <div className='mb-10'>
                <h3 className='font-DM font-bold text-secondary text-[40px]'>Fill up a Form</h3>
            </div>
            <div>
                <label className='font-DM font-bold text-base text-secondary' for='Name'>Name</label>
                <div>
                    <input onChange={handleName} className='border-b-2 border-[#F0F0F0] outline-none pt-[10px] pb-[17px] pr-[657px]' type="text" placeholder='Your name here' />
                    {
                        nameErr && 
                        <p className='text-red-500'>{nameErr}</p> 
                    }
                </div>
            </div>
            <div className='my-6'>
                <label className='font-DM font-bold text-base text-secondary' for='Email'>Email</label>
                <div>
                    <input onChange={handleEmail} className='border-b-2 border-[#F0F0F0] outline-none pt-[10px] pb-[17px] pr-[657px]' type="text" placeholder='Your email here' />
                    {
                        emailErr && 
                        <p className='text-red-500'>{emailErr}</p> 
                    }
                </div>
            </div>
            <div className='mb-[30px]'>
                <label className='font-DM font-bold text-base text-secondary' for='Name'>Message</label>
                <div>
                    <input className='border-b-2 border-[#F0F0F0] outline-none pt-[10px] pb-[87px] pr-[657px]' type="text" placeholder='Your message here' />
                </div>
            </div>
            <div>
                <button onClick={handleClick} className='font-DM font-bold text-sm text-white bg-secondary py-4 px-[87px]'>Post</button>
            </div>
            <div className='mt-[140px]'>
                <img src={contactMap} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default ContactPage