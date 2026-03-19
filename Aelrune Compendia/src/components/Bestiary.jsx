import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import EntriesList from "./EntriesList";

const Bestiary = ( {creaturesData} ) => {

    return(
        <section className="flex flex-col items-center justify-center">
            <h2 className="text-[2.4rem] font-[Macondo] mb-10">Bestiary</h2>
            <EntriesList dataSet={creaturesData} />
        </section>
    )
}

export default Bestiary