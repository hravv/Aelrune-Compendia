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
    <section className='h-[95%] w-[95%]'>
      { results ?
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='p-2 border-b-3 border-yellow-900 mb-12'>
          <h2 className="text-[2.4rem] font-[Macondo]">Results for "{query}"</h2>
        </div>
        <ul className='grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-15'>
          {results.map((result, i) => {
            return (
              <Link to={`/${result.NAME}`}>
                <li index={i} className='font-[Macondo] text-[1.2rem] xl:text-[1.6rem] 2xl:[text-2.0rem] underline text-nowrap'>
                  {result.NAME}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      : 
      <div className="loadingcont">
          <img src={loadIcon} alt="Loading..." className="w-25" />
      </div>
      }
    </section>
  )
}

export default SearchResults
