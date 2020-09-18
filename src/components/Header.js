import React from 'react'
import { Link } from 'react-router-dom'
import StyledHeader from '@styled/StyledHeader'
import { auth } from '../firebase/firebase.utils'

import { shallowEqual, useSelector } from 'react-redux'

import { ReactComponent as Logo } from '@assets/crown.svg'

const Header = () => {
  // const { user } = useContext(UserContext)
  const currentUser = useSelector(state => state.user.currentUser, shallowEqual)
  console.log(currentUser)
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
      </div>
    </StyledHeader>
  )
}

export default Header
