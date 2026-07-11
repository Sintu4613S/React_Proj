import React, { useEffect, useState } from 'react'
import Card2 from './Card2'

const ToDo = () => {
  const [popup, setPopup] = useState('false')
  const [inputVal, setInputVal] = useState('')
  const [task, setTask] = useState(() => {
    const savedTask = localStorage.getItem('todo-tasks')
    return savedTask ? JSON.parse(savedTask) : []
  })
  const [deleteIndex, setdelIndex] = useState(null)
  useEffect(() => {
    localStorage.setItem('todo-task', JSON.stringify(task))
  }, [task])

  const onchange = (e) => {
    setInputVal(e.target.value)
  }
  //console.log(inputVal)
  const handleAdditem = () => {
    const newTask = inputVal
    //  console.log('hello')
    setTask(prevtask => [...prevtask, newTask])
    setInputVal('')

  }

  const handleDel = () => {
    setTask(task.filter((_, i) => deleteIndex !== i))
    setPopup(false)

    //  onClick={() => handleDel(i)}
  }

  return (
    <>
      <div className='d-flex align-items-center flex-column'>
        <h1>TO Do App</h1>
        <div className='d-flex jusify-content-center align-items-center gap-2 mt-4'>
          <input type="text" placeholder='Enter texh here' value={inputVal} onChange={onchange} />
          <button disabled={!inputVal.trim()} onClick={handleAdditem} className='btn'>Add item</button>
        </div>
        <ul className='m-4  p-4 list-unstyled' style={{ border: '2px solid tomato' }}>
          {
            task.length === 0 ?
              <div className='fs-2 fw-bolder text-center'>No Items Here</div>
              :
              task.map((element, i) =>
              (
                <li key={i} className=' p-2 ps-3 border border-warning rounded-pill fs-4 my-3 d-flex align-items-center justify-content-between text-white' style={{ width: '30rem' }}>{element}
                  <button onClick=
                    {() => {
                      setdelIndex(i);
                      setPopup(true)
                    }}
                    className='btn rounded-pill'>
                    Delete
                  </button>
                </li>
              ))
          }
        </ul>
        <Card2 popup={popup}
          setPopup={setPopup}
          title={'Delete'}
          description={'Are You Sure want To Delete this ?.'}
          handleDel={handleDel} />
      </div>
    </>
  )
}

export default ToDo
