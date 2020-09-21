import React from 'react'
import { useSelector } from 'react-redux'
import CollectionItem from '@components/CollectionItem'

import { selectCollection } from '@redux/shop/shop.selectors'

import StyledCollectionPage from '@styled/StyledCollectionPage'

const CollectionPage = ({ match }) => {
  const { collectionId } = match.params
  const collection = useSelector(state => selectCollection(state, collectionId))
  const { title, items } = collection
  return (
    <StyledCollectionPage className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </StyledCollectionPage>
  )
}

export default CollectionPage
