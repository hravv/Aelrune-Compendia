import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './sidebar.css'


const Sidebar = () => {

  function NavItem ({to, children}) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => clsx(isActive ? ('text-yellow-300') : ('text-yellow-100'), ('text-[1.6rem]'))}
      >
        {children}
      </NavLink>
    )
  }

  return (
    <nav className='bg-yellow-900 w-fit h-fit mx-auto minsidebar:mx-0 minsidebar:fixed flex flex-col minsidebar:left-0 minsidebar:top-60 text-center py-2 px-2 minsidebar:pr-2 minsidebar:pl-0 mt-4 minsidebar:mt-0 rounded-md minsidebar:rounded-r-md font-[Macondo] z-20'>
      <NavItem to="/">
        <div className='navbutton w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-10 2xl:text-[1.8rem] flex items-center justify-center'>
          Home
        </div>
      </NavItem>
      <NavItem to='/lore'>
        <div className='navbutton3 w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-9 2xl:text-[1.8rem] flex items-center justify-center'>
          Lore
        </div>
      </NavItem>
      <NavItem to='/characters'>
        <div className='navbutton2 w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-8 2xl:text-[1.8rem] flex items-center justify-center'>
          Characters
        </div>
      </NavItem>
      <NavItem to='/bestiary'>
        <div className='navbutton4 w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-7 2xl:text-[1.8rem] flex items-center justify-center'>
          Bestiary
        </div>
      </NavItem>
      <NavItem to='/items'>
        <div className='navbutton3 w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-6 2xl:text-[1.8rem] flex items-center justify-center'>
          Items
        </div>
      </NavItem>
      <NavItem to='/locations'>
        <div className='navbutton2 w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-8 2xl:text-[1.8rem] flex items-center justify-center'>
          Locations
        </div>
      </NavItem>
      <NavItem to='/NPCs'>
        <div className='navbutton3 w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-6 2xl:text-[1.8rem] flex items-center justify-center'>
          NPCs
        </div>
      </NavItem>
      <NavItem to='/worldmap'>
        <div className='navbutton w-45 h-10 2xl:w-60 2xl:h-13 rounded-sm z-5 2xl:text-[1.8rem] flex items-center justify-center'>
          World Map
        </div>
      </NavItem>
    </nav>
  )
}

export default Sidebar
