import './App.css'
import About from './Componenet2/Router/About'
import Blog from './Componenet2/Router/Blog'
import Contact from './Componenet2/Router/Contact'
import Home from './Componenet2/Router/Home'
import BasicRouter from './Componenet2/Router/NavBar'
//import Apilearn from './Componenet2/Apilearn'
//import Axiosfetch from './Component/Axiosfetch'
//import RandomPass from './Component/RandomPass'
//import Card from "./Component/Card"
//import Formhandle from "./Component/Formhandle"
//import Phonedetails from './Component/Checkbox'
//import CheckBoxhandle2 from './Component/CheckBoxhandle2'
//import Radiobtn from './Component/Radiobtn'
//import Checkbox1 from './Component/Checkbox1'
//import SelectDrop from './Component/SelectDrop'
//import UseRef from './Component/UseRef'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      {/* <Card /> */}
      {/* <Formhandle /> */}
      {/* <Phonedetails /> */}
      {/* <CheckBoxhandle2 /> */}
      {/* <Radiobtn /> */}
      {/* <Checkbox1 /> */}
      {/* <SelectDrop /> */}
      {/* <UseRef /> */}
      {/* <RandomPass /> */}
      {/* <Apilearn /> */}
      {/* <Axiosfetch /> */}
      <BasicRouter />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        {/* Use the Navigate component Re-direct  the page . */}
        <Route path="/contact" element={<Navigate to={'/'} />} />
      </Routes>



    </>
  )
}


export default App
