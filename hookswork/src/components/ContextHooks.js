import React, { useState,createContext } from 'react'
import User from '../screens/User';
import Login from '../screens/Login';


export const AppContext = createContext(null)
const ContextHooks = () => {
  const [username,setUsername] = useState("");

  return (
    <AppContext.Provider value={{username,setUsername}}>
      <Login/><User/>
      </AppContext.Provider>
  )
}

export default ContextHooks;