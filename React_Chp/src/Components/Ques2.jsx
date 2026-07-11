import React, { useState } from 'react'
import questions from './ques.json'
import Res2 from './Res2'

const Ques2 = ({ setScore, setIsOver, score }) => {
  const [currIndex, setCurrIndex] = useState(0)
  //const [score, setScore] = useState(0)
  const handleNext = (opt) => {
    //console.log(opt)
    if (opt === questions[currIndex].answer) {
      setScore(prevScore => prevScore + 1)
    }
    //console.log(score)
    if (currIndex < questions.length - 1) {
      setCurrIndex(prevQues => prevQues + 1)
    }
    else {
      setIsOver(true)
    }

  }
  //console.log(questions)
  return (
    <div>
      <div className='container text-center mx-auto my-5 text-white'>
        <h1>{questions[currIndex].id}.{questions[currIndex].question}</h1>
      </div>
      {

        questions[currIndex].options.map((option, index) => {
          return <div key={index} className='d-flex flex-column my-2 w-25 mx-auto'><button onClick={() => { handleNext(option) }} className='btn' >{option}</button></div>
        })
      }
      <div className='d-flex gap-3 justify-content-center align-items-center'>
        <Res2 /><h1 className='text-white fs-1 mt-3 '>{score}</h1>
      </div>
    </div>
  )
}

export default Ques2
