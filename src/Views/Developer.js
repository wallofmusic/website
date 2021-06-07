import React,{ useState } from 'react';
import {Router, Link, navigate} from '@reach/router';
import ResumeComponent from '../Components/ResumeComponent';
import Resume from '../images/DavidResume6.6.jpg';

import screenshot from '../images/barhopperphoto.jpg';

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
        <h2 className="subHeader">Developer Projects</h2>
        <div className='developerPage'>
            <div onClick={noResume}>
                <button onClick={displayResume} className="Resumebutton" >My Resume</button>
                {
                    isResume ?
                    <img src={Resume} alt="resume" className="resume"/>
                    :
                    ''
                }
            </div>
            <div className='barhopperDiv'>
                <a href='https://master.d39bj68r0o14nj.amplifyapp.com/' className='barhopperLink'>Play BarHopper!</a>
                <p className='barhopperDesc'>Try to drink all the beverages by navigating your character with the arrow keys (Desktop only, for now)</p>
                <img src={screenshot} className='barhopperScreenShot'></img>
            </div>
        </div>
        </>
    )
}

export default Developer
