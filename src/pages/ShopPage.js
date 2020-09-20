import React from 'react'

import CollectionPreview from '@components/CollectionPreview'

import collections from '@data/shop.data'

const ShopPage = () => {
  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  )
}

export default ShopPage
