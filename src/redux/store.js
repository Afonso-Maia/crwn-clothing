import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
