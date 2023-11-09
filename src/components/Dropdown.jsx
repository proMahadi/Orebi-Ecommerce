import React from 'react'

const Dropdown = ({className,children,dropDown}) => {
  return (
    <div className={className} onClick={dropDown}>{children}</div>
  )
}

export default Dropdown