import React from 'react'

export default function Project ({title, image, body, tech, app, github}) {
    return (
        <div className='project'>
            <h2>Portfolio</h2>
            <div className='project-body'>
                <h3>{title}</h3>
                <img src={image} alt='tech blog website'></img>
                <div className='project-text'>
                    <p>{body}</p>
                    <p>{tech}</p>
                    <div className='project-buttons'>
                        <button className='button'><a href={app}>DEMO</a></button>
                        <button className='button'><a href={github}>VIEW CODE</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}