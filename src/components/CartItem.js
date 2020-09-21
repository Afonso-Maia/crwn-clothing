import React from 'react'
import StyledCartItem from '@styled/StyledCartItem'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <StyledCartItem>
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </StyledCartItem>
  )
}

export default CartItem
