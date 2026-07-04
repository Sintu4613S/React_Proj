//import { useEffect } from "react"

import { useState } from "react"
import axios from "axios";

const Apilearn = () => {
  const [userdata, setuserData] = useState([])
  const API = 'https://jsonplaceholder.typicode.com/users'
  const fetchData = async () => {
    // const response = await fetch(API)s
    // let data = await response.json()
    // // console.log(response)
    // //console.log(data)
    //setuserData(data)
    const response = await axios.get(API)
    let data = response.data
    setuserData(data)
    //console.log(response.data)
    //console.log(axios.isCancel("something"));
  }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <>
      <button className="btn" onClick={fetchData}>FetchData</button>
      {/* <pre>
        {JSON.stringify(userdata, null, 2)}
      </pre> */}

      {userdata.map((user) => {
        return (
          <li key={user.id}>
            Users:{user.name}
          </li>
        )
      })}

    </>
  )

}

export default Apilearn
