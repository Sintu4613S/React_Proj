import React, { useState } from 'react'

const Typetext = () => {
  const [state, setState] = useState(" ")
  return (
    <div>
      <input type='text' className="txt" value={state}
        onChange={(e) => {
          setState(e.target.value)
        }}
      ></input>
      <p>YourWord:{state}</p>
      <p>Character:{state.replace(/\s/g, "").length}</p>
    </div>
  )
}

export default Typetext
