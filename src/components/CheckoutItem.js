import React from 'react'
import StyledCheckoutItem from '@styled/StyledCheckoutItem'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <StyledCheckoutItem>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </StyledCheckoutItem>
  )
}

export default CheckoutItem
