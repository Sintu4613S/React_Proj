import { useState } from 'react'
import axios from 'axios'


const Postdata = () => {
  const [users, setUsers] = useState([])
  const [userDetails, setUserdetails] = useState({
    name: " ",
    Age: " "
  })
  //*******Getting the Fetch Data>>>******
  const fetchData = async () => {
    const response = await axios({
      url: 'https://6a489aaca033dcb98d64b0ff.mockapi.io/users',
    })
    const data = response.data
    setUsers(data)
  }
  //>***** Posting the Data>>..*******
  const postData = async () => {
    const response = await axios({
      url: 'https://6a489aaca033dcb98d64b0ff.mockapi.io/users',
      method: 'post',
      data: {
        name: "Sintu Kumar",
        Age: 21
      }
    })
    console.log(response.data)
  }
  // ********Handling The File....********
  const handleOnchange = (e) => {
    console.log(e.target.value)

  }
  // const deleteData = async (id) => {
  //   const response = await axios({
  //     url: 'https://6a489aaca033dcb98d64b0ff.mockapi.io/users',
  //     method: 'delete',
  //   })
  //   console.log(response.data)

  // }
  console.log(users)
  return (
    <>
      <button onClick={fetchData} className="btn mx-2">FetchData2</button>
      <br /><br />
      {/* Form for Data take From the User */}
      <label htmlFor="nm">Name:
        <input type="text" id='nm' placeholder='Enter Your Name ' name='name' onChange={handleOnchange} />
      </label><br /><br />
      <label htmlFor="ag">Age:
        <input type="number" id='ag' placeholder='Enter YourAge ' name='age' onChange={handleOnchange} />
      </label>
      <br /><br />
      <button onClick={postData} className="btn mx-2">PostData</button>
      {/* <button onClick={deleteData} className="btn mx-2">DeleteData</button> */}
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
