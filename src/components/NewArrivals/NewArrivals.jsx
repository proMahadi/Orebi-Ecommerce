import React from 'react'
import Slider from "react-slick";
import Container from '../Container'
import Heading from '../Heading'
import Product from '../Product'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import best1 from '../../assets/best1.png'
import best2 from '../../assets/best2.png'
import best3 from '../../assets/best3.png'
import best4 from '../../assets/best4.png'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Badge from '../Badge';




const NewArrivals = () => {


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style,position:'absolute', top:'35%', right:'30px', background: "rgba(0, 0, 0, 0.20)", width:'64px', height:'64px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center' }}
        onClick={onClick}>
               <FaLongArrowAltRight className='text-base text-white'/>
      </div>
    );
  };
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style, position:'absolute', top:'35%', left:'0px', background: "rgba(0, 0, 0, 0.20)", width:'64px', height:'64px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center', zIndex:9999 }}
        onClick={onClick}
      >
        <FaLongArrowAltLeft className='text-base text-white'/>
      </div>
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          margin:10,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ],
  };
  return (
    <div>
        <Container className='pb-[118px]'>
            <Heading title='New Arrivals'/>
            <Slider {...settings}>
              <div className='w-auto lg:w-[370px] '>
                <Product NewBadge={<Badge title='New'/>} imgsrc={p1}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
              <div className='w-auto lg:w-[370px]'>
                <Product NewBadge={<Badge title='New'/>} imgsrc={p2}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
              <div className='w-auto lg:w-[370px]'>
                <Product NewBadge={<Badge title='New'/>} imgsrc={p3}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
              <div className='w-auto lg:w-[370px]'>
                <Product NewBadge={<Badge title='New'/>} imgsrc={p4}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
              <div className='w-auto lg:w-[370px]'>
                <Product NewBadge={<Badge title='New'/>} imgsrc={best1}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
              <div className='w-auto lg:w-[370px]'>
                <Product NewBadge={<Badge title='New'/>} imgsrc={best2}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
              <div className='w-auto lg:w-[370px]'>
                <Product NewBadge={<Badge title='New'/>} imgsrc={best3}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
              <div className='w-auto lg:w-[370px]'>
                <Product NewBadge={<Badge title='New'/>} imgsrc={best4}  productName='Basic Crew Neck Tee' productPrice='44.00' category='Black'></Product>
              </div>
            </Slider>
        </Container>
    </div>
  )
}

export default NewArrivals