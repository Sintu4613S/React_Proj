import { Link, NavLink } from 'react-router-dom'

const BasicRouter = () => {
  return (
    <>
      {/* <div className="flex gap-10 items-center text-4xl mt-2">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div> */}
      {/* *** NavLink*** use becuase its give some Extra feature*/}
      <div className="flex gap-10 items-center text-4xl mt-2">
        <NavLink end to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''} >Home</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-red-500' : ''} >Blog</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : ''} >About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500' : ''} >Contact Us</NavLink>
      </div>

    </>

  )
}
export default BasicRouter
