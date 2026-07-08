import { createRoot } from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <BrowserRouter>
     <App />
 </BrowserRouter> */}

    {/* we Use the only App for the using the new Method instead of Router and Routes for Rendering the Navbar.  */}
    <App />

  </>


)
