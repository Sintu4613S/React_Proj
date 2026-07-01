import React, { useEffect, useState } from 'react'

const Timer = ({ setIsOver }) => {
  const [lefttime, setLefttime] = useState(80)
  const [Datedis, setDatedis] = useState('')
  //TimeLogic --> simply Decrease the Time
  useEffect(() => {
    const timer = setInterval(() => {
      setLefttime(prevTime => Math.max(prevTime - 1, 0))
    }, 1000)
    return () => {

      clearInterval(timer)
    }
  }, [])
  //Format The Date --> Display the timer in formatted
  useEffect(() => {
    if (lefttime === 0) {
      setIsOver(true)
    }
    const formatDate = (`${Math.floor(lefttime / 60).toString().padStart('2', 0)} : ${(lefttime % 60).toString().padStart('2', 0)}`)
    setDatedis(formatDate)
    return () => {
      clearInterval(formatDate)
    }
  }, [lefttime, setIsOver])

  return (
    <div>
      <div className="container text-center mt-4">
        <h2>⏱️Time Left:{Datedis}</h2>
      </div>
      {/* <span>{lefttime === 0 && <p>Your Score is :0</p>}</span> */}

    </div>
  )
}

export default Timer
