import React, { useState , useEffect } from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Header = () => {
  const [toggleMenu , setToggleMenu] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(false);
  
  const updateSettings = () =>{
    setToggleSetting(!toggleSetting);
    setToggleMenu(false);
  }

  const updateMenu = () =>{
    setToggleMenu(!toggleMenu);
    setToggleSetting(false);
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setToggleMenu(false);
    setToggleSetting(false);
  }

  useEffect(() =>{
    const handleResize = () => {
      if(window.innerWidth >= 1024){
        setToggleSetting(false);
      }else if(window.innerWidth >= 768){
         setToggleMenu(false);
      }
    };
    window.addEventListener("resize",handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  },[])

  return (
    <div className='relative w-full flex flex-row gap-2 bg-slate-900 h-[80px] p-4 text-[20px]'>
      <div className='h-full  lg:w-[20%] w-[90%] md:w-[20%] text-white'>
          SOLMUSIC
      </div>
       <div className=' h-full w-[5%] md:w-[80%] lg:w-[50%]'>
         <ul className='hidden lg:flex lg:flex-row md:flex md:flex-row gap-10 justify-between text-white cursor-pointer'>
           <li onClick={() => scrollToSection('home')}>HOME</li>
           <li onClick={() => scrollToSection('about')}>ABOUT</li>
           <li onClick={() => scrollToSection('news')}>NEWS</li>
           <li onClick={() => scrollToSection('contact')}>CONTACT</li>
         </ul>
         <button 
           className='flex lg:hidden md:hidden text-white'
           onClick={updateMenu}
         >
           ☰
         </button>
       </div>
       {toggleMenu && (
         <div className='absolute top-[80px] left-0 w-full mt-1 bg-slate-900 flex flex-col'>
           <ul className='flex flex-col gap-4 p-4 text-white justify-center items-center'>
             <li onClick={() => scrollToSection('home')} className='cursor-pointer'>HOME</li>
             <li onClick={() => scrollToSection('about')} className='cursor-pointer'>ABOUT</li>
             <li onClick={() => scrollToSection('news')} className='cursor-pointer'>NEWS</li>
             <li onClick={() => scrollToSection('contact')} className='cursor-pointer'>CONTACT</li>
           </ul>
         </div>
       )}
      <div className='h-full lg:w-[25%] w-[5%] text-[16px] ml-5 mt-1'>
         <ul className='hidden lg:flex lg:flex-row flex-col gap-2 justify-between text-white cursor-pointer'>
          <li className='flex flex-row gap-2'>
            <li>Login</li>
            <li>Help</li>
          </li>
          <li>Create an account</li>
        </ul>
      
        <div className="flex lg:hidden">
          <SettingsOutlinedIcon 
            className='cursor-pointer text-white' 
            onClick={updateSettings}
          />
        </div>
      </div>
      {
        toggleSetting && (
          <div className='absolute top-[80px] left-0 w-full  mt-1  bg-slate-900 flex flex-col'>
            <ul className='flex flex-col gap-4 p-4 text-white justify-center items-center'>
              <li>Login</li>
              <li>Help</li>
              <li>Create an account</li>
            </ul>

          </div>
        )
      }
    </div>
  )
}

export default Header
