import { useState } from "react"

const Checkbox1 = () => {
  const [gender, setGender] = useState('male')
  console.log(gender)
  return (
    <>
      <h1>Choose Your Gender </h1>
      <div className="select-none">
        <label htmlFor="m">
          <input type="radio"
            id='m'
            name="gender"
            value='male'
            checked={gender === 'male'}
            onChange={(e) => {
              setGender(e.target.value)
            }}
          />
          Male
        </label>
      </div>

      <div>
        <label htmlFor="fm">
          <input type="radio"
            id='fm'
            name="gender"
            value='female'
            checked={gender === 'female'}
            onChange={(e) => {
              setGender(e.target.value)
            }}

          />
          Female
        </label>
      </div>
      <div>

        <label htmlFor="ot">
          <input type="radio"
            id='ot'
            name="gender"
            value='other'
            checked={gender === 'other'}
            onChange={(e) => {
              setGender(e.target.value)
            }}
          />
          Other
        </label>
      </div>

    </>
  )
}

export default Checkbox1
