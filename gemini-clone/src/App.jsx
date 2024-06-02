import React from 'react'
import Sidebar from './Component/Sidebar/Sidebar'
import Mainbar from './Component/Mainbar/Mainbar'
import Login_Singup from './Component/Login_registions/LoginReg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (

    <BrowserRouter>
      <Sidebar />
      <Mainbar />
    </BrowserRouter>
  );

}

export default App