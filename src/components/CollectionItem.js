import React from 'react'

import StyledCollectionItem from '@styled/StyledCollectionItem'

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <StyledCollectionItem className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </StyledCollectionItem>
  )
}

export default CollectionItem
