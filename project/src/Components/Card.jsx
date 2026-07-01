import React from 'react'

const Card = ({ popup, setPopup, title, description }) => {
  console.log(title)
  return (
    <>
      {
        popup &&
        (
          <div className='border border-info position-absolute top-0 start-0 w-100 h-100 bg-danger d-flex justify-content-center align-items-center '  >
            <button onClick={() => {
              setPopup(false)
            }} className='btn position-absolute top-0 end-0 m-3'>✖️</button>
            <div className='w-50 h-50 border border-warning d-flex flex-column justify-content-center align-items-center bg-dark ' style={{ borderRadius: '10px' }}>
              <h3 className='text-white'>⚠️{title}</h3>
              <p className='text-white'>{description}</p>
              <div className='d-flex justify-content-center align-items-center gap-4'>
                <button className='btn bg-success'>Yes</button>
                <button className='btn bg-info'>No</button>
              </div>
            </div>
          </div>


        )
      }
    </>
  )
}

export default Card
