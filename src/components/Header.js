import React from 'react'
import { Link } from 'react-router-dom'
import StyledHeader from '@styled/StyledHeader'
import { auth } from '../firebase/firebase.utils'

import { shallowEqual, useSelector } from 'react-redux'

import { ReactComponent as Logo } from '@assets/crown.svg'
import CartIcon from '@components/CartIcon'
import CartDropdown from '@components/CartDropdown'

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser, shallowEqual)
  const isCartHidden = useSelector(state => state.cart.hidden, shallowEqual)
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

        {currentUser ? (
          <div className={`option`} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartHidden ? null : <CartDropdown />}
    </StyledHeader>
  )
}

export default Header
