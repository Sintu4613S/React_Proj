import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from '../post/postSlice'


const ContentForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content))
      setTitle('')
      setContent('')
    }
  }
  return (
    <>
      <div className="hero bg-base-200 h-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-md max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label
                  htmlFor='title'
                  className="label text-2xl
                 text-shadow-white">Title
                </label>
                <input
                  className='border-2 p-2 rounded-lg'
                  type="text"
                  id='title'
                  value={title}
                  name='title'
                  placeholder="Enter title..."
                  onChange={onTitleChange}

                />
                <label
                  htmlFor='content'
                  className="label text-2xl text-shadow-white">Content
                </label>
                <textarea
                  id='content'
                  className='border-2 p-5 rounded-lg'
                  type="text"
                  value={content}
                  name='content'
                  placeholder="Enter Content here..."
                  onChange={onContentChange}

                />
                <button
                  className="btn btn-neutral mt-4"
                  onClick={onSavePostClicked}
                >Save Post</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentForm
