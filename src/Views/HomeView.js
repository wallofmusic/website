import React from 'react'

import photo from '../images/PhotosForWebsite/mainMe.jpg';
import LogoLink from '../Components/LogoLink';

const HomeView = () => {
    return (
        <>
        <div className="grid-container">
            <div className="Main">
                <img src={photo}  className='MainPhoto'></img>
                <p className='AboutMe'>A native of Southern California, David grew up heavily involved in the arts - playing saxophone, flute and 
                                        bassoon. During High School, David played in several ensembles, sang in Chambers Singers, played varsity tennis, and 
                                        competed on the Academic Decathlon team, winning several medals and helping the team win at the County level. After graduating high school in 2007, David attended Riverside Community College 
                                        where he studied jazz saxophone with Charlie Richards and bassoon with Crystal Duffy née Parker. 
                                        In 2009, David left RCC for Seattle to help write and record an album with his band, A Billion Ernies, before taking 
                                        it on 2 two-month tours around the United States. Following his return from tour, David moved to Seattle, 
                                        where he became heavily involved in the classical music scene and photography, and was a music volunteer at Seattle Children's Hospital. David eventually earned a BA in music from the University
                                        of Washington where he studied bassoon with Seth Krimsky, principal bassoonist for the Seattle Symphony. During his time there,
                                        David also taught intermediate tennis.
                                        He has been principal bassoon for the Puget Sound
                                        Symphony Orchestra for 7 years and plays regularly with other groups in Seattle. As a photographer, David's clients
                                        have included the Seattle Rock Orchestra, the University of Washington Wind Ensemble, Orchestra Seattle and Seattle Chambers Singers,
                                        as well as various individuals. Most recently, David completed a certificate in Full-Stack Web Development through
                                        Coding Dojo and looks forward to a career in the tech industry.
                                        </p>
            </div>
        </div>
        <div className='logoPlacement'>
            <LogoLink className="logos" />
        </div>
        <div className="blurbSection">
        <div className='photoBlurb'>
            <h3>On Photography:</h3>
            <p>Being a creative and artistic person, yet with very little innate skill with drawing, photography was a natural
                avenue for me to explore the beauty of the world around me. Looking at the world through a camera makes you realize 
                how interesting even seemingly mundane things can be.
            </p>
        </div>
        <div className='devBlurb'>
            <h3>On Programming:</h3>
            <p>As someone who has always been interested in the sciences and taken a decent amount of calculus and physics classes, part of me is drawn 
                to programming for the creative problem solving and heavy foray into logic. While there are many ways to solve a problem in programming, 
                I find it satisfying in a similar way that I find math satisfying, i.e. following certain steps to obtain a concrete result, which is not
                something I get from my artistic and musical side.
            </p>
        </div>
        <div className='musicBlurb'>
            <h3>On Music:</h3>
            <p>Music has been one of the most central aspects to my life, both playing and listening to it, and it has many roles in my life. 
                Writing and performing music is a major outlet of emotion, anxiety, and just about any other feeling that is trapped in my brain, as well as being 
                a large social cornerstone. Exploring differing types of music is hugely important to me, as it offers unique perspectives of the world from other musicians, whether 
                it's classical, jazz, rock, choral, folk, or just about any type of music. Music can be historical, educational, encouraging, calming, or just plain fun.
            </p>
        </div>
        </div>
        </>
    )
}

export default HomeView
