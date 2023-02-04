import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
    return (
        <div className='footer'>
            <ul>
                <li><a href='https://github.com/brodie02'><GitHubIcon fontSize='large'/></a></li>
                <li><a href='https://www.linkedin.com/in/brodie-marshall-24059a264/'><LinkedInIcon fontSize='large'/></a></li>
                <li><a href="mailto: marshallbrodie0@gmail.com"><MailIcon fontSize='large'/></a></li>
            </ul>
        </div>
    )
}