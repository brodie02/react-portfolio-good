import React from 'react'
import Navigation from './Navigation'

export default function Header({currentPage, setCurrentPage}) {
    return (
        <header>
            <h1 onClick={() => setCurrentPage("Hello")}>Brodie Marshall</h1>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    )
}