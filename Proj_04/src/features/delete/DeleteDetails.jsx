import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeletepopup } from '../popup/popSlice'

const DeleteDetails = () => {
  const dispatch = useDispatch()
  const showDeletePopup = useSelector((state) => state.popup?.deletepopup)
  console.log("Delete Popup Value hai", showDeletePopup)
  if (!showDeletePopup) {
    return null
  }
  return (
    <div onClick={() => dispatch(closeDeletepopup())} className=' fixed top-0 w-full h-full bg-black/80 flex items-center justify-center z-10'>
      <div onClick={(e) => e.stopPropagation()} className="card bg-base-100  w-96 shadow-sm ">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Delete!</h2>
          <p>Are You Sure Want to delete?</p>
          <div className="card-actions">
            <button className="btn btn-error">Yes</button>
            <button onClick={() => dispatch(closeDeletepopup())} className="btn btn-primary">No</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DeleteDetails
