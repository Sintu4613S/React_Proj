import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Mycontext } from './Component/StateManage/Mycontext.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Products from './Component/Products.jsx'
// import Home from './Component/Home.jsx'
// import About from './Component/About.jsx'
// import SingleProduct from './Component/SingleProduct.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/products',
//         element: <Products />
//       },
//       {
//         path: '/products/:id',
//         element: <SingleProduct />
//       },
//       {
//         path: '/about',
//         element: <About />
//       }
//     ]
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <>
//     <RouterProvider router={router} />

//   </>
// )
createRoot(document.getElementById('root')).render(
  <>
    <Mycontext.Provider value={"SintuKumar"}>
      <App />
    </Mycontext.Provider>
  </>
)
