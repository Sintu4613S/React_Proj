
import './App.css'
import Category from './components/Category'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/pages/News'

function App() {
  return (
    <>
      <Navbar />
      <Category className="py-10" />
      <News className="pb-10" />
      <Footer />
    </>
  )
}

export default App
