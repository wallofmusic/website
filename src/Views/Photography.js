import React, { useState, useEffect } from 'react'; 
import {Router, Link, navigate} from '@reach/router';
import boatworker from '../images/WebsitePhotos/Portfolio/24.jpg';
import beachwoman from '../images/WebsitePhotos/Portfolio/20.jpg';
import marcandres from '../images/WebsitePhotos/Portfolio/22.jpg';
import neowise from '../images/WebsitePhotos/Portfolio/21.jpg';
import minervaBW from '../images/WebsitePhotos/Animals/1.jpg';
import china from '../images/WebsitePhotos/Portfolio/1.jpg';
import springSt from '../images/WebsitePhotos/Portfolio/25.jpg';
import heron from '../images/WebsitePhotos/Portfolio/6.jpg';
import minervaEyes from '../images/WebsitePhotos/Portfolio/8.jpg';
import onGreenlake from '../images/WebsitePhotos/Portfolio/9.jpg';
import foggy from '../images/WebsitePhotos/Portfolio/10.jpg';
import foggyDock from '../images/WebsitePhotos/Portfolio/11.jpg';
import snowGazebo from '../images/WebsitePhotos/Portfolio/12.jpg';
import snowBug from '../images/WebsitePhotos/Portfolio/13.jpg';
import snowChurch from '../images/WebsitePhotos/Portfolio/14.jpg';
import spirals from '../images/WebsitePhotos/Portfolio/15.jpg';
import forbiddenCityWalls from '../images/WebsitePhotos/Portfolio/18.jpg';
import mikeElyseRing from '../images/WebsitePhotos/People/3.jpg';
import boat from '../images/WebsitePhotos/Portfolio/boat.jpg';
import constructionworkers from '../images/WebsitePhotos/Portfolio/constructionworkers.jpg';
import pugetsound from '../images/WebsitePhotos/Portfolio/pugetSound.jpg';
import katrinaonthebeach from '../images/WebsitePhotos/Portfolio/katrinaonthebeach.jpg';
import flowers from '../images/WebsitePhotos/Portfolio/26.jpg';
import katrinaheadshot from '../images/WebsitePhotos/Portfolio/katrinaheadshot.jpg';
import headbang from '../images/WebsitePhotos/Portfolio/headbang.jpg';
import fistpump from '../images/WebsitePhotos/Portfolio/fistpump.jpg';
import chinaBW1 from '../images/WebsitePhotos/Portfolio/chinaBW1.jpg';
import MUSICPHOTOS from '../Views/musicPhotos';
import '../App.css';

export default function Gallery() {


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
        <div className='photoPage'>
                <div className='row'>
                        <div className='column'>
                                <img src={boatworker} alt='boatworker'></img>
                                <img src={marcandres}alt='marcandres'></img>
                                <img src={beachwoman}alt='beachwoman'></img>
                                <img src={neowise}alt='neowise'></img>
                                <img src={minervaBW}alt='minervaBW'></img>
                                <img src={foggy}alt='foggy'></img>
                                <img src={snowBug}alt='snowBug'></img>
                        </div>
                        <div className='column'>
                                <img src={heron}alt='heron'></img>
                                <img src={china}alt='china'></img>
                                <img src={springSt}alt='springSt'></img>
                                <img src={chinaBW1}alt='chinaBW1'></img>
                                <img src={minervaEyes}alt='minervaEyes'></img>
                                <img src={onGreenlake}alt='onGreenLake'></img>
                                <img src={pugetsound}alt='pugetsound'></img>
                                <img src={katrinaonthebeach}alt='katrinaonthebeach'></img>
                                <img src={headbang}alt='headbang'></img>
                                <img src={foggyDock}alt='foggyDock'></img>
                                <img src={snowGazebo}alt='snowGazebo'></img>
                        </div>
                        <div className='column'>
                                <img src={boat}alt='boat'></img>
                                <img src={flowers}alt='flowers'></img>
                                <img src={forbiddenCityWalls}alt='forbiddenCityWalls'></img>
                                <img src={snowChurch}alt='snowChurch'></img>
                                <img src={fistpump}alt='fistpump'></img>
                                <img src={katrinaheadshot}alt='katrinaheadshot'></img>
                                <img src={spirals}alt='spirals'></img>
                                <img src={mikeElyseRing}alt='mikeElyseRing'></img>
                                <img src={constructionworkers}alt='constructionworkers'></img>
                                
                        </div>         
                </div>
        </div>
        </>
);
}


