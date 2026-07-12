import { NavLink } from 'react-router-dom'
import storelogo from '../assets/store.png'
const Navbar = () => {
  return (
    <>
      <div>
        <nav className='tw:flex tw:gap-4 tw:bg-[#eee] tw:items-center'>
          <img src={storelogo} className='tw:w-12 tw:mr-3' alt=" store_image" />

          {/* <NavLink to="/" className='nav-link' >Home</NavLink>
          <NavLink to="/products" className='nav-link'>Products</NavLink>
          <NavLink to="/about" className='nav-link'>About</NavLink> */}
          <div className=' tw:flex tw:flex-row tw:gap-7'>
            <Menu to={'/'} title={'Home'} />
            <Menu to={'/products'} title={'Products'} />
            <Menu to={'/about'} title={'About'} />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
const Menu = ({ to, title }) => {
  return (
    <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? 'tw:!text-[#ff6347]' : ''}`}>
      {title}
    </NavLink>
  )
}
