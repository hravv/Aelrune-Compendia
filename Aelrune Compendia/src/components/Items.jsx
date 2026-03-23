import React from "react";
import { Link } from "react-router-dom";
import EntriesList from './EntriesList';

const Items = ( { itemsData }) => {
    return(
        <section className="flex flex-col items-center">
            <div className='py-2 border-b-3 border-yellow-900 mb-12'>
                <h2 className="text-[2.4rem] font-[Macondo]">Items</h2>
            </div>
            <EntriesList dataSet={itemsData} />
        </section>
    )
}

export default Items