import { useContext } from 'react'
import './App.css'
// import Navbar from './Component/Navbar'
// import { Outlet } from 'react-router-dom'
import A from './Component/StateManage/A'
import { Mycontext } from './Component/StateManage/Mycontext'

function App() {
  const data = useContext(Mycontext)
  console.log(data)
  return (
    <>
      {/* <Navbar />
      <Outlet /> */}
      <div className='tw:bg-fuchsia-600 tw:p-10 tw:text-center'>
        App
        <A />
      </div>
    </>
  )
}

export default App
