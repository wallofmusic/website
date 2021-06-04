import React, { useState, useEffect } from "react";
import {Router, Link, navigate} from '@reach/router';
import { seattlePhotos } from "../Components/seattlePhotos";


const Portfolio2 = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(seattlePhotos.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

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
                <nav>
                        <Link to='/photographer/seattle' className='portraitPhotoLink'>Seattle</Link>
                </nav>
                <nav>
                        <Link to='/photographer/nature' className='portraitPhotoLink'>Nature</Link>
                </nav>
                <nav>
                        <Link to='/photographer/travel' className='portraitPhotoLink'>Travel</Link>
                </nav>
        </div>
      <div className={` ${imgsLoaded ? "portfolioImages" : 'loadscreen'}`}>
        {imgsLoaded ? (
          seattlePhotos.map((image) => (
            <img key={image.id} src={image.url} alt="Human" className={image.orientation}/>
          ))
        ) : (
          <div>
              <h1>Preparing awesome photos...bleep blorp</h1>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio2;
