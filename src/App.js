// global styles
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './App.scss'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import {useEffect, useLayoutEffect, useState} from "react"
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
import Microsoft from "./pages/cloud-providers/microsoft/Microsoft";
import Aws from "./pages/cloud-providers/aws/Aws";
import Google from "./pages/cloud-providers/google/Google";
import Adobe from "./pages/software-partners/adobe/Adobe";
import Citrix from "./pages/software-partners/citrix/Citrix";
import Flexera from "./pages/software-partners/flexera/Flexera";
import Ibm from "./pages/software-partners/ibm/Ibm";
import Veeam from "./pages/software-partners/veeam/Veeam";
import Vmware from "./pages/software-partners/vmware/Vmware";
import Diversity from "./pages/about-us/diversity/Diversity";
import Terms from "./pages/about-us/terms-conditions/Terms";
import GlobalPrivacy from "./pages/about-us/global-privacy/GlobalPrivacy";
import Subscribe from "./pages/resources/subscribe/Subscribe";
import News from "./pages/resources/news/News";
import NewsId from "./pages/resources/news/news-id/NewsId";
import navList from "./assets/scripts/navList";
import GlobalRoute from "./components/global-route/GlobalRoute";
import $api from "./api";


const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}


const App = () => {


  const [openNav, setOpenNav] = useState(false)


  // to localeStore
  useEffect(() => {
    $api
        .get('/general-settings')
        .then(res => {
          const jsonString = JSON.stringify(res.data[0])
          localStorage.setItem('globalData', jsonString)
        })
  }, [])
  const storedData = localStorage.getItem('globalData')
  const data = JSON.parse(storedData)


  // colors from APi
  useEffect(() => {
    $api
        .get('/colors')
        .then(res => {
          document.documentElement.style.setProperty('--main-color', res.data[0].mainColor)
          document.documentElement.style.setProperty('--secondary-color', res.data[0].secondaryColor)
          document.documentElement.style.setProperty('--txt-color', res.data[0].textColor)
          document.documentElement.style.setProperty('--gray-color', res.data[0].itemColor)
        })
  }, [])


  // favicon
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'icon'
    link.href = data?.favicon?.full_url

    const link2 = document.createElement('link')
    link2.rel = 'apple-touch-icon'
    link2.href = data?.favicon?.full_url

    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [data])


  // adding meta-tags
  const [keywords, setKeywords] = useState('DIS')
  useEffect(() => {
    $api
        .get('/seo')
        .then(res => {
          setKeywords(res.data[0]?.seo)
        })
  }, [])
  useEffect(() => {
    const metaKeywordsTag = document.querySelector('meta[name="keywords"]')
    if (metaKeywordsTag) {
      metaKeywordsTag.setAttribute('content', keywords)
    }
  }, [keywords])


  // page title
  useEffect(() => {
    document.title = data?.['app-name'] || 'DIS'
  }, [data])


  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>

          <Header openNav={openNav} setOpenNav={setOpenNav} />

          <Routes>

            <Route path='/' element={<Home />} />

            {
              navList?.map(i => i.list && (
                  <Route path={i.link} element={<GlobalRoute i={i} />}/>
              ))
            }

            <Route path='/services/assess-migrate' element={<Assets />} />
            <Route path='/services/govern-optimize' element={<Govern />} />
            <Route path='/services/innovate-accelerate' element={<Innovate />} />
            <Route path='/services/operate-support' element={<Operate />} />

            <Route path='/industries/healthcare' element={<Healthcare />} />
            <Route path='/industries/public-sector' element={<Public />} />

            <Route path='/cloud-providers/microsoft' element={<Microsoft />} />
            <Route path='/cloud-providers/aws' element={<Aws />} />
            <Route path='/cloud-providers/google-cloud' element={<Google />} />

            <Route path='/software-partners/adobe' element={<Adobe />} />
            <Route path='/software-partners/citrix' element={<Citrix />} />
            <Route path='/software-partners/flexera' element={<Flexera />} />
            <Route path='/software-partners/ibm' element={<Ibm />} />
            <Route path='/software-partners/veeam' element={<Veeam />} />
            <Route path='/software-partners/vmware' element={<Vmware />} />

            <Route path='/about-us/careers' element={<Career />} />
            <Route path='/about-us/diversity-equity-inclusion' element={<Diversity />} />
            <Route path='/about-us/terms-conditions' element={<Terms />} />
            <Route path='/about-us/global-privacy-notice' element={<GlobalPrivacy />} />

            <Route path='/resources/blogs' element={<News name='blogs' />} />
            <Route path='/resources/case-studies' element={<News name='case-studies' />} />
            <Route path='/resources/news' element={<News name='news' />} />
            <Route path='/resources/blogs/:id' element={<NewsId name='blogs' />} />
            <Route path='/resources/case-studies/:id' element={<NewsId name='case-studies' />} />
            <Route path='/resources/news/:id' element={<NewsId name='news' />} />
            <Route path='/resources/subscribe' element={<Subscribe />} />

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