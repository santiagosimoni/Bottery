import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Unite from './Unite'
import Trabajo from './Trabajo'
import Nosotros from './Nosotros'
import Inicio from './Inicio'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {

    const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Inicio />}/>
        <Route exact path='Nosotros' element={<Nosotros/>}/>
        <Route exact path='Unite' element={<Unite/>}/>
        <Route exact path='Trabajo' element={<Trabajo/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes