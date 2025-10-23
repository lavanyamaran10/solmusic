import React from 'react'
import Header from './Header'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Contact from '../pages/Contact'

const MainLayout = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  )
}

export default MainLayout