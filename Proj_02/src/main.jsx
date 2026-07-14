
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NewsContextProvider } from './components/pages/context/NewsContex.jsx'

createRoot(document.getElementById('root')).render(
  <NewsContextProvider>
    <App />
  </NewsContextProvider>
)