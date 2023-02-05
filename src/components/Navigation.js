import React from 'react'

export default function Navigation ({currentPage, setCurrentPage}) {
    return (
        <ul className='nav'>
            <li><a className={currentPage === "About" ? 'active' : ''} href='#about' onClick={() => setCurrentPage("About")}>About Me</a></li>
            <li><a className={currentPage === "Portfolio" ? 'active' : ''} href='#portfolio' onClick={() => setCurrentPage("Portfolio")}>Portfolio</a></li>
            <li><a className={currentPage === "Contact" ? 'active' : ''} href='#contact' onClick={() => setCurrentPage("Contact")}>Contact</a></li>
            <li><a className={currentPage === "Resume" ? 'active' : ''} href='#resume' onClick={() => setCurrentPage("Resume")}>Resume</a></li>
        </ul>
    )
}