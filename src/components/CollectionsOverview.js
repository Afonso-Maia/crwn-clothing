import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollections } from '@redux/shop/shop.selectors'

import CollectionPreview from '@components/CollectionPreview'
import StyledCollectionOverview from '@styled/StyledCollectionsOverview'

const CollectionsOverview = () => {
  const collectionsObject = useSelector(selectCollections)
  const collectionsArray = Object.values(collectionsObject)
  return (
    <StyledCollectionOverview>
      {collectionsArray.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </StyledCollectionOverview>
  )
}

export default CollectionsOverview
