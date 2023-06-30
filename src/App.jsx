import './general.css'
import Nav from './components/Nav'
import { BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
        <AnimatedRoutes/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
