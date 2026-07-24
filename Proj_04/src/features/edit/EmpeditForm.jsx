import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEdittab } from './editSlice';

const EmpeditForm = () => {
  const dispatch = useDispatch();
  const showEditpopup = useSelector((state) => state.edit.
    editPageStatus)
  console.log('Edittab render hua', showEditpopup)
  if (!showEditpopup) return null;
  return (
    <div onClick={() => dispatch(closeEdittab())} className=' fixed top-0 w-full h-full bg-black/80 flex items-center justify-center z-20'>
      <form onClick={(e) => e.stopPropagation()} className=" max-w-sm mx-auto border w-sm p-4 rounded-lg">

        <label htmlFor="url" className="block  text-lg font-medium text-heading">InputUrl</label>
        <input type="text" id="url" className="input text-sm w-full p-3.5" placeholder='Pate URL here...' />


        <label htmlFor="name" className="block mt-1 text-lg font-medium text-heading">Name</label>
        <input type="text" id="name" className="input text-sm w-full p-3.5 " placeholder="Enter Name..." />


        <label htmlFor="email" className="block mt-1 text-lg font-medium text-heading ">Email</label>
        <input type="text" id="email" className="input text-sm w-full p-3.5" placeholder="Enter mail..." required />



        <label htmlFor="message" className="block mt-1 text-lg font-medium text-heading">Message</label>
        <textarea id="message" rows="4" className=" mb-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>

        <div className='flex gap-4 justify-end items-end'>
          <button className='btn'>Cancel</button>
          <button className='btn'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EmpeditForm
