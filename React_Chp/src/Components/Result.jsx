import React from 'react'

const Result = ({ Score }) => {
  return (
    <div>
      <div className="container text-center my-4">
        <h2>Result:{(Score).toString().padStart('2', 0)}</h2>

      </div>

    </div>
  )
}

export default Result
