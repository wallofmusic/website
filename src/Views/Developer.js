import React,{ useState } from 'react';
import {Router, Link, navigate} from '@reach/router';
import ResumeComponent from '../Components/ResumeComponent';
import Resume from '../images/DavidWallResume.jpg';
import barHopper from '../Components/barhopping';
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
        <div onClick={noResume}>
            <button onClick={displayResume} className="Resumebutton" >My Resume</button>
            {
                isResume ?
                <img src={Resume} alt="resume" className="resume"/>
                :
                ''
            }
        </div>
        <div className='barhopperlink'>
            <a href='https://master.d39bj68r0o14nj.amplifyapp.com/'>Play BarHopper!</a>
            <img src={screenshot} width='20%'></img>
        </div>
        </>
    )
}

export default Developer
