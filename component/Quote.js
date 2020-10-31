import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const randomLink = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'
export function Quote() {
    const [quote, setQuote] = useState('')

    const getQuote = async () => {
        const res = await fetch(randomLink)
        const data = await res.json()
        setQuote(data.quote)
        console.log(data.quote);
    }

    useEffect(() => {
        getQuote()
    }, [])

    return (
        <>
            <Link to="/">
                <button onClick={getQuote} className="random-btn">
                    Random 🔁
            </button>
            </Link>
            <div className="container">
                <div className="quote">
                    <h2>"{quote.quoteText}"</h2>
                </div>
                <Link to={`author/${quote.quoteAuthor}`}>
                    <div className="author-and-genre">
                        <p className='author'>{quote.quoteAuthor}</p>
                        <p className='genre'>{quote.quoteGenre}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}