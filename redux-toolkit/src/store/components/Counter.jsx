import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, increment } from '../feature/counter/counterSlice'
import { useState } from 'react'
const Counter = () => {
  const [value, setValue] = useState(0)
  const dispach = useDispatch()
  const state = useSelector(state => state.counter)
  console.log(state)
  const handleIncre = () => {
    dispach(increment())

  }
  const handleDecre = () => {
    dispach(decrement())

  }
  const handleChange = () => {
    dispach(changeByValue(value))
  }
  return (
    <div>
      <h1>{state.value}</h1>
      <button style={{ margin: "5px" }} onClick={handleIncre}>Increment</button>
      <button style={{ margin: "5px" }} onClick={handleDecre}>Decrement</button>
      <br />
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <button style={{ margin: "5px" }} onClick={handleChange}>Change</button>

    </div>
  )
}

export default Counter
