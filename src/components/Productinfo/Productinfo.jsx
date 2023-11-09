import React, { useEffect, useState } from 'react'
import Container from '../Container'
import PageTitle from '../PageTitle'
import { useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Slider from "react-slick"
import { useDispatch } from 'react-redux'
import { cartTotal } from '../../slices/cartSlice'





const Productinfo = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const [product,setProduct] = useState([]);
  const [showSize,setShowSize] = useState('S');
  const [quantity,setQuantity] = useState(1);
  const [image,setImage] = useState([])
  const id = params.id
  useEffect(()=>{
      fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data =>{
        setProduct(data);
        setImage(data.images);
      })
  },[])

  const handleSize = () =>{
    setShowSize(!showSize)
  }
  const handleSizeConfig_S = () =>{
    setShowSize(!showSize)
    setShowSize('S')
  }
  const handleSizeConfig_M = () =>{
    setShowSize(!showSize)
    setShowSize('M')
  }
  const handleSizeConfig_L = () =>{
    setShowSize(!showSize)
    setShowSize('L')
  }
  const handleSizeConfig_XL = () =>{
    setShowSize(!showSize)
    setShowSize('XL')
  }
  const handleIncrement = () =>{
    if(quantity<product.stock){
      setQuantity(quantity + 1)
    }
  }
  const handleDecrement = () =>{
    if(quantity>1){
      setQuantity(quantity - 1)
    }
  }
  const handleCart = () =>{
    console.log('ok cool');
    dispatch(cartTotal(product))
  }


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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  

  return (
    <div>
        <Container className='pt-[63px] pb-[425px]'>
            <PageTitle title={product.category} root='Shop' path='Product Details'/>
            <div className='mb-[120px]'>
            
              <Slider {...settings}>
                {
                image.map((item) =>(
                    <img src={item} alt="" className='h-[450px] w-[450px] object-contain '/>
                ))
                }
              </Slider>
            
            </div>
            <div className='mx-auto lg:w-[782px] w-full   '>
              <div>
                <h3 className='font-DM font-bold text-[39px]'>{product.title}</h3>
              </div>
              <div className='flex items-center gap-x-6 mb-6 '>
                <div className='flex text-[#FFD881] text-lg '>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                <div>
                  <p className='text-primary font-DM text-sm'>1 Review</p>
                </div>
              </div>
              <div>
                <p className='text-secondary text-xl font-bold'>${product.price}</p>
              </div>
              <div className='border-b-2 border-[#F0F0F0] mt-6 mb-[33px]'></div>
              <div className='flex gap-x-[53px] items-center mb-[30px]'>
                <p>COLOR:</p>
                <div className='flex gap-x-4'>
                  <div className='w-5 h-5 bg-[#979797] rounded-full hover:scale-[1.5] duration-300'></div>
                  <div className='w-5 h-5 bg-[#FF8686] rounded-full hover:scale-[1.5] duration-300'></div>
                  <div className='w-5 h-5 bg-[#7ED321] rounded-full hover:scale-[1.5] duration-300'></div>
                  <div className='w-5 h-5 bg-[#E6F7D4] rounded-full hover:scale-[1.5] duration-300'></div>
                  <div className='w-5 h-5 bg-[#D1F5EE] rounded-full hover:scale-[1.5] duration-300'></div>
                </div>
              </div>
              <div className='flex gap-x-[76px] mb-[30px]'>
                <p>SIZE:</p>
                <div className='w-[139px] border-2 border-[#F0F0F0]'>
                  <div>
                    <p className='border-b-2 flex items-center justify-around' onClick={handleSize}>
                      <span >{showSize}</span>
                      <AiFillCaretDown/>
                    </p>
                    
                    <div className={`${showSize?'hidden':'static'}`}>
                      <p className=' border-b-2'  onClick={handleSizeConfig_S}><span className='ml-6'>S</span></p>
                      <p className=' border-b-2'  onClick={handleSizeConfig_M}><span className='ml-6'>M</span></p>
                      <p className=' border-b-2' onClick={handleSizeConfig_L}><span className='ml-6' >L</span></p>
                      <p className=' border-b-2'  onClick={handleSizeConfig_XL}><span className='ml-6'>XL</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-[29px]'>
                <p>QUANTITY:</p>
                <div className='w-[139px] border-2 border-[#F0F0F0] flex justify-around'>
                  <button onClick={handleDecrement}>-</button>
                  <p>{quantity}</p>
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
              <div className='border-b-2 border-[#F0F0F0] mt-6 mb-[33px]'></div>
              <div className='flex gap-x-7'>
                <p>STATUS:</p>
                <p>In stock</p>
              </div>
              <div className='border-b-2 border-[#F0F0F0] mt-6 mb-[33px]'></div>
              <div className='flex items-center gap-x-5'>
                <div>
                  <button className='py-4 px-10 border-2 border-secondary'>Add to Wish List</button> 
                </div>
                <div>
                  <button onClick={handleCart} className='py-4 px-12 bg-secondary text-white'>Add to Cart</button>
                </div>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Productinfo