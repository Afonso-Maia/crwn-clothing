import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import HatsPage from '@pages/HatsPage'
import ShopPage from '@pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
