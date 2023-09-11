// global styles
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './App.scss'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import {useLayoutEffect, useState} from "react"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer";
import Career from "./pages/career/Career";
import Partner from "./pages/partner/Partner";
import ContactUs from "./pages/contact-us/ContactUs";


const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}


const App = () => {


  const [openNav, setOpenNav] = useState(false)


  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>

          <Header openNav={openNav} setOpenNav={setOpenNav} />

          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/partner' element={<Partner />} />
            <Route path='/careers' element={<Career />} />

          </Routes>

          <Footer openNav={openNav} setOpenNav={setOpenNav} />

        </Wrapper>
      </BrowserRouter>
    </div>
  )
}

export default App