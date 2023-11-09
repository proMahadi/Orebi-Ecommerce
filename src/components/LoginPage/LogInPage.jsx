import React, { useState } from 'react'
import Container from '../Container'
import PageTitle from '../PageTitle'

const LogInPage = () => {
    const [email,setEmail] = useState('')
    const [emailErr,setEmailErr] = useState('')
    const [password,setPassword] = useState('');
    const [passwordErr,setPasswordErr] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordErr('')
      }
    const handleClick = () =>{
        if(!email){
            setEmailErr('Enter is required')
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailErr('Email is invalid')
        }
        if(!password){
            setPasswordErr('Password is required')
        }
        else if(!/^(?=.*?[A-Z])/.test(password)){
            setPasswordErr('Password must contain at least one upper case')
        }
        else if(!/^(?=.*?[a-z])/.test(password)){
            setPasswordErr('Password must contain at least one lower case')
        }
        else if(!/^(?=.*?[0-9])/.test(password)){
            setPasswordErr('Password must contain at least one digit')
        }
        else if(!/^(?=.*?[#?!@$%^&*-])/.test(password)){
            setPasswordErr('Password must contain at least one special character')
        }
        else if(!/^.{8,}/.test(password)){
            setPasswordErr('Password must contain at least eight characters')
        }
    }

  return (
    <div>
        <Container className='pt-[124px] pb-[448px]'>
        <PageTitle title='Login' root='Home' path='Login'/>
        <div className='border-b-2 border-[#F0F0F0] pb-[62px] mb-[150px]'>
            <p className='w-[664px] text-primary font-DM text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className='lg:flex gap-x-10'>
            <div>
                <label className='font-DM font-bold text-base text-secondary' for='Email'>Email address</label>
                <div>
                    <input onChange={handleEmail} className='border-b-2 border-[#F0F0F0] outline-none pt-[10px] pb-4 pr-[352px]' type="text"  placeholder='company@domain.com'/>
                    {
                        emailErr &&
                        <p className='font-DM text-red-700'>{emailErr}</p>
                    }
                </div>
            </div>
            <div>
                <label className='font-DM font-bold text-base text-secondary' for='Email'>Password</label>
                <div>
                    <input onChange={handlePassword} className='border-b-2 border-[#F0F0F0] outline-none pt-[10px] pb-4 pr-[352px]' type="text" />
                    {
                        passwordErr &&
                        <p className='text-red-700'>{passwordErr}</p>
                    }
                </div>
            </div>
        </div>
        <div className='pt-[29px] pb-[70px] border-b-2 border-[#F0F0F0]'>
            <button onClick={handleClick} className='py-4 px-20 border-2 border-[#2B2B2B] font-DM text-sm font-bold'>Log in</button>
        </div>
        </Container>
    </div>
  )
}

export default LogInPage