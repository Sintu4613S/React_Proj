import './App.css'
// import Navbar from './Component/Navbar'
// import { Outlet } from 'react-router-dom'
import A from './Component/StateManage/A'


function App() {

  return (
    <>
      {/* <Navbar />
      <Outlet /> */}
      <div className='tw:bg-fuchsia-600 tw:p-10 tw:text-center'>
        <h1>App</h1>
        <A />
      </div>
    </>
  )
}

export default App
