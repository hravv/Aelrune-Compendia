import React from "react";
import { Link } from "react-router-dom";
import EntriesList from './EntriesList';

const Items = ( { itemsData }) => {
    return(
        <section className="flex flex-col items-center justify-center">
            <h2 className="text-[2.4rem] font-[Macondo] mb-10">Items</h2>
            <EntriesList dataSet={itemsData} />
        </section>
    )
}

export default Items