
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react"
const Mycontext = createContext();

// Use the Context
const useMyContext = () => {
  return useContext(Mycontext)
}
export { Mycontext, useMyContext }

