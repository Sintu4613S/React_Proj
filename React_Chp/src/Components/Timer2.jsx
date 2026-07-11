import React, { useEffect, useState } from 'react'
import Ques2 from './Ques2'

const Timer2 = ({ setIsOver }) => {
  const [time, setTime] = useState(30)
  const [dateDis, setDis] = useState('')
  useEffect(() => {
    const Timer = setInterval(() => {
      setTime(prevTime => Math.max(prevTime - 1, 0))
    }, 1000)
    return () => clearInterval(Timer)
  }, [])
  useEffect(() => {
    if (time === 0) {
      setIsOver(true)
    }
    const formatDate = (`${Math.floor(time / 60).toString().padStart(2, 0)} : ${(time % 60).toString().padStart(2, 0)}`)
    setDis(formatDate)
    return () => clearInterval(formatDate)
  }, [time, setIsOver])
  // setDis(formatDate)
  // console.log(formatDate)
  //console.log(questions)
  return (
    <>
      <div className='mx-auto border border-warning p-3 rounded-3 text-center text-white w-50'>
        <h1> Time Left:{dateDis}</h1>
      </div>
    </>
  )
}

export default Timer2
