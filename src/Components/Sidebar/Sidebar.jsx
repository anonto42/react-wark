import React from 'react'
import './Sidebar.css'
import { FaCalculator } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { GiSandSnake } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import { FaStopwatch } from "react-icons/fa6";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { ImCalculator } from "react-icons/im";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebarDiv'>
        <a href='/weatherapp' target='blank'><TiWeatherWindyCloudy className='qrcode'/></a>
        <MdLibraryMusic className='MdLibraryMusic'/>
        <FaQrcode className='qrcode'/>
        <GiSandSnake className='qrcode'/>
        <MdQuiz className='qrcode'/>
        <LuListTodo className='qrcode'/>
        <FaStopwatch className='qrcode'/>
        <ImCalculator className='qrcode'/>
        <RxCrossCircled className='qrcode'/>
        <a href='/calculator' target='blank'><FaCalculator className='FaCalculator'/></a>
    </div>
  )
}

export default Sidebar