import React from 'react'
import StyledMenuItem from '../styled-components/StyledMenuItem'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <StyledMenuItem size={size}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </StyledMenuItem>
  )
}

export default MenuItem
