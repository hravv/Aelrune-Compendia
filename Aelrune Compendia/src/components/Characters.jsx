import React from "react";

import EntriesList from "./EntriesList";

const Characters = ({ charactersData }) => {
    return(
        <section className="flex flex-col items-center">
            <div className='py-2 border-b-3 border-yellow-900 mb-12'>
                <h2 className="text-[2.4rem] font-[Macondo]">Characters</h2>
            </div>
            <EntriesList dataSet={charactersData} />
        </section>
    )
}

export default Characters