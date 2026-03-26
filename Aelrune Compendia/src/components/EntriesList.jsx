import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import loadIcon from '../assets/images/loadingicon.gif';

const EntriesList = ( {dataSet} ) => {

    const [headers, setHeaders] = useState([]);

    const getHeaders = () => {
        const headerData = dataSet.map(data => data.NAME);
        setHeaders(headerData);
    }

    useEffect (() => {
        getHeaders();
    }, [dataSet])

  return (
    <div className='h-[95%] w-[95%]'>
      {
        dataSet.length ?
      <ul className='grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-15'>
        {
        headers.map((header, index) => {
            return (    
              <Link to={`/${header}`} key={index}>    
                <li key={index} className='font-[Macondo] text-[1.2rem] xl:text-[1.6rem] 2xl:text-[1.7rem] underline sm:text-nowrap'>
                    {header}
                </li>
              </Link>
            )
        })
        }
      </ul>
      :
      <div className="loadingcont w-full h-full flex items-center justify-center">
          <img src={loadIcon} alt="Loading..." className="w-25" />
      </div>
      }
    </div>
  )
}

export default EntriesList
