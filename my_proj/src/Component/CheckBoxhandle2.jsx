import { useState } from "react"

function Checkbox() {
  const [language, setLanguage] = useState([]);
  console.log('CurrentLanguage:', language)
  const handleCheck = function (e) {
    setLanguage((prevlang) => (
      prevlang.includes(e.target.value) ?
        prevlang.filter((item) => item !== e.target.value)
        :
        [...prevlang, e.target.value]

    )
    )
  }
  return (
    <>
      <div className="select-none">
        <label htmlFor="hml">
          <input type="checkbox"
            id="hml"
            value='html'
            checked={language.includes('html')}
            onChange={handleCheck}
          />
          Html</label>
      </div>
      <div className="select-none">
        <label htmlFor="dsa">
          <input type="checkbox"
            id="dsa"
            value='dsa'
            checked={language.includes('dsa')}
            onChange={handleCheck}
          />
          DSA</label>
      </div>
      <div className="select-none">
        <label htmlFor="py">
          <input type="checkbox"
            id="py"
            value='python'
            checked={language.includes('python')}
            onChange={handleCheck}
          />
          Python</label>
      </div>
    </>
  )
}
function FormHandle() {
  const [formData, setFormdata] = useState({
    email: '',
    pp: false
  })
  const onchange = function (e) {
    // console.log('Hello')
    const { name, value, checked, type } = e.target
    const newValue = type === 'checkbox' ? checked : value
    console.log(name)
    setFormdata(prevdata => ({ ...prevdata, [name]: newValue }))
    // console.log(checked)
  }
  //console.log('currentFormData:', formData)
  return (
    <>
      <form action="/">
        <label htmlFor="mail">
          <input className="border border-amber-400 "
            type="email"
            id='mail'
            name="email"
            placeholder="enter mail here"
            value={formData.email}
            onChange={onchange}
          />
        </label>
        <div className="select-none">
          <label htmlFor="cb">
            <input type="checkbox"
              id='cb'
              name="pp"
              checked={formData.tc}
              onChange={onchange}
            />
            User Agreement and Privacy Policy
          </label>
        </div>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  )
}
const CheckBoxhandle2 = () => {
  const [Ischecked, setIschecked] = useState({
    html: false,
    css: false,
    JS: false
  })
  const HandleCheck = (e) => {
    const targetName = e.target.name
    setIschecked({ ...Ischecked, [targetName]: e.target.checked })
  }
  function IsallChecked(e) {
    const checked = e.target.checked
    setIschecked({
      html: checked,
      css: checked,
      JS: checked
    })
  }
  // const v = Object.values(Ischecked).every(Boolean)
  // console.log(v)
  return (
    <>
      <div className="select-none">
        <label htmlFor="sa">
          <input type="checkbox"
            id='sa'
            checked={Object.values(Ischecked).every(Boolean)}
            onChange={IsallChecked}
          />
          SelectAll
        </label>
      </div>


      {Object.keys(Ischecked).map((item, index) => {
        return (
          < div key={index} className="select-none" >
            <label htmlFor={item}>
              <input type="checkbox"
                name={item}
                checked={Ischecked[item]}
                id={item}
                onChange={HandleCheck}
              />
              {item}
            </label>
          </div >
        )
      })}
      <br /><br />
      {Ischecked.html && <h1> HTML selected</h1>}
      {Ischecked.css && <h1> CSS selected</h1>}
      {Ischecked.JS && <h1> JavaScript selected</h1>}
      {/* <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <br /><br />
      <FormHandle /> */}
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <br />
      <Checkbox />
    </>
  )
}

export default CheckBoxhandle2
