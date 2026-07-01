import React, { useState } from 'react'
import questions from './ques.json'

const Question = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleNext = (selectedItems) => {
    //console.log(selectedItems)
    if (selectedItems === questions[currentIndex].answer) {
      setScore(prev => prev + 1)
    }

    console.log(questions.length)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prevQues => prevQues + 1)
    }
    else {
      setIsOver(true)
    }

  }
  //console.log(questions[currentIndex])
  // console.log(questions[1].question)
  // console.log(questions[3])
  return (
    <div>
      <div className="container text-center mx-auto my-5">
        <h2>{questions[currentIndex].id}.{questions[currentIndex].question}</h2>
      </div>
      <div className='d-flex justify-content-cent78er'>
        <div className=" container d-inline-flex align-items-center flex-column mx-auto gap-3 ">
          {questions[currentIndex].options.map((items) => (
            <button onClick={() => { handleNext(items) }} className='btn fs-4 ' key={items} >{items}</button>
          )
          )}
        </div>

      </div>

    </div>
  )
}

export default Question
