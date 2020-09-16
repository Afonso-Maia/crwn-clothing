import React from 'react'
import { Link } from 'react-router-dom'
import StyledHeader from '@styled/StyledHeader'

import { ReactComponent as Logo } from '@assets/crown.svg'

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </StyledHeader>
  )
}

export default Header
