import { useState } from "react"

function RadioBTN() {
  const [lang, setLang] = useState('DSA')
  const languages = ['Python', 'JavaScript', 'DSA', 'HTML', 'Java', 'React']
  //console.log(lang)
  return (
    <>
      <h1>Choose Yoyr Language:</h1>
      {languages.map(item => {
        return (
          <label key={item} htmlFor={item}>
            <input type="radio"
              id={item}
              name='language'
              value={item}
              checked={lang === `${item}`}
              onChange={(e) => {
                setLang(e.target.value)
              }}
            />
            {item}
            <br /></label>
        )
      }
      )
      }
    </>
  )
}
const Payme = function () {
  const [pay, setPay] = useState('UPI')
  const Payments = [
    { id: 'UPI', info: "Pay Using the UPI Apps" },
    { id: 'Card', info: "Pay Using the Card Apps" },
    { id: 'COD', info: "Cash On Delivery Available" },
  ]
  console.log(Payments)
  console.log(pay)
  return (
    <>
      {Payments.map(item => {
        // console.log(item)
        return (
          <label key={item.id} htmlFor={item.id}>
            <input type="radio"
              id={item.id}
              name='payments'
              value={item.id}
              checked={pay === item.id}
              onChange={(e) => {
                setPay(e.target.value)
              }}
            />
            {item.id}
            <br />
          </label>
        )
      })}
      <br />
      <h2>Mode Of Payment:{pay}</h2>
      <h2>Details:{Payments.find(obj => obj.id === pay).info}</h2>
    </>
  )



}
const Radiobtn = () => {
  const [gender, setGender] = useState('male')
  console.log(gender)
  return (
    <>
      <label htmlFor="m">
        <input type="radio"
          id="m"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => {
            return (
              setGender(e.target.value)
            )
          }}
        />
        Male</label>
      <br />

      <label htmlFor="fm">
        <input type="radio"
          id="fm"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => {
            return (
              setGender(e.target.value)
            )
          }}
        />
        Female</label>
      <br />
      <label htmlFor="ot">
        <input type="radio"
          id="ot"
          name="gender"
          value="other"
          checked={gender === 'other'}
          onChange={(e) => {
            return (
              setGender(e.target.value)
            )
          }}
        />
        Other</label>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <br />
      <RadioBTN />
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <br />
      <Payme />
    </>
  )
}

export default Radiobtn
