import React from 'react'

import CollectionItem from '@components/CollectionItem'

import StyledCollectionsPreview from '@styled/StyledCollectionsPreview'

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionsPreview>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </StyledCollectionsPreview>
  )
}

export default CollectionPreview
