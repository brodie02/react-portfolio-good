import React from 'react'

export default function Hello({setCurrentPage}) {
    return (
        <div className='hello'>
            <p>Hello! My name is <br></br><span>Brodie Marshall</span><br></br>I am a student full stack web developer</p>
            <button onClick={() => setCurrentPage("Portfolio")}>View Portfolio</button>
        </div>
    )
}