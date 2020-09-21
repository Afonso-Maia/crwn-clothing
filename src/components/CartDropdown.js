import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '@redux/cart/cart.selectors'
import { toggleCartHidden } from '@redux/cart/cart.actions'

import Button from '@components/Button'
import StyledCartDropdown from '@styled/StyledCartDropdown'
import CartItem from './CartItem'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const history = useHistory()
  const navigateToCheckout = () => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
  }
  return (
    <StyledCartDropdown>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
    </StyledCartDropdown>
  )
}

export default CartDropdown
