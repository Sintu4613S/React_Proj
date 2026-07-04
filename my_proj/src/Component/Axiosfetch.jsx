import { useState } from 'react'
import axios from 'axios'


const Postdata = () => {
  const [users, setUsers] = useState([])
  const fetchData = async () => {
    const response = await axios({
      url: 'https://6a489aaca033dcb98d64b0ff.mockapi.io/users',
    })
    const data = response.data
    setUsers(data)
  }
  console.log(users)
  return (
    <>
      <button onClick={fetchData} className="btn">FetchData2</button>
      {users.map((userDetails) => {
        return (
          <li key={userDetails.id} className='bg-gray-700 p-6 rounded-lg my-2 '>
            <p>Name:{userDetails.name}</p>
            <p>Age:{userDetails.Age}</p>
          </li>


        )
      })}

    </>
  )

}


const Axiosfetch = () => {
  const config = {
    // url: 'https://jsonplaceholder.typicode.com/photos'
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
      Accept: 'application/json'
    },
    timeout: 1000,
    // params: {
    //   name: 'sintu',
    //   age: 21
    // }
  }
  const fetchData = async () => {
    const response = await axios(config)
    const data = response.data
    console.log(data)
  }
  return (
    <div>
      <button onClick={fetchData} className="btn">FetchData</button>
      <br /><br /> <hr /><br />
      <Postdata />
    </div>

  )
}

export default Axiosfetch
