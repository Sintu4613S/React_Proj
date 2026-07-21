import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from '../post/postSlice'
import { selectAllUsers } from '../users/usersSlice'
import { useSelector } from 'react-redux'

const ContentForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector(selectAllUsers)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id} >
      {user.name}
    </option>
  ))
  // console.log('userid', usersOption)
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
                 text-shadow-white">Title:
                </label>
                <input
                  className='border-2 p-2 rounded-lg'
                  type="text"
                  id='title'
                  value={title}
                  name='title'
                  placeholder="Enter title..."
                  onChange={onTitleChanged}

                />
                <label
                  htmlFor='title'
                  className="label text-2xl
                 text-shadow-white">Author:
                </label>
                <select
                  className='border-2 p-2 rounded-lg'
                  id='auth'
                  value={userId}
                  onChange={onAuthorChanged}
                >
                  <option value=""></option>
                  {usersOption}
                </select>
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
                  onChange={onContentChanged}

                />
                <button
                  className="btn btn-neutral mt-4"
                  onClick={onSavePostClicked}
                  disabled={!canSave}
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
