import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import HatsPage from '@pages/HatsPage'
import ShopPage from '@pages/ShopPage'
import Header from '@components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
