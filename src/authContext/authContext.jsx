import React, { createContext, useState } from 'react'
const AuthContext = createContext({})
const AuthContextProvider = ({children}) => {
    const [isLogin,setLogin] = useState(false)
  return (  
    <AuthContext.Provider value={{isLogin,setLogin}}>
        {children}
    </AuthContext.Provider>
  )
}

export  {AuthContext,AuthContextProvider}
