import './App.css'
import Employees from './components/employees/Employees'
import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import NavBar from './components/navbar/NavBar'
import PopupPage from './features/page/PopupPage'


function App() {
  return (
    // <Layout>
    <div className='w-full min-h-screen flex flex-col'>
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
