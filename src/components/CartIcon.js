import React from 'react'

import { useDispatch } from 'react-redux'
import { toggleCartHidden } from '../redux/cart/cart.actions'

import { ReactComponent as ShopingIcon } from '@assets/shopping-bag.svg'
import StyledCartIcon from '@styled/StyledCartIcon'

const CartIcon = () => {
  const dispatch = useDispatch()
  return (
    <StyledCartIcon onClick={() => dispatch(toggleCartHidden())}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </StyledCartIcon>
  )
}

export default CartIcon
