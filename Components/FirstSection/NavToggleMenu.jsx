import React, { useState, useEffect } from 'react'

import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const NavToggleMenu = () => {

    const [menuIcon, setMenuIcon] = useState(true)
  
    
  console.log(menuIcon)
   useEffect(() => {
      console.log(menuIcon)
   
     return () => {
      
     }
   }, [menuIcon])
   
    
  return (
    <div className='toggle__button__container'>
        <button className='inactive__button' onClick={() => setMenuIcon(!menuIcon)}>
        { menuIcon == false ? 
        <div className="toggle__menu__container">
          <div className='close__toggle__menu__button'>
          <RxCross2 className='close__icon'/>
          </div> 
          <button className="toggle__menu__button">Inicio</button>
          <button className="toggle__menu__button">Contacto</button>
          <div className='toggle__menu__social__media__icons__container'>
          <BsFacebook className='toggle__menu__icons__social__media' />
          <BsLinkedin className='toggle__menu__icons__social__media' />
          <BsInstagram className='toggle__menu__icons__social__media' />
          </div>
        </div>

        : 
        <AiOutlineMenu/>}
        </button>
                <div className='toggle__menu__active'>
        </div>
    </div>
  )
}

export default NavToggleMenu