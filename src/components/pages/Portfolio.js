import React from 'react'
import Project from '../Project'

import techBlog from '../images/techBlog.png'

export default function Portfolio () {
    const projects = [
        {
            title: 'Tech Blog',
            image: techBlog,
            body: "Tech Blog is a CRUD application in the form of a blog. The user is able to create, update and delete posts as well as comment on other user's posts. This application was made in 1 week by myself.",
            tech: "Technologies: JavaScript, Node.js, Handlebars, Sequelize, MySQL, Express, HTML, CSS",
            app: "https://brodie-tech-blog.herokuapp.com/",
            github: "https://github.com/brodie02/tech-blog"
        }
    ]

    return (
        <Project title={projects[0].title} image={projects[0].image}/>
    )
}