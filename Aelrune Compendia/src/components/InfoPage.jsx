import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const InfoPage = ({allData}) => {

    const { name } = useParams();
    const [locationData, setLocationData] = useState([]);


    useEffect(()=> {
        const merged = Object.values(allData).flat();
        if (!name || !merged.length) return;
        const data = merged.filter((obj) => obj.NAME?.toLowerCase() === name.toLowerCase());
        setLocationData(data);
    }, [name, allData])

    return(
        <section>
            {locationData.map((data, i) => {
                return (
                    <div 
                        key={data.NAME || i}
                        className="text-center flex flex-col justify-center items-center"
                    >
                        <h2 className="text-[2.6rem] font-[Morris-Roman]">{data.NAME}</h2>
                        <img src={data.IMG}
                             alt={`Image for ${data.NAME} coming soon!`}
                             className="w-50 h-50 md:w-70 md:h-70 border-4 border-yellow-900"
                        />
                        <div className="subtitles flex flex-col gap-4">
                            <h3 className="text-[1.8rem] font-[Macondo]">{data.SUBTITLE}</h3>
                            <h3 className="text-[1.6rem] font-[Macondo]">{data.RACE ? `Race: ${data.RACE}` : ""}</h3>
                            <h3 className="text-[1.6rem] font-[Macondo]">{data.CLASS ? `Class: ${data.CLASS}` : ""}</h3>
                            <h3 className="text-[1.6rem] font-[Macondo]">{data.TYPE ? `Type: ${data.TYPE}` : ""}</h3>
                        </div>
                        <p className="text-[Rosarivo]">{data.BIO}</p>
                    </div>
                    
                )
            })}

        </section>
    )
}

export default InfoPage;