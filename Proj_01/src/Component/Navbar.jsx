import { Link } from 'react-router-dom'
import storelogo from '../assets/store.png'
const Navbar = () => {
  return (
    <>
      <div>
        <nav className='tw:flex tw:gap-4 tw:bg-[#eee]'>
          <img src={storelogo} className='tw:w-12 tw:mr-3' alt=" store_image" />
          <Link to="/" className='nav-link' >Home</Link>
          <Link to="/products" className='nav-link'>Products</Link>
          <Link to="/about" className='nav-link'>About</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
