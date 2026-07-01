import React from 'react'

const Funcomp = (props) => {
  // Destructuring
  // // const { name, sub, age, goal } = props

  //Direct use the Data without the props
  // const data = {
  //   name: "Rohit",
  //   age: 20,
  //   classs: "BCA",
  //   city: 'Karnal'
  // }
  // const { name, age, classs, city } = data
  // use the data with props
  const { name, age, classs, city } = props.data
  return (
    <div>
      {/* <h1>Hello{name} yourSub:{sub} and Age is {age} ,Your goal is:{goal}</h1> */}
      {/* Use direct data object */}
      {/* <h1>Hello{data.name}, Age is {data.age} ,Your class is:{data.classs}and city{data.city}</h1> */}
      {/* Use Data Objct with props */}
      <h1>Hello{name}, Age is {age} ,Your class is:{classs}and city{city}</h1>


    </div>
  )
}
export default Funcomp