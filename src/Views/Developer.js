import React,{ useState } from 'react';
import {Router, Link, navigate} from '@reach/router';
import ResumeComponent from '../Components/ResumeComponent';
import Resume from '../images/DavidWallDeveloperResume.jpg';
import barHopper from '../Components/barhopping';

const Developer = () => {
    const [isResume, setIsResume] = useState(false)

    const displayResume = e =>{
        e.preventDefault();
        setIsResume(!isResume);
    }

    const noResume = e =>{
        e.preventDefault();
        setIsResume(!isResume);
    }
    return (
        <>
        
        <h2 className="subHeader">Developer</h2>
        <div onClick={noResume}>
            <button onClick={displayResume} className="Resumebutton">My Resume</button>
            {
                isResume ?
                <img src={Resume} alt="resume" className="resume"/>
                :
                ''
            }
        </div>
    
        </>
    )
}

export default Developer
