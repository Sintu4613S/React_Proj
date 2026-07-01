import { useState } from "react"

//Refactor for Many /more Options
function ManyMore() {
  const [City, setCity] = useState('')
  console.log(City)
  const cities = ['Karnal', 'Mumbai', 'Goa', 'Punjab', 'Delhi', 'Ambala', 'Vaishali', 'Chandigarh', 'Noida', 'Gurugram', 'Rohtak', 'Jind', 'Kurukshetra', 'Jammu', 'Katra']
  return (<>
    <label htmlFor="city">Select Your City</label><br />
    <select name="city" value={City}
      onChange={(e) => setCity(e.target.value)} id="city" className="bg-black text-2xl text-center relative ">
      <option value=''>---Select City---</option>
      {cities.map(place => {
        //console.log(place)
        return (
          <option className="absolute top-full" key={place} value={place}>{place}</option>
        )
      })}
    </select>
  </>)
}

const SelectDrop = () => {
  const [language, setLanguage] = useState('')
  console.log(language)
  return (
    <div>
      <label htmlFor="lang">Select LanguageFrom the List</label><br />
      <select name="language" value={language} onChange={(e) => setLanguage(e.target.value)} id="lang" className="bg-black text-2xl text-center">
        <option value="">---Select Language---</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
        <option value="react">React</option>
        <option value="mern">MERN</option>
      </select>
      <br /> <br />
      <hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <br /><br />
      <ManyMore />


    </div >
  )
}

export default SelectDrop
