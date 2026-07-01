import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.func} className="btn mt-4">{props.title}</button>
    </div>
  )
}

export default Button
