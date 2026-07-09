import { NavLink } from 'react-router-dom'


const Navbar2 = () => {
  return (
    <>
      {/* *** NavLink*** use becuase its give some Extra feature*/}
      <div className="flex gap-10 items-center text-4xl mt-2">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''} >Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : ''} >About</NavLink>
        <NavLink to="/help" className={({ isActive }) => isActive ? 'text-red-500' : ''} >Help Us</NavLink>
      </div>

    </>

  )
}

export default Navbar2
