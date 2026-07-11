import React from 'react'

const Card2 = ({ popup, setPopup, title, description, handleDel }) => {
  if (popup !== true) return null;


  //console.log(title, description)
  // const [popup, setPopup] = useState(false)
  return (
    <>{
      popup &&
      <div className='Pop text-white Pcenter'>
        <h1 className='my-3' >⚠️{title}</h1>
        <p >{description}</p>
        <button onClick={() => {
          setPopup(false)
        }}
          className='abs'>
          ✖️
        </button>
        <div className='d-flex gap-5 my-3'>
          <button onClick={handleDel} className='btn '>Yes</button>
          <button onClick={() => { setPopup(false) }}
            className='btn' style={{ backgroundColor: 'green' }}>No</button>
        </div>
      </div>
    }
    </>
  )
}

export default Card2
