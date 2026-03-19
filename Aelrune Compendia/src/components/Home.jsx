import React from 'react'
import SearchBar from './SearchBar'

const Home = ({ searchInput, setSearchInput }) => {
  return (
      <div className='flex flex-col gap-18 justify-center items-center text-center'>
        <div className='py-2 border-b-3 border-yellow-900'>
          <h2 className='text-[1.4rem] md:text-[2.4rem] font-[Macondo]'>Welcome to the Aelrune Compendia</h2>
        </div>
        
        <p>An archive of discoveries made in Aelrune and its surrounding territories, including beasts, characters, items, and more.</p>
        
        <div className='text-center px-2 py-8 border-b-3 border-yellow-900'>
          <p className='text-[1.7rem]! font-[Macondo]!'>Search the archives:</p>
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} textcolor="black"/>
        </div>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
  )
}

export default Home
