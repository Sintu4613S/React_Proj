import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEmployepopup } from '../popup/popSlice'

const PopupPage = () => {
  const [formDetails, setFormDetails] = useState({
    profileurl: '',
    name: '',
    email: '',
    bio: '',
    highlight: false
  })
  const dispatch = useDispatch()
  const showPopup = useSelector((state) => state.popup?.employepopup)
  console.log("Cmponent log horha h", showPopup)
  const handleInputChanged = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails, [name]: value
    })
  }
  console.log(formDetails)
  if (!showPopup) {
    return
  }

  return (
    <div onClick={() => dispatch(closeEmployepopup())}
      className='fixed top-1 w-full h-full bg-black/80 flex items-center justify-center z-20 '>
      <fieldset onClick={(e) => e.stopPropagation()} className="fieldset  rounded-box max-w-sm w-sm border p-4">
        <legend className="fieldset-legend text-sm">Employee Details</legend>
        <label
          htmlFor="url"
          className="label text-sm"
        >Profile Url</label>
        <input
          className="input text-sm w-full p-3.5"
          type="text"
          id="url"
          name='profileurl'
          value={formDetails.profileurl}
          placeholder="Url.."
          onChange={handleInputChanged}
        />
        <label
          htmlFor="name"
          className="label text-sm"
        >Name</label>
        <input
          type="text"
          id="name"
          name='name'
          value={formDetails.name}
          onChange={handleInputChanged}
          className="input text-sm w-full p-3.5" placeholder="Enter Name..." />

        <label
          htmlFor="email"
          className="label text-sm"
        >Email</label>
        <input
          className='text-sm w-full p-3.5'
          type="email"
          id="email"
          name='email'
          value={formDetails.email}
          onChange={handleInputChanged}
          placeholder="mail@site.com" required />
        <label
          className="label text-sm "
        > Bio</label>
        <textarea
          className="textarea h-24 
              text-sm w-full p-3.5 "
          placeholder="Bio"
          name='bio'
          value={formDetails.bio}
          onChange={handleInputChanged}
        />
        <button

          className="btn btn-neutral mt-4 
            text-sm bg-base-300"
        >Create</button>
      </fieldset>
    </div>
  )
}

export default PopupPage
