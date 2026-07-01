import React, { useState } from 'react'
import Button from './Button'

const Square = (props) => {
  return (
    <p className='square'>{props.title}</p>
  )

}

const Count = () => {
  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((prevCount => prevCount + 1))
  }
  const decreCount = () => {
    setCount((prevCount => Math.max(prevCount - 1, 0)))
  }
  const doubleCount = () => {
    setCount((prevCount => prevCount * 2))
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <div >
        <h1 style={{ margin: "40px 0px" }}>Counter App</h1>
      </div>

      <p style={{ margin: "40px 0", fontSize: '18px' }}>Current Count:{count}</p>
      {/* <button onClick={updateCount} className="btn btn-primary mx-2">&#43; Increment</button>
      <button onClick={decreCount} className="btn btn-primary mx-2">&minus; Decrement</button>
      <button onClick={doubleCount} className="btn btn-primary mx-2">DoubleCount</button>
      <button onClick={resetCount} className="btn btn-primary mx-2">&#8635; Reset</button> */}
      <div className="container d-flex justify-content-center">
        <Button text="➕Increment" func={updateCount} />
        <Button text="➖Decrement" func={decreCount} />
        <Button text="DoubleCount" func={doubleCount} />
        <Button text="🔄️Reset" func={resetCount} />
      </div>
      {count > 15 && (
        <h2 style={{ color: 'orange', fontSize: '18px', margin: '10px' }}>
          {count} is Greater Than 15
        </h2>
      )}
      <div className="container d-flex">
        <Square title="This is a Square" />
        <Square title="This is a Rectangle" />
        <Square title="This is a physics" />
        <Square title="This is a perSquare" />
        <Square title="This is a  RecSquare" />
      </div>

    </div>
  )
}

export default Count
