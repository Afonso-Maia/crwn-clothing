import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
  const [user, setUser] = useState({ currentUser: null })
  return <UserContext.Provider {...props} value={{ user, setUser }} />
}
