import React from 'react'
import Navbar from './navbar'


const Header = () => {
  return (
    <div className='min-h-screen md-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navbar/>
      <div>
        <h2>Explore homes that fit your dreams</h2>
      </div>
      <div>
        <a href=''>Projects</a>
        <a href=''>Contact Us</a>
      </div>
    </div>
  )
}

export default Header
