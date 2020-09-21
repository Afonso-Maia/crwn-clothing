import { createSelector } from '@reduxjs/toolkit'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = createSelector(
  state => state.shop.collections,
  (_, urlParam) => urlParam,
  (collections, urlParam) => collections[urlParam]
)
