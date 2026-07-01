import React, { useState } from 'react'

const ToDoList = () => {
  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState('')
  const handleAddItem = () => {
    const newTask = inputValue
    setTask(prevData => [...prevData, newTask])
    setInputValue("")
  }
  const onchange = (e) => {
    setInputValue(e.target.value)
  }
  console.log(inputValue)
  const handleDelete = (index) => {
    setTask(task.filter((_, i) => i !== index))
  }
  return (
    <div>
      <div className="container text-center p-4 m-5 rounded  my-3 border border-4">
        <h1 >To-Do App</h1>
        <div className='container mt-3'>
          <input className='p-2 rounded-pill'
            type="text"
            id="userdata"
            value={inputValue}
            onChange={onchange}
            placeholder="Enter the Items" />
          <button disabled={!inputValue.trim()}
            onClick={handleAddItem}
            className='btn btn-primary rounded-pill mx-2'>
            Add Item
          </button>
        </div>
      </div>
      <ul className='container border border-4 p-4 m-5 rounded list-unstyled'>
        {task.length === 0 ? <div className='fs-2 fw-bolder text-center'>No Items Here</div>
          :
          task.map((element, index) => {
            return (
              <li key={index}
                className='border border-2 rounded-pill d-flex justify-content-between align-items-center fs-3 px-3
        '>  {element}
                <button onClick={() => handleDelete(index)} className='btn btn-primary rounded-pill '> 🥤Del</button>
              </li>
            )
          })}

      </ul>
    </div>
  )
}

export default ToDoList
