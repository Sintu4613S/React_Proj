import { useLoaderData } from "react-router-dom"

const About2 = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <>
      <div className="w-96 h-96 bg-yellow-500 mt-6 text-center text-3xl">
        <h1>This is a About Page</h1>
      </div>
    </>
  )
}

export default About2
