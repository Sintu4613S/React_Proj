import { useRef, useState } from 'react'

const RandomPass = () => {
  const [passLength, setPassLength] = useState(4)
  const [generatePassword, setGeneratePassword] = useState('')
  console.log(generatePassword)
  //console.log(passLength)
  const [passwordHistory, setPasswordHistory] = useState([])
  //console.log(passwordHistory)
  const [checkBox, setCheckbox] = useState(false)
  // console.log(checkBox)
  const clickRef = useRef(null)
  const range = document.createRange()

  function copyPass() {
    (window.getSelection().removeAllRanges())
    //const passwordValue = clickRef.current.getAttribute('ar')
    navigator.clipboard.writeText(generatePassword)
    range.selectNodeContents(clickRef.current)
    //clickRef.current.select()
    window.getSelection().addRange(range)
  }
  function handleInput() {
    const letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let password = ' '
    const numbers = '0123456789'
    let characters = letter

    //console.log('E Character hai', characters)
    if (checkBox === false) {

      for (let i = 0; i < passLength; i++) {
        //const randomIndex = Math.floor(Math.random() * letter.length)
        const randomIndex = Math.floor(Math.random() * characters.length)
        // console.log(letter.length)
        console.log('Random No:', characters[randomIndex])
        password += characters[randomIndex]
      }
      setGeneratePassword(password)
      setPasswordHistory(prev => [...prev, password])
      //console.log('Password is:', password)
      // console.log('Generate Password length:', passLength)
      //console.log('checked h ya nhi:', checkBox)
    }
    else {
      characters = letter + numbers;
      let password = '6'
      //console.log(characters)
      for (let i = 0; i < passLength - 1; i++) {
        //const randomIndex = Math.floor(Math.random() * letter.length)
        const randomIndex = Math.floor(Math.random() * characters.length)
        // console.log(letter.length)
        //console.log('Random No:', characters[randomIndex])
        password += characters[randomIndex]

      }
      const passwordArr = password.split("")
      console.log('PasswordArray Before Swapping:', passwordArr)
      let newarr;
      for (let j = 0; j < passwordArr.length - 1; j++) {
        newarr = passwordArr[j];
        passwordArr[j] = passwordArr[j + 1];
        passwordArr[j + 1] = newarr;
        //console.log(passwordArr[j])
      }
      console.log('After Swapping Array:', passwordArr)
      const swappedStringPass = passwordArr.join("")
      console.log('After Swapping String:', swappedStringPass)
      setPasswordHistory(prev => [...prev, swappedStringPass])
      setGeneratePassword(swappedStringPass)
      //console.log('Password is:', password)
      // console.log('Generate Password length:', passLength)
      // console.log('checked h ya nhi:', checkBox)
    }
  }
  return (
    <div>
      <label htmlFor="psl">
        PassWord Length:
        <input value={passLength} onChange={(e) => { setPassLength(e.target.value) }} type="number" id='psl' min='0' />
      </label>
      <br /><br />
      <button className='btn' onClick={handleInput}>Generate</button>

      <button onClick={copyPass} className="btn mx-3">Copy Password</button>
      <br /><br />
      <label htmlFor="in">
        <input type="checkbox"
          id='in'
          checked={checkBox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
        IncludeNumber
      </label>
      <br />
      <div ar={generatePassword}>Latest Password: <span ref={clickRef}>{generatePassword}</span></div>
      <br />

      {passwordHistory.map(item => {
        return (
          //console.log(item)
          <p key={item}>{item}</p>
        )
      })}

    </div>
  )
}

export default RandomPass
