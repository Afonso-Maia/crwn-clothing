import React from 'react'

import Button from '@components/Button'
import StyledCartDropdown from '@styled/StyledCartDropdown'

const CartDropdown = () => {
  return (
    <StyledCartDropdown>
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </StyledCartDropdown>
  )
}

export default CartDropdown
