import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import loadIcon from '../assets/images/loadingicon.gif';

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
            {locationData.length ? 

            locationData.map((data, i) => {

                const items = (() => {
                        if (!data.ITEMS) return [];
                        try {
                            return typeof data.ITEMS === "string"
                                ? JSON.parse(data.ITEMS)
                                : data.ITEMS;
                        } catch {
                            return [];
                        }
                    })();
                
                const enemies = (() => {
                        if (!data.ENEMIES) return [];
                        try {
                            return typeof data.ENEMIES === "string"
                                ? JSON.parse(data.ENEMIES)
                                : data.ENEMIES;
                        } catch {
                            return [];
                        }
                    })();

                const gallery = (() => {
                        if (!data.GALLERY) return [];
                        try {
                            return typeof data.GALLERY === "string"
                                ? JSON.parse(data.GALLERY)
                                : data.GALLERY;
                        } catch {
                            return [];
                        }
                    })();    

                return (
                    <div 
                        key={data.NAME || i}
                        className="text-center flex flex-col gap-5 items-center"
                    >
                        <div className='p-2 border-b-3 border-yellow-900 mb-10'>
                            <h2 className="text-[2.6rem] font-[Morris-Roman]">{data.NAME}</h2>
                        </div>
                        <img src={data.IMG}
                             alt={`Image for ${data.NAME} coming soon!`}
                             className="w-50 h-50 md:w-70 md:h-70 border-4 border-yellow-900 rounded-sm"
                        />
                        <div className="subtitles flex flex-col gap-4">
                            <h3 className="text-[2.0rem] font-[Macondo]">{data.SUBTITLE}</h3>
                            <h3 className="text-[1.8rem] font-[Macondo]">{data.OCCUPATION ? `Occupation: ${data.OCCUPATION}` : ""}</h3>
                            <h3 className="text-[1.8rem] font-[Macondo]">{data.RACE ? `Race: ${data.RACE}` : ""}</h3>
                            <h3 className="text-[1.8rem] font-[Macondo]">{data.CLASS ? `Class: ${data.CLASS}` : ""}</h3>
                            <h3 className="text-[1.8rem] font-[Macondo]">{data.TYPE ? `Type: ${data.TYPE}` : ""}</h3>
                            <h3 className="text-[1.8rem] font-[Macondo]">{data.REGION ? `Region: ${data.REGION}` : ""}</h3>
                            {items.length ? 
                                <div>
                                    <h3 className="text-[1.8rem] font-[Macondo]">Items:</h3>
                                    <ul className="list-disc">
                                        {items.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <p>
                                                        {item}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul> 
                                </div>
                            : ""}

                            {enemies.length ? 
                                <div>
                                    <h3 className="text-[1.8rem] font-[Macondo]">Enemies:</h3>
                                    <ul className="list-disc">
                                        {enemies.map((enemy, index) => {
                                            return (
                                                <li key={index}>
                                                    <p>
                                                        {enemy}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul> 
                                </div>
                            : ""}
                        </div>
                        <p className="text-[Rosarivo]">{data.BIO}</p>
                        <div className="gallery">
                            {gallery.length ? 
                                <div className="flex flex-col items-center justify-center">
                                    <div className='p-2 border-b-3 border-yellow-900 mb-10'>
                                        <h3 className="text-[1.8rem] font-[Macondo]">Gallery</h3>
                                    </div>
                                    <ul>
                                        {gallery.map((image, index) => {
                                            return (
                                                <li key={index}>
                                                    <img 
                                                        src={image} 
                                                        alt={`Image of ${data.NAME}`} 
                                                        className="w-full max-w-160 border-4 border-yellow-900 rounded-sm"    
                                                    />
                                                </li>
                                            )
                                        })}
                                    </ul> 
                                </div>
                            : ""}
                        </div>
                    </div>
                    
                )
            })
            
            : 
            <div className="loadingcont w-full h-full flex items-center justify-center">
                <img src={loadIcon} alt="Loading..." className="w-25" />
            </div>

            }

        </section>
    )
}

export default InfoPage;