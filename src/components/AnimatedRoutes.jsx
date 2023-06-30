import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Unite from './Unite'
import Trabajo from './Trabajo'
import Nosotros from './Nosotros'
import Inicio from './Inicio'

const AnimatedRoutes = () => {

    const location = useLocation()
  return (
        <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Inicio />}/>
        <Route exact path='Nosotros' element={<Nosotros/>}/>
        <Route exact path='Unite' element={<Unite/>}/>
        <Route exact path='Trabajo' element={<Trabajo/>}/>
        </Routes>
  )
}

export default AnimatedRoutes