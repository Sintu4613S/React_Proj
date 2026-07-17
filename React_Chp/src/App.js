import { useSelector } from 'react-redux';
import './App.css';
//import React, { useState } from 'react';
import Red from './Components/Redux/Red';
//import HandleEvent from './Components/HandleEvent';
//import Array2 from './Components/Array2';
// import ToDoList from './Components/ToDoList';
// import Hook from './Components/Hook';
//import Colorsw from './Components/Colorsw';
//import Timer from './Components/Timer';
//import Question from './Components/Question';
//import Result from './Components/Result';
//import Object from './Components/Object';
//import Popup from "./Components/Popup";
//import ToDo from './Components/ToDo';
// import Timer2 from './Components/Timer2';
// import Res2 from './Components/Res2';
// import Ques2 from './Components/Ques2';
function App() {
  // const [isOver, setIsOver] = useState(false)
  // const [score, setScore] = useState(0)
  const state = useSelector((state) => { return state })
  console.log(state)
  return (
    <>
      <Red />
      {/* <Timer2 setIsOver={setIsOver} />
      {
        !isOver ? (
          <Ques2 setIsOver={setIsOver} setScore={setScore} score={score} />
        ) : (
          <Res2 score={score} />
        )
      } */}
      {/* <ToDo /> */}
      {/* <Popup /> */}
      {/* <HandleEvent /> */}
      {/* <Timer setIsOver={setIsOver} />
      {
        !isOver ? (
          <Question setIsOver={setIsOver} setScore={setScore} />
        )
          :
          (
            <Result Score={score} />
          )

      } */}

      {/* <Colorsw /> */}
      {/* <Hook /> */}
      {/* <ToDoList /> */}
      {/* <Array2 /> */}
      {/* <Object /> */}
    </>

  )
}

export default App;