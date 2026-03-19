import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Papa from 'papaparse';


import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';
import QuoteBar from './components/QuoteBar';

function App() {

  const [searchInput, setSearchInput] = useState();  
  const [results, setResults] = useState([]);
  const [allData, setAllData] = useState({
          creatures: [],
          items: [],
          characters: []
      });
      
  const fetchAllData = async () => {
      try { 
      const creatures = await fetchSheet("0");
      const items = await fetchSheet("869977913");
      const characters = await fetchSheet("1311284340");
  
         setAllData({ creatures, items, characters });
         } catch (error) {
           console.error("Failed to fetch alldata: ", error);
         }
  
      }
  
  useEffect(() => {
      fetchAllData();
  }, [])


 const fetchSheet = async (gid) => {
    const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSi4ZiTzY5u54jo3NIGHyWVVUS-yePOltjsC8onkvpkyiNCdLBXF5-3ptVU5Lzs70e9_oIvxoGJvHa0/pub?gid=${gid}&single=true&output=csv`
    const res = await fetch(url);
    const text = await res.text();

    const parsed = Papa.parse(text, {
      header: true,
      skipEmptyLines: true
    })
    return parsed.data;
  }


  return (
    <div className='app relative min-h-screen flex flex-col'>
      {/*Left Background Strip}*/}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-10 sm:w-20 bg-repeat-y z-0 leaftile" />

      {/*Right Background Strip*/}
      <div className='pointer-events-none absolute top-0 right-0 h-full w-10 sm:w-20 bg-repeat-y z-0 leaftile' /> 
      <main className='maincontent flex-1 z-10 flex flex-col'>

        <Header 
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          results={results}
          setResults={setResults}
          allData={allData}
        />
        {/*Top Section*/}
        <QuoteBar fetchSheet={fetchSheet}/>

        {/*Middle Section*/}
        <section className='relative'>

          {/*Side Bar*/}
  
          <section>
            <Sidebar />
          </section>

          {/*Main Body*/}
          
          <section className='content flex flex-col w-[100%]'>

            <div className='topspace h-20 w-[100%]' />
            <Content fetchSheet={fetchSheet} allData={allData} searchInput={searchInput} setSearchInput={setSearchInput} />
          </section>
          
        </section>
            
      </main>

      {/*Footer*/}
      <section className='z-10'>
        <footer className='h-9 w-[100%] bg-yellow-800 flex items-center justify-center'>
          <p className='text-yellow-100 text-[0.9rem]! sm:text-[1.1rem]!'>Developed by Harvey Burman | {new Date().getFullYear()}</p>
        </footer>
      </section>

    </div>
  )
}

export default App
