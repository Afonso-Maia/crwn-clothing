import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
  const [user, setUser] = useState()
  return <UserContext.Provider {...props} value={{ user, setUser }} />
}
