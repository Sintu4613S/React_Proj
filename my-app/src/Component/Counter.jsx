import React, { useState } from 'react'

const Counter = () => {
  const [text, setText] = useState("")
  const handleInput = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <div className="container my-2">

        <input type="text" id="txt" value={text} onChange={handleInput} placeholder='enter your word' />
        <button className="btn btn-primary mx-1">Enter</button>
        <p>Your Word:{text}</p>
        <p>Character:{text.replace(/\s/g, "").length}</p>
      </div>


    </div>

  )

}

export default Counter
