import React from 'react'
import Project from '../Project'

import eCommerce from '../images/shop.png'
import techBlog from '../images/techBlog.png'
import weatherDash from '../images/weather.png'
import workout from '../images/workout.png'
import event from '../images/event.png'
import scheduler from '../images/scheduler.png'
import textEditor from '../images/textEditor.png'

export default function Portfolio () {
    const projects = [
        {
            title: 'E-Commerce Shop',
            image: eCommerce,
            body: "This e-commerce shop is a basic e-commerce website where the user can browse through the store's products, add them to their cart, checkout and purchase the items in their cart. My plan for this website is to continue to work on it to add more features, clean up and improve the presentation of the website, and overall improve my skills and knowledge of web development. This application was made in 2 weeks by myself.",
            tech: "Technologies: MERN Stack, GraphQL, Apollo, JSON Web Token, Stripe",
            app: "https://cryptic-reaches-14388.herokuapp.com/",
            github: "https://github.com/brodie02/mern-ecommerce-website"
        },
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
            body: "This Weather Dashboard collects data from the OpenWeather API depending on what city the user inputs. Th application will then present the current temperature, wind speed, humidity and UV index. It will also show the weather for the next 5 days. This application was made in 1 week by myself",
            tech: "Technologies: JavaScript, HTML, CSS, OpenWeather API",
            app: "https://brodie02.github.io/weather-dashboard/",
            github: "https://github.com/brodie02/weather-dashboard"
        },
        {
            title: 'Workout Tracker',
            image: workout,
            body: "This Workout Tracker saves the user's exercises and sets of those exercises to the database. This data will be available at anytime as the application features a signup/login system so the user's exercises are safe with them. This application was made in 2 weeks by a group of 3. My role in this project was to code/manage the back-end of the application.",
            tech: "Technologies: JavaScript, Node.js, Handlebars, Sequelize, MySQL, Express, HTML, CSS",
            app: "https://ancient-eyrie-19788.herokuapp.com/",
            github: "https://github.com/brodie02/workout-tracker"
        },
        {
            title: 'Event Tracker',
            image: event,
            body: "Event Tracker allows the user to input a destination which then returns a list of events happening in that city. It also features a exchange rate system. This application was made in 2 weeks by a group of 3. My role in this project was to code and find the API's used in this project.",
            tech: "Technologies: JavaScript, HTML, CSS, Materialize, TicketMaster API, Exchange Rate API",
            app: "https://jasminshea.github.io/PlanTravel/",
            github: "https://github.com/jasminshea/PlanTravel"
        },
        {
            title: 'Work Day Scheduler',
            image: scheduler,
            body: "This Work Day Scheduler allows the user to plan out their day by inputting text into each hour block. This is saved via local storage. This application was made in 1 week by myself.",
            tech: "Technologies: JavaScript, HTML, CSS, Bootstrap, Jquery",
            app: "https://brodie02.github.io/bootcamp-challenge5/",
            github: "https://github.com/brodie02/bootcamp-challenge5"
        },
        {
            title: 'Text Editor',
            image: textEditor,
            body: "This application is a text editor which has the features of a progressive web application. This application was made in 1 week by myself.",
            tech: "Technologies: JavaScript, Node.js, Progressive Web Application, Express, HTML, CSS",
            app: "https://mighty-castle-93411.herokuapp.com/",
            github: "https://github.com/brodie02/text-editor"
        },
    ]

    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            {projects.map(project => (
                <Project title={project.title} image={project.image} body={project.body} tech={project.tech} app={project.app} github={project.github}/>
            ))}
        </div>
    )
}