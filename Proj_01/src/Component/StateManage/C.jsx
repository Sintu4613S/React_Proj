import { useMyContext } from "./Mycontext"


const C = () => {
  const { count } = useMyContext();
  return (
    <div className="tw:bg-red-500 tw:p-4">
      <h1>Hello From C  Component</h1>
      <h3>{count}</h3>
    </div>
  )
}

export default C
