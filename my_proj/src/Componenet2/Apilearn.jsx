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
      {userdata !== null ?
        <pre>
          {JSON.stringify(userdata, null, 2)}
        </pre>
        :
        null
      }

      {/* {userdata.map((user) => {
        return (
          
        )
      })} */}

    </>
  )

}

export default Apilearn
