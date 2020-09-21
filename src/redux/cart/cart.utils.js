export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToDecrement) => {
  const isLastItem = cartItemToDecrement.quantity === 1

  if (isLastItem) {
    const updatedItems = cartItems.filter(
      cartItem => cartItem.id !== cartItemToDecrement.id
    )
    return [...updatedItems]
  }

  const updatedItems = cartItems.map(cartItem =>
    cartItem.id === cartItemToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )

  return [...updatedItems]
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const updatedCartItems = cartItems.filter(
    cartItem => cartItem.id !== cartItemToRemove.id
  )
  return [...updatedCartItems]
}
