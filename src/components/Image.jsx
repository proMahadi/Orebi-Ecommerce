import React from 'react'

const Image = ({imgsrc,className}) => {
  return (
    <img src={imgsrc} alt="" className={className} />
  )
}

export default Image