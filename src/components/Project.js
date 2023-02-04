import React from 'react'
import techBlog from './images/techBlog.png'

export default function Project ({title, image, body, tech, app, github}) {
    return (
        <div className='project'>
            <h2>Portfolio</h2>
            <div className='project-body'>
                <h3>Tech Blog</h3>
                <img src={techBlog} alt='tech blog website'></img>
                <div className='project-text'>
                    <p>Tech Blog is a CRUD application in the form of a blog. The user is able to create, update and delete posts as well as comment on other user's posts. This application was made in 1 week by myself.</p>
                    <p>Technologies: JavaScript, Node.js, Handlebars, Sequelize, MySQL, Express, HTML, CSS </p>
                    <div className='project-buttons'>
                        <button className='button'><a href='https://brodie-tech-blog.herokuapp.com/'>DEMO</a></button>
                        <button className='button'><a href='https://github.com/brodie02/tech-blog'>VIEW CODE</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}