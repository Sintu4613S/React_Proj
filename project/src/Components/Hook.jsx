import React, { useState, useEffect } from 'react'

const Hook = () => {
  const [count, setCount] = useState(0)
  const [decVal, setDecVal] = useState(0)
  //  // when useEffect does not use dependencies changes in any variable state useEffect render. 
  useEffect(() => {
    console.log("Hlo How are You")
  }, [count, decVal])
  // If depencdicies [] is empty then only one time useffect is used.
  // If dependencies [count] is  not empty then whenever the state changed of count  variable useeffect is render.
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount((prevData) => {
          return (
            prevData + 1
          )
        })

      }}>Incrememnt</button>
      <hr />
      <h1>{decVal}</h1>
      <button onClick={() => {
        setDecVal((prevData) => {
          return (
            prevData - 1
          )
        })

      }}>Decrement</button>
    </div>
  )
}

export default Hook
