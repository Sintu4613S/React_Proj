import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEmployepopup } from '../popup/popSlice'

const PopupPage = () => {
  const dispatch = useDispatch()
  const showPopup = useSelector((state) => state.popup?.employepopup)
  console.log("Cmponent log horha h", showPopup)

  if (!showPopup) {
    return
  }

  return (
    <div onClick={() => dispatch(closeEmployepopup())}
      className='fixed top-1 w-full h-full bg-black/80 flex items-center justify-center z-20 '>
      <fieldset onClick={(e) => e.stopPropagation()} className="fieldset  rounded-box max-w-sm w-sm border p-4">
        <legend className="fieldset-legend text-sm">Employee Details</legend>
        <label className="label text-sm" htmlFor="url">Profile Url</label>
        <input type="text" id="url" className="input text-sm w-full p-3.5" placeholder="Url.." />
        <label className="label text-sm" htmlFor="name">Name</label>
        <input type="text" id="name" className="input text-sm w-full p-3.5" placeholder="Enter Name..." />

        <label className="label text-sm" htmlFor="email">Email</label>
        <label className="input validator">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            className='text-sm w-full p-3.5'
            type="email" id="email"
            placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden text-sm">Enter valid email address</div>
        <label className="label text-sm "> Bio</label>
        <textarea className="textarea h-24 text-sm w-full p-3.5 " placeholder="Bio" />
        <button className="btn btn-neutral mt-4 text-sm bg-base-300">Create</button>
      </fieldset>
    </div>
  )
}

export default PopupPage
