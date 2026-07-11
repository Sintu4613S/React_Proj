import React from 'react'

const HandleEvent = () => {
  const handleEvent = (e) => {
    console.log(e)
    console.log('Click ho rha h')
  }
  const handleChange = () => {
    console.log("Input Change Hor rha h")
  }
  const handleSub = (e) => {
    e.preventDefault();
    console.log('Form submitted Successfully')
  }
  const handleObj = (e) => {
    console.log(e)
    // console.log(e.target.value)

  }
  const handleObj1 = (e, name) => {
    console.log(e)
    console.log(name)
    console.log('Hi! How are You')

  }
  const handleParent = () => {
    console.log("Parent p click hua")
  }
  const handleChild = (e) => {
    e.stopPropagation()//--> stops the event bubbling, when click on the child button automatically bubbles to its parent

    console.log("ChildButton p click hua")
  }
  return (
    <div>
      <div className="container text-center mt-5 mx-auto">
        <button onClick={handleEvent}>Click Me</button>
        <form action="GET">
          <input onChange={handleChange} type="text" placeholder='Enter your text' />
          <button>Click</button>
        </form>
        <form onSubmit={handleSub} action="GET">
          <button>Submit</button>
        </form>

        {/* <input type="text" placeholder='Enter Text Here' onChange={handleObj} /> */}
        <button onClick={handleObj}>Click</button>
        <button onClick={(e) => { handleObj1(e, 'Sintu') }}>clickme</button>

      </div>
      {/* eslint-disable-next-line */}
      <div className=' border border-4 p-4 w-25 ' onClick={handleParent}>
        parent Container
        <button onClick={handleChild}>childButton</button>
      </div>

    </div>
  )
}

export default HandleEvent
