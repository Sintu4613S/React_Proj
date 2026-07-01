import React from 'react'

const Button = (props) => {
  const { text, func } = props
  return (
    <div>
      <button onClick={func} className="btn btn-primary mx-1 ">{text}</button>
    </div>
  )
}

export default Button
