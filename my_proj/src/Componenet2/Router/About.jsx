import { Outlet } from "react-router-dom"

const About = () => {
  return (
    <>

      <div className="page">
        <h1>This is a About page</h1>
        <button className="btn">ADD</button>
      </div>
      <Outlet />

    </>
  )
}

export default About
