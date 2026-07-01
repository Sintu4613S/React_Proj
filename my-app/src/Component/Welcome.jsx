import React, { useState } from 'react'


const Welcome = () => {
  // const [state, setState] = useState("Welcome Visitor")
  const [count, setCount] = useState(0)
  // const handlestate = () => {
  //   setState('Thanku For Visiting')
  // }
  const handleIncre = () => {
    setCount(prevCount => prevCount + 1)
  }
  const handleDecre = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0))
  }
  return (
    <div>
      {/* <h1> {state}</h1>
      <button onClick={handlestate} >Clickme</button> */}
      <h3>Count:{count}</h3>
      <button onClick={handleIncre} className="btn btn-primary mx-2">Increment</button>
      <button onClick={handleDecre} className="btn btn-primary mx-1">Decrement</button>

    </div>

  )
}

export default Welcome