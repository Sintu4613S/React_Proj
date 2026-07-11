import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Component/Products.jsx'
import Home from './Component/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />

  </>
)
