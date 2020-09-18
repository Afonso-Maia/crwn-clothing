import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { UserContext } from '@contexts/UserContext'

import HomePage from '@pages/HomePage'
import HatsPage from '@pages/HatsPage'
import ShopPage from '@pages/ShopPage'
import SignInSignUp from '@pages/SignInSignUp'

import Header from '@components/Header'

function App() {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        setUser({ currentUser: userAuth })
        return
      }

      const userRef = await createUserProfileDocument(userAuth)
      userRef.onSnapshot(snapShot => {
        setUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        })
      })
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [setUser])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
