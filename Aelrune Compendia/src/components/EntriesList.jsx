import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div>
      <ul className='grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-15'>
        {
        headers.map((header, index) => {
            return (    
                <Link to={`/${header}`}>    
                <li key={index} className='font-[Macondo] text-[1.2rem] xl:text-[1.6rem] underline'>
                    {header}
                </li>
            </Link>
            )
        })
        }
      </ul>
    </div>
  )
}

export default EntriesList
