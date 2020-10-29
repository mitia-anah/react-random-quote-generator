import React, { useEffect, useState } from 'react'
import { Quote } from './Quote'

function App() {
    return (
        <div>
            <Quote url='https://quote-garden.herokuapp.com/api/v2/quotes/random' />
        </div>
    )
}
export default App