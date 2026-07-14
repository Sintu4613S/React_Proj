import B from "./B"
// import { useContext } from "react"
// import { Mycontext } from "./Mycontext"
import { useMyContext } from './Mycontext'

const A = () => {
  //1. const data = useContext(Mycontext)
  //2. const data = useMyContext();
  const { count } = useMyContext();
  // console.log(data)
  return (
    <div className="tw:bg-amber-600 tw:p-10">
      <h1>Hello From A  Component</h1>
      <h4>{count}</h4>
      {/* <p className="tw:bg-amber-200">My Name is{data}</p> */}
      <B />
    </div>
  )
}

export default A
