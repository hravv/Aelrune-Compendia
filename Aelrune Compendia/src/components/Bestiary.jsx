import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import EntriesList from "./EntriesList";

const Bestiary = ( {creaturesData} ) => {

    return(
        <section className="flex flex-col items-center">
            <div className='py-2 border-b-3 border-yellow-900 mb-12'>
                <h2 className="text-[2.4rem] font-[Macondo]">Bestiary</h2>
            </div>
            <EntriesList dataSet={creaturesData} />
        </section>
    )
}

export default Bestiary