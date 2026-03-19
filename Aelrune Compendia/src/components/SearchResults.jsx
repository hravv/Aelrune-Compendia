import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchResults = ({ allData }) => {

  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";
  const merged = Object.values(allData).flat();

  const results = merged.filter(item =>
    item.NAME?.toLowerCase().includes(query) ||
    item.BIO?.toLowerCase().includes(query) ||
    item.BODY?.toLowerCase().includes(query)
  );


  return (
    <div>
      <h2 className="text-[2.4rem] 2xl:text-[3rem] font-[Macondo] mb-10">Results for "{query}"</h2>
      <ul>
        {results.map((result, i) => {
          return (
            <Link to={`/${result.NAME}`}>
              <li index={i} className='font-[Macondo] text-[1.2rem] xl:text-[1.6rem] underline'>
                {result.NAME}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default SearchResults
