import React from 'react'

import resume from '../images/DavidResume6.6.jpg';

const ResumeComponent = () => {
    return (
        <div>
            <img src={resume} alt={"myResume"} className="resume"/>
        </div>
    )
}

export default ResumeComponent
