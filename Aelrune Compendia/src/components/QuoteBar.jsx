import { React, useState, useEffect } from 'react'
import { AnimatePresence, motion } from "motion/react"
import './quotebar.css'


const QuoteBar = ( {fetchSheet} ) => {

  const [quotes, setQuotes] = useState([]);
  const [displayedQuote, setDisplayedQuote] = useState([]);
  const [showQuote, setShowQuote] = useState(false);

  const fetchQuotes = async () => {
    try {
      const data = await fetchSheet("843023459");
      setQuotes(data);
    } catch (error) {
      console.error("Error fetching quote data: ", error);
    }
  }

  useEffect(() => {
    if (!quotes.length) return;
    const pickRandom = () => {
      const randomValue = Math.floor(Math.random() * quotes.length);
      setDisplayedQuote(quotes[randomValue]);
      setShowQuote(true);
    }
    pickRandom();

    const interval = setInterval(pickRandom, 10000);

    return () => clearInterval(interval);
  }, [quotes])

  useEffect(() => {
    fetchQuotes();
  }, [])


  /*Animation*/

  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }

  return (
    <section className='top-bar'>
          {/*Banner Section*/}
          <div className='quote-bg bg-yellow-800 border-x border-yellow-900 border-4 w-full h-20 flex justify-center items-center'>
            <AnimatePresence mode='wait'>

              {showQuote && (
                  <motion.div
                    key={displayedQuote.QUOTE}
                    transition={transition}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className='quote-cont flex'
                    >
                    <p className='text-[1.1rem] md:text-[1.5rem]! text-amber-100 m-[0]!'>{`"${displayedQuote.QUOTE}"`}</p>
                    <p className='text-[1.1rem] md:text-[1.5rem]! text-amber-100 m-[0]!'>{`- ${displayedQuote.NAME}`}</p>
                  </motion.div>
               )
              }
            </AnimatePresence>
          </div>
    </section>
  )
}

export default QuoteBar
