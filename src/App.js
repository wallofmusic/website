
import './App.css';
import {Router, Link, navigate} from '@reach/router';
import HomeView from './Views/HomeView';
import Developer from './Views/Developer';
import Musician from './Views/Musician';
import Photography from './Views/photography2';
import MUSICPHOTOS from './Views/musicPhotos2';
import PetPhotos from './Views/petPhotos2';
import PortraitPhotos from './Views/portraitPhotos2';
import SeattlePhotos from './Views/seattlePhotos2';
import NaturePhotos from './Views/naturePhotos2';
import TravelPhotos from './Views/travelPhotos2';
import { SpotifyApiContext, Artist } from 'react-spotify-api';

function App() {
  return (
    <SpotifyApiContext.Provider value={'BQAy86uEic0nTPTmqBtJm6GXCP-ZXmBrAFGaS6uLl3K1V2oqriN2RdqEbh00K4SLPTtnc3jTFwlsl0M1Ut0j8Vji6RUmpa8NuunZF-M8u-6OghcqBgiEtDkap0vwlE4GKEnuShMxX-rN2A'}>
    <div className="App">
      <div className='MainHeader'>
        <nav>
        <Link to='/' className="WebHeader">David Wall</Link>
        </nav>
        <h4>Developer|Musician|Photographer|Creative</h4>
    
        <nav className='WebHeader2' >
          <Link to='/developer' className='devLink'>Developer Projects</Link> | <Link to='/photographer' className='photoLink'>Photography</Link> | <Link to="/musician" className='musicLink'>Music</Link>
          
        </nav>
        </div>
        
        <Router>

          <HomeView path='/'/>
          <Developer path='/developer'/>
          <Musician path='/musician'/>
          <Photography path='/photographer'/>
          <MUSICPHOTOS path='/photographer/music'/>
          <PetPhotos path='/photographer/pets'/>
          <PortraitPhotos path='/photographer/portraits'/>
          <NaturePhotos path='/photographer/nature'/>
          <SeattlePhotos path='/photographer/seattle'/>
          <TravelPhotos path='/photographer/travel'/>
        </Router>
    
    </div>
    </SpotifyApiContext.Provider>
  );
}

export default App;


