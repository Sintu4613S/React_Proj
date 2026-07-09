import { Outlet } from "react-router-dom"
import Navbar2 from "./Navbar2"

const Layout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
      <h1>Layout</h1>


    </>

  )
}

export default Layout
