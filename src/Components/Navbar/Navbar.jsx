import React from 'react'
import { useRef } from 'react';
import { TiAnchorOutline, TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import './Navebar.css'

const NavBar = () => {
  let conditon = 0;
  const navRef = useRef()
  const showNavber = () =>{
    if(conditon == 0){
      conditon= conditon + 1
      document.querySelector('.sidebarDiv').style.transform = 'translateX(0px)';
    }else{
      conditon = conditon -1;
      document.querySelector('.sidebarDiv').style.transform = 'translateX(80px)';
    }
  }
  return (
    <div className='back'>
      <nav className='mainNav'ref={navRef} >
         <img src="#" alt="*" className='logo' />
        { conditon === 0 ? <TiThMenuOutline className='TiThMenuOutline' onClick={showNavber}/> : <AiOutlineClose className='TiThMenuOutline' onClick={showNavber} />} 
      </nav>
    </div>
  )
}

export default NavBar