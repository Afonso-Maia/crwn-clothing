import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

// import { UserContext } from '@contexts/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '@redux/user/user.actions'
import { selectCurrentUser } from '@redux/user/user.selectors'

import HomePage from '@pages/HomePage'
import HatsPage from '@pages/HatsPage'
import ShopPage from '@pages/ShopPage'
import SignInSignUp from '@pages/SignInSignUp'
import CheckoutPage from '@pages/CheckoutPage'
import CollectionPage from '@pages/CollectionPage'

import Header from '@components/Header'

function App() {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        dispatch(setCurrentUser(userAuth))
        return
      }

      const userRef = await createUserProfileDocument(userAuth)
      userRef.onSnapshot(snapShot => {
        dispatch(
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        )
      })
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Route path="/shop/:collectionId" component={CollectionPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
