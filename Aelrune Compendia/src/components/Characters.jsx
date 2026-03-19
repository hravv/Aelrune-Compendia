import React from "react";

import EntriesList from "./EntriesList";

const Characters = ({ charactersData }) => {
    return(
        <section className="flex flex-col items-center justify-center">
            <h2 className="text-[2.4rem] 2xl:text-[3.4rem] font-[Macondo] mb-10">Characters</h2>
            <EntriesList dataSet={charactersData} />
        </section>
    )
}

export default Characters