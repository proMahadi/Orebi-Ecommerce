import React from 'react'
import Container from '../Container'
import PageTitle from '../PageTitle'
import aboutImgOne from '../../assets/aboutImgOne.png'
import aboutImgTwo from '../../assets/aboutImgTwo.png'

const AboutOrebi = () => {
  return (
    <div>
        <Container className='pt-[124px] pb-[131px]'>
            <PageTitle title='About' root='Home' path='About'/>
            <div className='lg:flex gap-x-10'>
                <div className='relative'>
                    <img  src={aboutImgOne} alt="about1" />
                    <span className='absolute bottom-[62px] left-[260px]  font-DM font-bold text-sm text-white bg-secondary py-7 px-24 inline-block'>Our Brands</span>
                </div>
                <div className='relative'>
                    <img src={aboutImgTwo} alt="about2" />
                    <span className='absolute bottom-[62px] left-[260px]  font-DM font-bold text-sm text-white bg-secondary py-7 px-24 inline-block'>Our Brands</span>
                </div>
            </div>
                <div>
                    <h4 className='font-DM text-secondary text-[39px] mt-32'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized <span className='block'>for celebrating the essence of classic Worldwide cool looking style.</span></h4>
                </div>
                <div className='lg:flex gap-x-10 mt-[118px]'>
                    <div>
                        <h5 className='font-DM font-bold text-secondary text-2xl'>Our Vision</h5>
                        <p className='font-DM text-base text-primary mt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div> 
                        <h5 className='font-DM font-bold text-secondary text-2xl'>Our Vision</h5>
                        <p className='font-DM text-base text-primary mt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <h5 className='font-DM font-bold text-secondary text-2xl'>Our Vision</h5>
                        <p className='font-DM text-base text-primary mt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
        </Container>
    </div>
  )
}

export default AboutOrebi