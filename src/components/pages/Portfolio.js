import React from 'react'
import Project from '../Project'

import techBlog from '../images/techBlog.png'
import weatherDash from '../images/weather.png'

export default function Portfolio () {
    const projects = [
        {
            title: 'Tech Blog',
            image: techBlog,
            body: "Tech Blog is a CRUD application in the form of a blog. The user is able to create, update and delete posts as well as comment on other user's posts. This application was made in 1 week by myself.",
            tech: "Technologies: JavaScript, Node.js, Handlebars, Sequelize, MySQL, Express, HTML, CSS",
            app: "https://brodie-tech-blog.herokuapp.com/",
            github: "https://github.com/brodie02/tech-blog"
        },
        {
            title: 'Weather Dashboard',
            image: weatherDash,
            body: "This Weather Dashboard collects data from the OpenWeather API depending on what city the user inputs. Th application will then present the current temperature, wind speed, humidity and UV index. It will also show the weather for the next 5 days.",
            tech: "Technologies: JavaScript, HTML, CSS, OpenWeather API",
            app: "https://brodie02.github.io/weather-dashboard/",
            github: "https://github.com/brodie02/weather-dashboard"
        },
    ]

    return (
        // <Project title={projects[0].title} image={projects[0].image} body={projects[0].body} tech={projects[0].tech} app={projects[0].app} github={projects[0].github}/>
        <div>
            {projects.map(project => (
                <Project title={project.title} image={project.image} body={project.body} tech={project.tech} app={project.app} github={project.github}/>
            ))}
        </div>
    )
}