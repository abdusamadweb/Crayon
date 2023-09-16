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
import Assets from "./pages/services/assets-migrate/Assets";
import Govern from "./pages/services/govern-optimize/Govern";
import Innovate from "./pages/services/innovate-accelerate/Innovate";
import Operate from "./pages/services/operate-support/Operate";
import Healthcare from "./pages/industries/healthcare/Healthcare";
import Public from "./pages/industries/public-sector/Public";
import Page404 from "./components/404/Page404";


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

            <Route path='/services/assess-migrate' element={<Assets />} />
            <Route path='/services/govern-optimize' element={<Govern />} />
            <Route path='/services/innovate-accelerate' element={<Innovate />} />
            <Route path='/services/operate-support' element={<Operate />} />

            <Route path='/industries/healthcare' element={<Healthcare />} />
            <Route path='/industries/public-sector' element={<Public />} />

            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/partner' element={<Partner />} />
            <Route path='/careers' element={<Career />} />

            <Route path='/*' element={<Page404 />} />

          </Routes>

          <Footer openNav={openNav} setOpenNav={setOpenNav} />

        </Wrapper>
      </BrowserRouter>
    </div>
  )
}

export default App