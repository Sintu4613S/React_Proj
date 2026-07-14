import C from "./C"
import D from "./D"

const B = () => {
  return (
    <div className="tw:bg-green-500 tw:p-8 ">
      <h1>Hello From B  Component</h1>
      <C />
      <D />
    </div>
  )
}

export default B
