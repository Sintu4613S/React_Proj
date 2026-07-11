import React, { useState } from 'react'

const Array2 = () => {
  const [fruit, setFruit] = useState([])

  const createdata = () => {

    const newdata = document.getElementById("indata").value;
    if (!newdata.trim()) {
      return;
    }
    document.getElementById("indata").value = " ";
    setFruit((prevdata) => [...prevdata, newdata])
  }
  const deleteData = (index) => {
    setFruit(fruit.filter((_, i) => i !== index))

  }
  //console.log(fruit)
  return (
    <div>
      <h1>List of food</h1>
      <input type="text" id="indata" placeholder='Enter the item' />
      <button className='btn btn-primary mx-2' onClick={createdata}>Add Item</button>
      <ul>
        {fruit.map((f, index) => {
          return (
            <div className='container d-flex  gap-3 my-2' key={index} >
              <li >
                {f}
              </li>
              <button className='btn btn-primary' onClick={() => deleteData(index)}>Delete</button>
            </div>


          );
        })}
      </ul>
    </div>
  )
}

export default Array2
