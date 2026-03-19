import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css';

import SearchBar from './SearchBar';
import headerbg from '../assets/images/headerbg.JPG'

const Header = ({ searchInput, setSearchInput }) => {
  

  return (
    <header className='pageheader w-full h-36 flex-col lg:flex-row flex justify-around items-center z-10' style={{ backgroundImage: `url(${headerbg})` }}>
        <h1 className='text-[2.8rem] lg:text-[3.8rem] font-[Morris-Roman] text-yellow-50 title'>
            Aelrune Compendia
        </h1>

        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} textcolor="yellow-100"/>
        
    </header>
  )
}

export default Header
