import React from 'react'

import { useDispatch } from 'react-redux'
import { addItem } from '@redux/cart/cart.actions'

import StyledCollectionItem from '@styled/StyledCollectionItem'
import Button from '@components/Button'

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = item
  return (
    <StyledCollectionItem className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button className="inverted" onClick={() => dispatch(addItem(item))}>
        Add to cart
      </Button>
    </StyledCollectionItem>
  )
}

export default CollectionItem
