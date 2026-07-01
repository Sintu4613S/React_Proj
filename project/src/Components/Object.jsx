import React, { useState } from 'react'


const Object = () => {
  const [student, setStudent] = useState({
    id: 1,
    name: 'Rahul',
    cls: "BCA",
    sub: { code: "JavaScript", theory: "Operating System" },
    marks: { JavaScript: 68, OperatingSystem: 66 }

  }
  )
  const updatedata = () => {
    setStudent((prevdata) => {
      return (
        {
          ...prevdata,
          name: "Rohit",
          sub: {
            ...prevdata.sub,
            theory: "Linux"
          },
          marks: {
            ...prevdata,
            OperatingSystem: 70
          }

        }
      )
    })
  }
  console.log(student)
  return (
    <div>
      <h2>hello{student.name} and Your Subject is:{student.sub.theory} and Your Marks is: {student.marks.OperatingSystem}</h2>
      <button onClick={updatedata}>Click Me</button>
    </div>
  )
}

export default Object
