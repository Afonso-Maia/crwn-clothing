import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StyledHeader from '@styled/StyledHeader'
import { auth } from '../firebase/firebase.utils'
import { UserContext } from '@contexts/UserContext'

import { ReactComponent as Logo } from '@assets/crown.svg'

const Header = ({ currentUser }) => {
  const { user } = useContext(UserContext)
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
        {user ? (
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
