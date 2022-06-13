import React, { useState } from 'react'
import User from '../screens/User';
import Login from '../screens/Login';
const ContextHooks = () => {
  const [username,setUsername] = useState("");

  return (
    <div>
      <Login setUsername={setUsername} /><User username={username}/>
    </div>
  )
}

export default ContextHooks;