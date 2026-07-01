import { useRef } from "react"

const UseRef = () => {
  const inputRef = useRef('')
  const clickRef = useRef('')
  const handleinput = () => {
    //console.log(inputRef.current)
    inputRef.current.focus()
  }
  function handleClick() {
    clickRef.current.style.backgroundColor = 'green'
    clickRef.current.style.borderRadius = '50%'

  }
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <br /><br />
      <button className="btn" onClick={handleinput}>Focus</button>
      <br /><br />
      <div ref={clickRef} className="bg-red-500 w-40 h-40"></div>
      <br />
      <button onClick={handleClick} className="btn">Click</button>
    </>
  )
}

export default UseRef
