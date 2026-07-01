import React from 'react'
// function Img() {
//   return (
//     <div>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wTSQmZNeyfJ1GNYRHZjCpYLN6ul8o5R0kg&s" alt="" />
//     </div>
//   )
// }
const Rct = (props) => {

  return (
    <div>
      <h1 className='my-2'>{props.title}</h1>

      {/* <Img /> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui est similique ipsa adipisci sit quidem iure dolor eligendi pariatur, dolore aperiam, libero expedita cumque blanditiis alias, accusantium minus tenetur nam ullam suscipit! Suscipit.</p>
      {/* <Img /> */}
    </div>

  )
}

export default Rct

// default--> We can import the Rct fun with any name such as(import Meter from './Component/Rct) instead of(import Rct from './Component/Rct)  in the App.jsx .if We don't use the defult keyWord then we need to import with same name such as(import Rct from './Component/Rct).