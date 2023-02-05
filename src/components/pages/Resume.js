import React from 'react'

import resume from '../../assets/pdf/resume.pdf'

export default function Resume () {
    return (
       <div className='resume'>
            <h2>Resume</h2>
            <div className='resume-button'>
                <button className='button'><a href={resume}>View Resume</a></button>
            </div>
       </div> 
    )
}