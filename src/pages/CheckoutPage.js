import React from 'react'
import StyledCheckoutPage from '@styled/StyledCheckoutPage'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '@redux/cart/cart.selectors'

import CheckoutItem from '@components/CheckoutItem'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotal)
  return (
    <StyledCheckoutPage>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
    </StyledCheckoutPage>
  )
}

export default CheckoutPage
