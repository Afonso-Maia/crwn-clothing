import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../redux/cart/cart.actions'
import { selectCartItemsCount } from '@redux/cart/cart.selectors'

import { ReactComponent as ShopingIcon } from '@assets/shopping-bag.svg'
import StyledCartIcon from '@styled/StyledCartIcon'

const CartIcon = () => {
  const dispatch = useDispatch()
  const itemsQuantity = useSelector(selectCartItemsCount)

  return (
    <StyledCartIcon onClick={() => dispatch(toggleCartHidden())}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{itemsQuantity}</span>
    </StyledCartIcon>
  )
}

export default CartIcon
