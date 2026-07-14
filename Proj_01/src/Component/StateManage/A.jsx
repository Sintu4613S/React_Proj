import B from "./B"
// import { useContext } from "react"
// import { Mycontext } from "./Mycontext"
import { useMyContext } from './Mycontext'

const A = () => {
  // const data = useContext(Mycontext)
  // const data = useMyContext();
  // console.log(data)
  return (
    <div className="tw:bg-amber-600 tw:p-10">
      <h1>Hello From A  Component</h1>
      {/* <p className="tw:bg-amber-200">My Name is{data}</p> */}
      <B />
    </div>
  )
}

export default A
