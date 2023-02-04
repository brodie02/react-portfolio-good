import React from 'react'

export default function Navigation ({setCurrentPage}) {
    return (
        <ul className='nav'>
            <li><a href='#about' onClick={() => setCurrentPage("About")}>About Me</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#resume'>Resume</a></li>
        </ul>
    )
}