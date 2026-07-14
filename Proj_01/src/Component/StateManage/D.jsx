// import { useContext } from "react"
// import { Mycontext } from "./Mycontext"
import { useMyContext } from './Mycontext'
const D = () => {
  //1. const data = useContext(Mycontext)
  //2. const data = useMyContext();
  const { setCount } = useMyContext();
  return (
    <div className="tw:bg-blue-600 tw:p-4">
      <h1>Hello From D  Component</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Count</button>
      {/* <p className="tw:bg-blue-200">My Name is{data}</p> */}
    </div>
  )
}

export default D
