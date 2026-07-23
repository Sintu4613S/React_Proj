import './App.css'

import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import NavBar from './components/navbar/NavBar'
import DeleteDetails from './features/delete/DeleteDetails'
import Employees from './features/employees/Employees'
import PopupPage from './features/popup/PopupPage'



function App() {
  return (
    // <Layout>
    <div className='w-full min-h-screen flex flex-col'>
      <DeleteDetails />
      <PopupPage />
      <NavBar />
      <div className='flex-1 py-10'>
        <Employees />


      </div>
      <Footer />
    </div>
    // </Layout>

  )
}

export default App
