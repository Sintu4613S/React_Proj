import { useState } from "react"

//Handling the Multiple Checkbox through one state and one handler function. 
function MultiCheck1() {
  const [IsChecked, setIsChecked] = useState({
    node: false,
    react: false,
    MongoDb: false
  })
  //console.log(IsChecked)
  const handleCheckbox = (e) => {
    // console.log(e.target.name)
    let targetName = e.target.name
    setIsChecked(prev => ({ ...prev, [targetName]: e.target.checked }))
  }
  const handleSelectall = (e) => {
    setIsChecked({
      node: e.target.checked,
      react: e.target.checked,
      MongoDb: e.target.checked
    })

  }
  const ISallCheck = Object.values(IsChecked).every(Boolean)
  console.log(ISallCheck)
  return (
    <>
      <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
      <div className="select-none">
        <label htmlFor="sa">
          <input
            type="checkbox"
            id='sa'
            checked={ISallCheck}
            onChange={handleSelectall}
          />
          SelectAll
        </label>
      </div>
      <div className="select-none">
        <label htmlFor="nj">
          <input
            type="checkbox"
            name="node"
            id='nj'
            checked={IsChecked.node}
            onChange={handleCheckbox}
          />
          Node.js
        </label>
      </div>
      <div className="select-none">
        <label htmlFor="rc">
          <input
            type="checkbox"
            id='rc'
            name="react"
            checked={IsChecked.react}
            onChange={handleCheckbox}
          />
          React
        </label>
      </div>
      <div className="select-none">
        <label htmlFor="md">
          <input
            type="checkbox"
            id='md'
            name="MongoDb"
            checked={IsChecked.MongoDb}
            onChange={handleCheckbox}
          />
          MongoDb
        </label>
      </div>
    </>
  )

}
// Handling the Multiple CheckBox throgh Multiple State.
function MultipleCheck() {
  const [html, setHtml] = useState(false)
  const [css, setCss] = useState(false)
  const [js, setJs] = useState(false)
  return (
    <>
      <div className="select-none">
        <label htmlFor="html">
          <input type="checkbox" id="html" checked={html} onChange={(e) => {
            setHtml(e.target.checked)
          }} />
          HTML
        </label>
      </div>
      <div className="select-none">
        <label htmlFor="css">
          <input type="checkbox" id="css" checked={css} onChange={(e) => {
            setCss(e.target.checked)
          }} />
          CSS
        </label>
      </div>
      <div className="select-none">
        <label htmlFor="js">
          <input type="checkbox" id="js" checked={js} onChange={(e) => {
            setJs(e.target.checked)
          }} />
          JavaScript
        </label>
      </div>
      <br />
      <div>
        {html && (<h1>Html Selected</h1>)}
        {css && (<h1>CSS Selected</h1>)}
        {js && (<h1>JavaScrip Selected</h1>)}
      </div>
      <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
    </>
  )
}
//Single CheckBox
const Phonedetails = () => {
  const [pythonChecked, setPythonChecked] = useState(false)
  //console.log(pythonChecked)
  return (
    < >
      <div className="select-none">
        <label htmlFor="py">
          <input type="checkbox" id="py" checked={pythonChecked} onChange={(e) => {
            setPythonChecked(e.target.checked)
          }} />
          Python
        </label>

        <div>
          {pythonChecked && (<h1>Python Selected</h1>)}
        </div>

      </div>
      <MultipleCheck />
      <br />
      <MultiCheck1 />

    </>
  )
}

export default Phonedetails
