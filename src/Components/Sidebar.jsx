import React, { useState } from 'react'
import '../App.css'; 
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLiveHelp } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegFaceSurprise } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { TbLayoutSidebarRightExpandFilled } from 'react-icons/tb';
import { FaTasks } from "react-icons/fa";

const Sidebar = ({children}) => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Customers",
            icon:<FaRegUserCircle />
        },
        {
            path:"/Product",
            name:"Product",
            icon:<AiOutlineProduct />
        },
        {
            path:"/Income",
            name:"Income",
            icon:<FaCoins />
        },
        {
            path:"/Promote",
            name:"Promote",
            icon:<FaRegFaceSurprise />
        },
        {
            path:"/Help",
            name:"Help",
            icon:<MdOutlineLiveHelp />
        },
        {
            path:"/TaskManagement",
            name:"TaskManagement",
            icon:<FaTasks />
        }
    ]
  return (
    <div className='MyContainer'>
        <div  style={{width:isOpen?"250px":"50px"}}className='sidebar'>
            <div className='top_section'>
                <h2 style={{display:isOpen?"block":"none"}} className='logo'>DashBoard</h2>
                <div style={{marginLeft:isOpen?"50px":"0px"}} className='bars' onClick={toggle} role='button' title={!isOpen?'opensidebar':'closesidebar'}>
                {!isOpen?<FaBars/>:<TbLayoutSidebarRightExpandFilled />}
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index}className='link text-decoration-none'>
                        <div className='icon'>{item.icon}</div>
                        <div  style={{display:isOpen?"block":"none"}} className='link_text'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Sidebar