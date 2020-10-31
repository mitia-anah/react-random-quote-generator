import React from 'react'
import { Quote } from './component/Quote'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import QuoteByAuthor from './component/QuoteByAuthor'

function App() {
    return (
        <div className="wrapper">
            <Router>
                <Switch>
                    <Route path="/author/:authorName">
                        <QuoteByAuthor />
                    </Route>
                    <Route path="/">
                        <Quote />
                    </Route>
                </Switch>
            </Router>
        </div>
    )

}
export default App