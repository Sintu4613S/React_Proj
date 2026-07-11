import React, { useState } from 'react'

const Array = () => {
  const [userdata, setUserdata] = useState(
    [{
      id: 1,
      name: "Sintu",
      cls: "B.C.A",
      sub: {
        coding: "JavaScript",
        code: "Java",
        mrk: {
          math: 60,
          hindi: 75,
        },
        codg: "C++",
      }
    }])
  console.log(userdata)
  const handle = (index) => {
    setUserdata(prevStudentdata =>
      prevStudentdata.map((element, i) => i === index ? {
        ...element, name: "Sohan",
        sub: {
          ...element.sub,
          mrk: {
            ...element.sub.mrk,
            hindi: 90
          }
        }
      } : element
      )
    )

  }


  return (
    <>
      {userdata.map((element, index) => {
        return (

          <div key={element.id || index}>
            <h1> Hello{element.name},Your Course is{element.sub.coding} and Your Marks is{element.sub.mrk.hindi}</h1>
            <button onClick={() => handle(index)}> Click Me</button>
          </div>

        )

      })}
    </>

  );
}

export default Array
