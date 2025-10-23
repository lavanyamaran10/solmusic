import React from 'react'

const Contact = () => {

    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='bg-slate-900 p-10'>
      <ul className='flex flex-col lg:flex-row md:flex-row gap-10 justify-around items-center text-white'>
        <li className='flex justify-center items-center'>
          <p>SOLMUSIC</p>
        </li>
        <li className='flex flex-col justify-center items-center'>
          <li>Our Story</li>
          <li>Sol Music Blog</li>
          <li>History</li>
        </li>
        <li className='flex flex-col justify-center items-center cursor-pointer'><li onClick={() => scrollToSection('home')}>HOME</li>
        <li onClick={() => scrollToSection('about')}>ABOUT</li>
        <li onClick={() => scrollToSection('news')}>NEWS</li>
        <li onClick={() => scrollToSection('contact')}>CONTACT</li></li>
        <li className='flex flex-col justify-center items-center'><li>Newsletter</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Contact</li></li>
      </ul>
    </div>
  )
}

export default Contact
