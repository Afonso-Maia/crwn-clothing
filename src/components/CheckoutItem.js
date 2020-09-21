import React from 'react'
import StyledCheckoutItem from '@styled/StyledCheckoutItem'
import { useDispatch } from 'react-redux'
import {
  removeItemFromCart,
  clearItemFromCart,
  addItemToCart,
} from '@redux/cart/cart.actions'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()

  const handleIncrementItem = () => dispatch(addItemToCart(cartItem))
  const handleDecrementItem = () => dispatch(removeItemFromCart(cartItem))
  const handleRemoveItem = () => dispatch(clearItemFromCart(cartItem))
  return (
    <StyledCheckoutItem>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrementItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrementItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveItem}>
        &#10005;
      </div>
    </StyledCheckoutItem>
  )
}

export default CheckoutItem
