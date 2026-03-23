import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './header.css';

import SearchBar from './SearchBar';
import headerbg from '../assets/images/headerbg.JPG'

const Header = ({ searchInput, setSearchInput }) => {
  

  return (
    <header className='pageheader w-full h-36 flex-col lg:flex-row flex justify-around items-center z-10' style={{ backgroundImage: `url(${headerbg})` }}>
      <Link to={'/'}>
          <h1 className='text-[2.8rem] lg:text-[4.5rem] font-[TitleFont] text-yellow-50 hover:text-yellow-100 transition-colors title'>
              Aelrune Compendia
          </h1>
      </Link>

        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} textcolor="yellow-100"/>
        
    </header>
  )
}

export default Header
