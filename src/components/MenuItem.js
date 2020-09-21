import React from 'react'
import { useHistory } from 'react-router-dom'

import StyledMenuItem from '@styled/StyledMenuItem'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory()
  const handleClick = () => history.push(linkUrl)

  return (
    <StyledMenuItem size={size} onClick={handleClick}>
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
