import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Explore from './pages/Explore'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import NavContext from './context/NavContext'
import Footer from './components/Navigation/Footer'

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; //for the footer to not show in home page

  return (
    <NavContext>
      <div className='overflow-x-hidden'>
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Explore' element={<Explore />} />
        </Routes>
        {!isHome && <Footer />}
      </div>
    </NavContext>
  )
}

export default App
