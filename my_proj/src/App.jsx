import './App.css'
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
//import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'


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
      {/* <Routes>
        <Route>

        </Route>

      </Routes> */}
      <BrowserRouter>
        <BasicRouter />
      </BrowserRouter>


    </>
  )
}


export default App
