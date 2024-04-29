import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import {
  FaRegChartBar,
  FaTh,
  FaUserAlt,
  FaBars,
  FaChartLine
} from 'react-icons/fa';
const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const[isOpen, setIsOpen]=useState(false)
  const toggle = () => setIsOpen(!isOpen);
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon:<FaTh/>
    },
    {
      path:"/about",
      name:"About",
      icon:<FaUserAlt/>
    },
    {
      path:"/grid",
      name:"Grid",
      icon:<FaRegChartBar/>
    },
    {
      path:"/graph",
      name:"Graph",
      icon:<FaChartLine />
    },
  ]
  return (
    <div className="container">
      <div style={{width:isOpen ? "300px" : "80px"}} className="sidebar">
        <div className="top_section">
        <div className='bars' style={{padding: isOpen ? "0 0 0 12px" : "0 25%"}}>
          <FaBars onClick={toggle}/></div>
          <h2 style={{display: isOpen ? "block" : "none", fontWeight:"bolder"}} className="logo">SecurityMonitor</h2>
        </div>
        {
        menuItem.map((item, index)=>(
          <NavLink to={item.path} key={index} className="link" style ={{padding: isOpen ? "0 0 0 12px" : "0 25%"}} >
            <div className="icon">{item.icon}</div>
            <div style={{display: isOpen ? "block" : "none", marginLeft: "20px" }} className="link_text">{item.name}</div>
          </NavLink>
        ))
      }
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar;