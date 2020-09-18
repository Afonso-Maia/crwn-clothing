import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { UserProvider } from '@contexts/UserContext'

import store from './redux/store'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
  }

  a {
    text-decoration: none;
    color: black;
  }

`

const theme = {
  subColor: 'grey',
  mainColor: 'black',
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
