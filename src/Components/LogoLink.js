import React from 'react'
import githublogo from '../images/githublogo.png';
import linkedinlogo from '../images/linkedinlogo.png';

const LogoLink = () => {
    return (
        <div className="logos">
             <a href='https://github.com/wallofmusic' ><img src={githublogo} className="LogoLinks"/></a><a href='https://www.linkedin.com/in/david-wall-a34476123/' ><img src={linkedinlogo} className="LogoLinks"/></a>
        </div>
    )
}

export default LogoLink
