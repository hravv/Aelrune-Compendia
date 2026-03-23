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
        <p>The Ael’risha’ri (or simply the Ael, as many call them) built an empire that spanned the continent of Verus and beyond, achieving a level of architectural and social perfection that has never been seen since. However, millenia ago, a mysterious tragedy struck - the civilisation fell, and little but myth and fractured memory endured.</p>
        <p>What remains has been gathered here. These records are among the last surviving traces of Aelrune’s history, preserved so their legacy is not lost to the turning of ages.</p>
      </div>
  )
}

export default Home
