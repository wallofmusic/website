import React from 'react';
import {Router, Link, navigate} from '@reach/router';
import photo1 from '../images/WebsitePhotos/People/1.jpg';
import photo2 from '../images/WebsitePhotos/People/2.jpg';
import photo3 from '../images/WebsitePhotos/People/3.jpg';
import photo4 from '../images/WebsitePhotos/People/4.jpg';
import photo5 from '../images/WebsitePhotos/People/5.jpg';
import photo6 from '../images/WebsitePhotos/People/6.jpg';
import photo7 from '../images/WebsitePhotos/People/7.jpg';
import photo8 from '../images/WebsitePhotos/People/8.jpg';
import photo9 from '../images/WebsitePhotos/People/9.jpg';
import photo10 from '../images/WebsitePhotos/People/10.jpg';
import photo11 from '../images/WebsitePhotos/People/11.jpg';
import photo12 from '../images/WebsitePhotos/People/12.jpg';
import photo13 from '../images/WebsitePhotos/People/13.jpg';
import photo14 from '../images/WebsitePhotos/People/14.jpg';
import photo15 from '../images/WebsitePhotos/People/15.jpg';
import photo16 from '../images/WebsitePhotos/People/16.jpg';
import photo17 from '../images/WebsitePhotos/People/17.jpg';
import photo18 from '../images/WebsitePhotos/People/18.jpg';
import photo19 from '../images/WebsitePhotos/People/19.jpg';
import photo20 from '../images/WebsitePhotos/People/20.jpg';
import photo21 from '../images/WebsitePhotos/People/21.jpg';
import photo22 from '../images/WebsitePhotos/People/22.jpg';
import photo23 from '../images/WebsitePhotos/People/23.jpg';
import photo24 from '../images/WebsitePhotos/People/24.jpg';



export default function portraitPhotos() {
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
                <div className='portraitPhotoPage'>
                        <div className='row'>
                                <div className='column'>
                                        <img src={photo1} alt='photo1'></img>
                                        <img src={photo2} alt='photo2'></img>
                                        <img src={photo3} alt='photo3'></img>
                                        <img src={photo4} alt='photo4'></img>
                                        <img src={photo5} alt='photo5'></img>
                                        <img src={photo19} alt='photo19'></img>
                                        <img src={photo22} alt='photo22'></img>
                                        <img src={photo6} alt='photo6'></img>
                                </div>
                                <div className='column'>
                                        <img src={photo7}alt='photo7'></img>
                                        <img src={photo8}alt='photo8'></img>
                                        <img src={photo9}alt='photo9'></img>
                                        <img src={photo10}alt='photo10'></img>
                                        <img src={photo11}alt='photo11'></img>
                                        <img src={photo12}alt='photo12'></img>
                                        <img src={photo20}alt='photo20'></img>
                                        <img src={photo23}alt='photo23'></img>
                                        
                                </div>
                                <div className='column'>
                                        <img src={photo13}alt='photo13'></img>
                                        <img src={photo14}alt='photo14'></img>
                                        <img src={photo15}alt='photo15'></img>
                                        <img src={photo16}alt='photo16'></img>
                                        <img src={photo17}alt='photo17'></img>
                                        <img src={photo18}alt='photo18'></img>
                                        <img src={photo21}alt='photo21'></img>
                                        <img src={photo24}alt='photo24'></img>

                                </div>         
                        </div>
                </div>
        </>
    )
}