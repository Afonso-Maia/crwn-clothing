import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

// import { UserContext } from '@contexts/UserContext'

import { useDispatch } from 'react-redux'
import { setCurrentUser } from '@redux/user/userActions'

import HomePage from '@pages/HomePage'
import HatsPage from '@pages/HatsPage'
import ShopPage from '@pages/ShopPage'
import SignInSignUp from '@pages/SignInSignUp'

import Header from '@components/Header'

function App() {
  // const { setUser } = useContext(UserContext)
  const dispatch = useDispatch()

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        // setUser({ currentUser: userAuth })
        dispatch(setCurrentUser(userAuth))
        return
      }

      const userRef = await createUserProfileDocument(userAuth)
      userRef.onSnapshot(snapShot => {
        // setUser({
        //   currentUser: {
        //     id: snapShot.id,
        //     ...snapShot.data(),
        //   },
        // })
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
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
