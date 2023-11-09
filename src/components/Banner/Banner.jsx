import React, { useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/banner.png"

const Banner = () => {
    const [dots,setActiveDots] = useState(0);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
        beforeChange: (next) => {
            setActiveDots( next );
          },
        appendDots: dots => (
            <div
              style={{
                position:'absolute',
                top:'20%',
                left:'160px',
                width:'30px'

              }}
            >
            <div>
                <ul style={{ margin: "0px" }}>
                  {dots.map((item, index) => {
                   return (
                      <li style={{display:'block',paddingTop:'60px'}} key={index}>{item.props.children}</li>
                    );
                  })}
              </ul>
            </div>
            </div>
          ),
          customPaging: i => (
            <div
            style={
                i == dots ?{
                height:'100px',
                width: "30px",
                color: "#262626",
                fontFamily:'DM Sans, sans-serif',
                fontSize:'10px',
                borderRight: "3px #262626 solid",
                paddingTop:'30px',
            }:
            {
                height:'100px',
                width: "30px",
                color: "transparent",
                borderRight: "3px #fff solid",
                paddingTop:'30px',
            }
               }
            >
              0{i + 1}
            </div>
          ),








          responsive: [
            {
              breakpoint: 1199,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                  beforeChange: (next) => {
                      setActiveDots( next );
                    },
                  appendDots: dots => (
                      <div
                        style={{
                          position:'absolute',
                          top:'20%',
                          left:'20px',
                          width:'30px'
          
                        }}
                      >
                      <div>
                          <ul style={{ margin: "0px" }}>
                            {dots.map((item, index) => {
                             return (
                                <li style={{display:'block',
                                // paddingTop:'60px'
                              }} key={index}>{item.props.children}</li>
                              );
                            })}
                        </ul>
                      </div>
                      </div>
                    ),
                    customPaging: i => (
                      <div
                      style={
                          i == dots ?{
                          height:'20px',
                          width: "30px",
                          color: "#262626",
                          fontFamily:'DM Sans, sans-serif',
                          fontSize:'10px',
                          borderRight: "3px #262626 solid",
                          // paddingTop:'30px',
                      }:
                      {
                          height:'20px',
                          width: "30px",
                          color: "transparent",
                          borderRight: "3px #fff solid",
                          // paddingTop:'30px',
                      }
                         }
                      >
                        0{i + 1}
                      </div>
                    ),
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots : false
              }
            },
          ]
      };




      
  return (
    <Slider  {...settings}>
      <div >
        <img src={banner} alt="banner" />
      </div>
      <div >
        <img src={banner} alt="banner" />
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
    </Slider>
  )
}

export default Banner