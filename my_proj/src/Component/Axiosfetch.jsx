import { useState } from 'react'
import axios from 'axios'


const Postdata = () => {
  const [users, setUsers] = useState([])
  const [userDetails, setUserdetails] = useState({
    name: "",
    age: ""
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
    await axios({
      url: 'https://6a489aaca033dcb98d64b0ff.mockapi.io/users',
      method: 'post',
      data: userDetails
    })
    fetchData()
    setUserdetails({
      name: "",
      age: ""
    })

    // console.log(response.data)

  }
  // ********Handling The File....********
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserdetails(prevDetails => ({ ...prevDetails, [name]: value }))
  }
  // console.log(userDetails)

  const saveData = async () => {
    await axios({
      url: `https://6a489aaca033dcb98d64b0ff.mockapi.io/users/${userDetails.id}`,
      method: 'put',
      data: userDetails
    })
    fetchData()
    setUserdetails({
      name: "",
      age: ""
    })
  }
  const delData = async () => {
    await axios({
      url: `https://6a489aaca033dcb98d64b0ff.mockapi.io/users/${userDetails.id}`,
      method: 'delete',
      // data: userDetails
    })
    fetchData()
    // setUserdetails({
    //   name: "",
    //   age: ""
    // })
  }
}
// const deleteData = async (id) => {
//   const response = await axios({
//     url: 'https://6a489aaca033dcb98d64b0ff.mockapi.io/users',
//     method: 'delete',
//   })
//   console.log(response.data)

// }
//console.log(users)
return (
  <>
    <button onClick={fetchData} className="btn mx-2">FetchData2</button>
    <br /><br />
    {/* Form for Data take From the User */}
    <label htmlFor="nm">Name:
      <input type="text" id='nm' placeholder='Enter Your Name' value={userDetails.name} name='name' onChange={handleOnchange} className="text-white " />
    </label><br /><br />
    <label htmlFor="ag">Age:
      <input type="number" id='ag' placeholder='Enter Your Age' value={userDetails.age} name='age' onChange={handleOnchange} className="text-white " />
    </label>
    <br /><br />
    {userDetails.editMode === true ? (
      <button onClick={saveData} className="btn mx-2">SaveData</button>
    ) : (
      <button disabled={!userDetails.name?.trim()} onClick={postData} className="btn mx-2">PostData</button>

    )}
    {/* <button onClick={deleteData} className="btn mx-2">DeleteData</button> */}
    {users.map((userDetails) => {
      return (
        <li key={userDetails.id} className='bg-gray-700 p-6 rounded-lg my-2 text-center '>
          <p>Name:{userDetails.name}</p>
          <p>Age:{userDetails.age}</p>
          <button className='btn' onClick={() => setUserdetails({ ...userDetails, editMode: true })}>Edit</button>
          <button className='btn' onClick={delData}>Delete</button>
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
