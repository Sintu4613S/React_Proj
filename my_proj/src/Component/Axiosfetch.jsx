import axios from 'axios'

const Postdata = () => {
  const fetchData = () => {
    const response = axios({
      url: 'https://6a489aaca033dcb98d64b0ff.mockapi.io/users',
    })
    console.log(response)
  }
  return (
    <button onClick={fetchData} className="btn">FetchData2</button>

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
    params: {
      name: 'sintu',
      age: 21
    }
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
