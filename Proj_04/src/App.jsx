import { useEffect } from 'react'
import './App.css'

import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import NavBar from './components/navbar/NavBar'
import DeleteDetails from './features/delete/DeleteDetails'
import EmpeditForm from './features/edit/EmpeditForm'
import Employees from './features/employees/Employees'
import PopupPage from './features/popup/PopupPage'
import { getEmployees } from './features/employees/employeethunk'
import { useDispatch } from 'react-redux'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployees())

  })
  return (
    // <Layout>
    <div className='w-full min-h-screen flex flex-col'>

      <NavBar />
      <div className='flex-1 py-10'>
        <Employees />
        <PopupPage />
        <DeleteDetails />
        <EmpeditForm />


      </div>
      <Footer />
    </div>
    // </Layout>

  )
}

export default App
