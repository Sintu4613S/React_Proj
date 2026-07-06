import { Link } from 'react-router-dom'

const BasicRouter = () => {
  return (
    <>
      <div className="flex gap-10 items-center text-4xl">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>

      </div>

    </>

  )
}

export default BasicRouter
