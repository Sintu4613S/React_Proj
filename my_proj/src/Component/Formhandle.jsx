//import React from 'react'

import { useRef, useState } from "react"

const MultipleInput = () => {
  // Method 1-->
  // const [name, setname] = useState('')
  // const [email, setemail] = useState('')

  // return (
  //   <>
  //<h1>Method@1</h1>
  //<br /> <br />
  //     <input type="text" placeholder="enter text here" value={name} className="border border-gray-400" onChange={(e) => setname(e.target.value)} />
  //     <br /><br />
  //     <br /><br />
  //     <input type="text" value={email} placeholder="enter Email here" onChange={(e) => setemail(e.target.value)} />
  //     <br /><br />
  // <button onClick={() => {
  //   setname(' ')
  //   setmail('')
  // }}>Clear</button>

  //     <h3>{name}</h3>
  //     <br /><br />
  //     <h3>{email}</h3>

  //   </>
  // )
  //***** Method 2****** */
  const [data, setdata] = useState({
    name: '',
    email: '',
    phNo: ''
  })
  // ****Method 2.1-->Handle the input individually*****
  // const nameHandler = (e) => {
  //   //setdata({ ...data, name: e.target.value }) // only one of the state comment
  //   setdata(prevdata => (
  //     {
  //       ...prevdata,
  //       name: e.target.value
  //     }))
  // }
  // const emailHandler = (e) => {
  //   setdata({ ...data, email: e.target.value })
  //   // setdata(prevdata => ( // only one of the state comment
  //   //   {
  //   //     ...prevdata,
  //   //     email: e.target.value
  //   //   }))
  // }
  //*******Method2.2-->Handle the Input data at once ********* */
  const inputHandler = (e) => {
    //console.log(e.target.name, e.target.value)
    const { name, value } = e.target
    setdata({ ...data, [name]: value })

  }
  const handClear = () => {
    // console.log('clear')
    setdata({ name: " ", email: " ", phNo: " " })
  }
  // console.log(data.name)
  return (
    <><h1>Method @2 </h1>
      <br /> <br />
      <input
        type="text"
        name="name"
        value={data.name}
        placeholder="enter text here"
        className="border border-gray-400"
        //onChange={nameHandler}
        onChange={inputHandler}
      />
      <br /><br />
      <input
        type="text"
        name="email"
        value={data.email}
        placeholder="enter Email here"
        className="border border-gray-400"
        // onChange={emailHandler}
        onChange={inputHandler}
      />
      <br /><br />
      <input
        type="text"
        name="phNo"
        value={data.phNo}
        placeholder="enter number here"
        className="border border-gray-400"
        onChange={inputHandler}
      />
      <br /><br />
      <button onClick={handClear} className="btn">Clear</button>
      <br /><br />


      <h2>{data.name}</h2>
      <br />
      <h2>{data.email}</h2>
      <br />
      <h2>{data.phNo}</h2>
    </>
  )

}
// Unctrooled Component
// const Ref = () => {
//   const inputRef = useRef(null)
//   const handle = () => {
//     //console.log('clik hua')
//     console.log(inputRef.current.value)
//   }
//   return (
//     <>
//       <input ref={inputRef} className="border border-gray-400" type="name" placeholder="enter text here" />
//       <br /> <br />
//       <button onClick={handle} className="btn">Submit</button>

//     </>

//   )
// }

// Controlled Component

const Formhandle = () => {
  const [invalue, setInvalue] = useState('')
  //console.log(invalue)
  return (
    <>
      <input
        className="border border-gray-400 text-gray-200"
        type="text"
        id='name'
        value={invalue}
        placeholder="enter text here"
        onChange={(e) => {
          setInvalue(e.target.value)
        }} />
      <br /> <br />
      <button className="  btn" onClick={() => {
        setInvalue('')
      }}>Reset</button>
      <br /> <br />
      <p className=" bg-red-600">{invalue}</p>
      <br /> <br />
      {/* <Ref />
      <br /><br /> */}
      <MultipleInput />
    </>
  )
}

export default Formhandle
