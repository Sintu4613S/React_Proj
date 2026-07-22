import './App.css'
import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import NavBar from './components/navbar/NavBar'
// import Footer from './components/footer/Footer'
// import Navbar from './components/navbar/Navbar'

function App() {
  return (
    // <Layout>
    <div className='w-full min-h-screen flex flex-col'>
      <NavBar />
      <div className='flex-1'>
        <h1>Hloo.....</h1>

      </div>
      <Footer />
    </div>
    // </Layout>

  )
}

export default App
