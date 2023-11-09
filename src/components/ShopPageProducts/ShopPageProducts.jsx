import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Product from '../Product'
import PageTitle from '../PageTitle'
import { Link } from 'react-router-dom'

const ShopPageProducts = () => {

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => setProduct(data.products))
    },[])
    
  return (
    <div>
        <Container className='pt-[124px] pb-[312px]'>
            <PageTitle title='Products' root='Home' path='Products'/>
            <div className='lg:px-[206px]'>
                <div className='flex flex-wrap gap-x-10'>
                    {
                        product.map(productItem => 
                            <Link to ={`/shop/product_details/${productItem.id}`}>
                                <Product imgsrc={productItem.images[0]} productName={productItem.title} productPrice={productItem.price} category={productItem.category}/>
                            </Link>
                            ) 
                    }
                        
                </div>

            </div>
        </Container>
    </div>
  )
}

export default ShopPageProducts