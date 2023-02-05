import React from 'react'

export default function TechTable ({title, logos}) {
    return (
        <div className='table'>
            <div className='table-title'>
                <h4>{title}</h4>
            </div>
            <div className='table-pics'>
                {logos.map(logo => (
                    <img alt='logo' src={logo}></img>
                ))}
            </div>
        </div>
    )
}