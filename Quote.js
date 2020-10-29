import React, { useState, useEffect } from 'react'

export function Quote(props) {
    const [quote, setQuote] = useState([])

    const getQuote = async () => {
        const res = await fetch(props.url)
        const data = await res.json()
        setQuote(data)
        console.log(data);
    }

    useEffect(() => {
        getQuote()
        return () => { }
    }, [])

    return (
        <div>
            <p>{quote.quoteText}</p>
        </div>
    )
}