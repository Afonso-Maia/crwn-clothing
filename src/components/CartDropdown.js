import React from 'react'
import { useSelector } from 'react-redux'

import Button from '@components/Button'
import StyledCartDropdown from '@styled/StyledCartDropdown'
import CartItem from './CartItem'

const CartDropdown = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <StyledCartDropdown>
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </StyledCartDropdown>
  )
}

export default CartDropdown
