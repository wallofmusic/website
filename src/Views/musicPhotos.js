import React from 'react';
import {Router, Link, navigate} from '@reach/router';
import photo1 from '../images/WebsitePhotos/Music/1.jpg';
import photo2 from '../images/WebsitePhotos/Music/2.jpg';
import photo3 from '../images/WebsitePhotos/Music/3.jpg';
import photo4 from '../images/WebsitePhotos/Music/4.jpg';
import photo5 from '../images/WebsitePhotos/Music/5.jpg';
import photo6 from '../images/WebsitePhotos/Music/6.jpg';
import photo7 from '../images/WebsitePhotos/Music/7.jpg';
import photo8 from '../images/WebsitePhotos/Music/8.jpg';
import photo9 from '../images/WebsitePhotos/Music/9.jpg';
import photo10 from '../images/WebsitePhotos/Music/10.jpg';
import photo11 from '../images/WebsitePhotos/Music/11.jpg';
import fistpumpcopy from '../images/WebsitePhotos/Music/fistpumpcopy.jpg';
import headbangcopy from '../images/WebsitePhotos/Music/headbangcopy.jpg';
import kimconducting from '../images/WebsitePhotos/Music/kimconducting.jpg';

export default function MUSICPHOTOS() {
    
return (
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
        <div className='musicPhotoPage'>
                <div className='row'>
                        <div className='column'>
                                <img src={photo1} alt='photo1'></img>
                                <img src={headbangcopy}alt='headbangcopy'></img>
                                <img src={photo2}alt='phto2'></img>
                                <img src={photo3}alt='photo3'></img>
                                <img src={photo4}alt='photo4'></img>
                                
                        </div>
                        <div className='column'>
                                <img src={photo5}alt='photo5'></img>
                                <img src={photo6}alt='photo6'></img>
                                <img src={photo7}alt='photo7'></img>
                                <img src={photo8}alt='photo8'></img>
                        </div>
                        <div className='column'>
                                <img src={photo9}alt='photo9'></img>
                                <img src={photo10}alt='photo10'></img>
                                <img src={photo11}alt='photo11'></img>
                                <img src={kimconducting}alt='kimconducting'></img>
                                <img src={fistpumpcopy}alt='fistpumpcopy'></img>
                        </div>         
                </div>
        </div>
    </>
);
}