import { createContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
const UserContext = createContext()

export function UserProvider({ children, user, setUser }) {
  useEffect(() => {
    if (localStorage.getItem('v_') != null) {
      var token = localStorage.getItem('v_') || null
      var decoded = jwt_decode(token)
      setUser({
        userId: 1,
        role: decoded?.isCustomer ? 'customer' : 'admin',
      })
    }
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
