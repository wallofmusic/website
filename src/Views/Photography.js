import React, { useState, useEffect } from 'react'; 

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
import headbang from '../images/WebsitePhotos/Portfolio/headbang.jpeg';
import fistpump from '../images/WebsitePhotos/Portfolio/fistpump.jpeg';
import chinaBW1 from '../images/WebsitePhotos/Portfolio/chinaBW1.jpeg';
import '../App.css';

export default function Gallery() {
     
    
return (
        <div className='photoPage'>
                <div className='row'>
                        <div className='column'>
                                <img src={boatworker}></img>
                                <img src={beachwoman} className='horizontal'></img>
                                <img src={marcandres}></img>
                                <img src={neowise}></img>
                                <img src={minervaBW}></img>
                                <img src={china}></img>
                                <img src={foggy}></img>
                                <img src={snowBug}></img>
                                
                        </div>
                        <div className='column'>
                                
                                <img src={heron}></img>
                                <img src={springSt}></img>
                                <img src={minervaEyes}></img>
                                <img src={chinaBW1}></img>
                                <img src={onGreenlake}></img>
                                <img src={pugetsound}></img>
                                <img src={katrinaonthebeach}></img>
                                <img src={headbang}></img>
                                <img src={foggyDock}></img>
                                <img src={snowGazebo}></img>
                                
                        </div>
                        <div className='column'>
                                <img src={boat}></img>
                                <img src={flowers}></img>
                                <img src={snowChurch}></img>
                                <img src={fistpump}></img>
                                <img src={katrinaheadshot}></img>
                                <img src={spirals}></img>
                                <img src={forbiddenCityWalls}></img>
                                <img src={mikeElyseRing}></img>
                                <img src={constructionworkers}></img>
                                
                        </div>         
                </div>
        </div>
);
}


