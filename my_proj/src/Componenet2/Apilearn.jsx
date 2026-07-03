//import { useEffect } from "react"

const Apilearn = () => {
  const API = 'https://jsonplaceholder.typicode.com/users'
  const fetchData = async () => {
    const response = await fetch(API)
    let data = await response.json()
    // console.log(response)
    console.log(data)
  }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <>
      <button className="btn" onClick={fetchData}>FetchData</button>

    </>
  )

}

export default Apilearn
