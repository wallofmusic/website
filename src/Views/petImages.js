import React from 'react';
import {Router, Link, navigate} from '@reach/router';
import photo1 from '../images/WebsitePhotos/Animals/1.jpg';
import photo2 from '../images/WebsitePhotos/Animals/2.jpg';
import photo3 from '../images/WebsitePhotos/Animals/3.jpg';
import photo4 from '../images/WebsitePhotos/Animals/4.jpg';


export default function petPhotos() {

    return(
        <>
        <div className='subheaderPhotoPage'>
            <nav>
                    <Link to='/photographer' className='portfolioPhotoLink'>Portfolio</Link>
            </nav>
            <nav>
                    <Link to='/photographer/music' className='musicPhotoLink'>Music</Link>
            </nav>
            <nav>
                    <Link to='/photographer/pets' className='petPhotoLink'>Pets</Link>
            </nav>
            <nav>
                    <Link to='/photographer/portraits' className='portraitPhotoLink'>Portraits</Link>
            </nav>
        </div>
        <div className='petPhotoPage'>
                <div className='row'>
                        <div className='column'>
                                <img src={photo1} alt='photo1'></img>
                                <img src={photo2} alt='photo1'></img>
                        </div>
                        <div className='column'>
                                <img src={photo4}alt='photo5'></img>
                                
                        </div>
                        <div className='column'>
                                <img src={photo3}alt='photo9'></img>

                        </div>         
                </div>
        </div>
    </>
    )
}