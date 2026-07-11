import React, { useState } from 'react'
import Card from './Card'

const Popup = () => {
  const [popup, setPopup] = useState(false)
  const [Editpopup, setEditpopup] = useState(false)
  return (
    <>
      <div className=' d-flex gap-4 align-items-center'>

        <div >
          <button onClick={() => {
            setPopup(true)
          }} className='btn bg-primary my-4 '>Delete</button>
        </div>
        <Card title={'Delete'} description={'Are You Sure Want to Delete this ?'} popup={popup} setPopup={setPopup} />

        <div>
          <button onClick={() => {
            setEditpopup(true)
          }} className='btn bg-primary '>Edit</button>
        </div>
        <Card title={'Edit'} description={"Are You Sure Want to Edit This ?"} popup={Editpopup} setPopup={setEditpopup} />

      </div>
    </>
  )
}

export default Popup
