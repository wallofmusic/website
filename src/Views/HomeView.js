import React from 'react'
import TopicComponent1 from '../Components/TopicComponent1';
import TopicComponent2 from '../Components/TopicComponent2';
import TopicComponent3 from '../Components/TopicComponent3';
import photo from '../images/WebsitePhotos/Portfolio/selfportrait.jpg';
import LogoLink from '../Components/LogoLink';

const HomeView = () => {
    return (
        <div className="grid-container">
            <div className="Main">
                <img src={photo}  className='MainPhoto'></img>
                <p className='AboutMe'>A native of Southern California, David grew up heavily involved in the arts - playing saxophone, flute and 
                                        bassoon. During High School, David played in several ensembles, sang in Chambers Singers, played varsity tennis, and 
                                        competed on the Academic Decathlon team, winning several medals at the County level. After graduating high school in 2007, David attended Riverside Community College 
                                        where he studied jazz saxophone with Charlie Richards and bassoon with Crystal Duffy née Parker. 
                                        In 2009, David left RCC to help write and record an album with his band, A Billion Ernies, before taking 
                                        it on 2 two-month tours around the United States. Following his return from tour, David moved to Seattle, 
                                        where he became heavily involved in the classical music scene and photography. David eventually got his 
                                        degree in music at the University of Washington in 2018, studying bassoon with Seth Krimsky, principal bassoonist for the Seattle Symphony. He has been principal bassoon for the Puget Sound
                                        Symphony Orchestra for 7 years and plays regularly with other groups in Seattle. As a photographer, David's clients
                                        include the Seattle Rock Orchestra, the University of Washington Wind Ensemble, Orchestra Seattle and Seattle Chambers Singers,
                                        as well as various individuals. Most recently, David completed a certificate in Full-Stack Web Development through
                                        Coding Dojo. 
                                        </p>
                <LogoLink className="logos"/>
                
            </div>
        </div>
    )
}

export default HomeView
