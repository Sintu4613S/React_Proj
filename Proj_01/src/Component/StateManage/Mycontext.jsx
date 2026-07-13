/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react"
//Create th Context
const Mycontext = createContext();

//Provider
const MyContextProvider = ({ children }) => {
  return (
    <Mycontext.Provider value={"SintuKumar"}>
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

