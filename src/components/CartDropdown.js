import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '@redux/cart/cart.selectors'

import Button from '@components/Button'
import StyledCartDropdown from '@styled/StyledCartDropdown'
import CartItem from './CartItem'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
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
