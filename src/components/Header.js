import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.utils'

import { selectCartHidden } from '@redux/cart/cart.selectors'
import { selectCurrentUser } from '@redux/user/user.selectors'

import { ReactComponent as Logo } from '@assets/crown.svg'
import CartIcon from '@components/CartIcon'
import CartDropdown from '@components/CartDropdown'

import StyledHeader from '@styled/StyledHeader'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartHidden = useSelector(selectCartHidden)

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
