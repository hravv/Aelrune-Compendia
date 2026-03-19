import React from 'react'
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const SearchBar = ({ searchInput, setSearchInput, textcolor }) => {

    const navigate = useNavigate();
        
        const handleSearch = (e) => {
        e.preventDefault();

        const query = searchInput.trim();
        if (!query) return;
        
        navigate(`/search?q=${encodeURIComponent(query)}`)
        setSearchInput("");
        };

  return (
    <div>
        <form 
          className='search-cont flex justify-between w-64'
          onSubmit={handleSearch}
        >
            <input type="text" 
                   className='bg-white px-2 mr-2 border-3 border-black' 
                   value={searchInput}
                   onChange={e => setSearchInput(e.target.value)}
            />
            <button 
              type="submit"
              className={clsx(`text-[1.1rem] font-[Rosarivo] cursor-pointer text-${textcolor} font-semibold`)}
            >
                Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar
