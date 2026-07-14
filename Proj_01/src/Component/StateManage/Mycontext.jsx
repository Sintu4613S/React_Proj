/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
//Create th Context
const Mycontext = createContext();

//Provider
const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const value = {
    count, setCount
  }
  return (
    <Mycontext.Provider value={value}>
      {children}
    </Mycontext.Provider>
  )
}

// Use the Context
const useMyContext = () => {
  return useContext(Mycontext)
}

//export { Mycontext, useMyContext }
export { MyContextProvider, useMyContext }

