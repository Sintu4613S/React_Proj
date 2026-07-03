
const Apilearn = () => {
  const API = 'https://jsonplaceholder.typicode.com/users'

  let response = fetch(API)
  console.log(response)
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
export default Apilearn
