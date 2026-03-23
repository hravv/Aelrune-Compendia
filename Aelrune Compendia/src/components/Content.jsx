import { React, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Papa from 'papaparse';
import clsx from 'clsx';

import paper from '../assets/images/paper-bg.jpg'

import Home from './Home';
import Lore from './Lore';
import Characters from './Characters';
import Bestiary from './Bestiary';
import Items from './Items';
import WorldMap from './WorldMap';
import NPCs from './NPCs';
import Locations from './Locations';
import InfoPage from './InfoPage';
import SearchResults from './SearchResults';

const Content = ( { allData, searchInput, setSearchInput } ) => {

    return (
        <section>
            <div className='w-[80%] sm:w-[60%] max-w-300 min-h-200 py-10 md:py-20 px-10 mx-auto mb-12 border-yellow-900 border-4 rounded-lg flex justify-center' style={{ backgroundImage: `url(${paper})` }}>
                <Routes>
                    <Route path='/' element={<Home searchInput={searchInput} setSearchInput={setSearchInput} />} />
                    <Route path='/lore' element={<Lore />} />
                    <Route path='/characters' element={<Characters charactersData={allData.characters} />} />
                    <Route path='/bestiary' element={<Bestiary creaturesData={allData.creatures} />}>Bestiary</Route>
                    <Route path='/items' element={<Items itemsData={allData.items} />}>Items</Route>
                    <Route path='/worldmap' element={<WorldMap />}>World Map</Route>
                    <Route path='/locations' element={<Locations locationData={allData.locations} />}>Locations</Route>
                    <Route path='/NPCs' element={<NPCs npcsData={allData.npcs} />}>NPCs</Route>
                    <Route path={'/:name'} element={<InfoPage allData={allData} />} />
                    <Route path='/search' element={<SearchResults allData={allData} />} />
                </Routes>
            </div>
        </section>
    )
        
}

export default Content 