import React from 'react'

export default function Navigation ({setCurrentPage}) {
    return (
        <ul className='nav'>
            <li><a href='#about' onClick={() => setCurrentPage("About")}>About Me</a></li>
            <li><a href='#portfolio' onClick={() => setCurrentPage("Portfolio")}>Portfolio</a></li>
            <li><a href='#contact' onClick={() => setCurrentPage("Contact")}>Contact</a></li>
            <li><a href='#resume' onClick={() => setCurrentPage("Resume")}>Resume</a></li>
        </ul>
    )
}