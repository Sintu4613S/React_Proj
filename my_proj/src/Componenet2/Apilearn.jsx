//import { useEffect } from "react"

import { useState } from "react"

const Apilearn = () => {
  const [userdata, setuserData] = useState([])
  const API = 'https://jsonplaceholder.typicode.com/users'
  const fetchData = async () => {
    const response = await fetch(API)
    let data = await response.json()
    // console.log(response)
    //console.log(data)
    setuserData(data)
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
          <li>
            Users:{user.name}
          </li>
        )
      })}

    </>
  )

}

export default Apilearn
