import React from 'react'
import Navigation from './Navigation'

export default function Header({currentPage, setCurrentPage}) {
    return (
        <header>
            <h1><a href='/#' onClick={() => setCurrentPage("Hello")}>Brodie Marshall</a></h1>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    )
}