import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const API_URL = "https://quote-garden.herokuapp.com/api/v2/authors/"
const PAGE = "?page=1&limit=10"

function QuoteByAuthor() {
    const [author, setAuthor] = useState([])
    const { authorName } = useParams()

    const getAuthor = async () => {
        try {
            const res = await fetch(API_URL + authorName + PAGE);
            console.log(res);
            const quoteNum = await res.json()
            console.log(quoteNum.quotes);
            setAuthor(quoteNum.quotes)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getAuthor()
    }, [])

    return (
        <>
            <div className="lists-holder">
                <p className='author-name'>{authorName}</p>
                <ul>
                    {author.map(author =>
                        <li className="list-of-quotes" key={author.id}>"{author.quoteText}"</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default QuoteByAuthor