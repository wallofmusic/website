import logo from './logo.svg';
import './App.css';
import {Router, Link, navigate} from '@reach/router';
import HomeView from './Views/HomeView';
import Developer from './Views/Developer';
import Musician from './Views/Musician';
import Photography from './Views/Photography';

import { SpotifyApiContext, Artist } from 'react-spotify-api';

function App() {
  // <div classname="subjectLinks">
  //   <nav>
  //     <Link to="developer">Developer Projects</Link> <Link to="musician">Music</Link> 
  //   </nav>
  //   <Router>
  //     <Developer path="developer"/>
  //     <Musician path="musician" />
    
  //   </Router>
  // </div>
  return (
    <SpotifyApiContext.Provider value={'BQAy86uEic0nTPTmqBtJm6GXCP-ZXmBrAFGaS6uLl3K1V2oqriN2RdqEbh00K4SLPTtnc3jTFwlsl0M1Ut0j8Vji6RUmpa8NuunZF-M8u-6OghcqBgiEtDkap0vwlE4GKEnuShMxX-rN2A'}>
    <div className="App">
      <div className='MainHeader'>
        <nav>
        <Link to='/' className="WebHeader">David Wall</Link>
        </nav>
    
        <nav className='WebHeader2' >
          <Link to='/developer'>Developer Projects</Link> | <Link to='/photographer'>Photography</Link> | <Link to="/musician">Music</Link>
          
        </nav>
        </div>
        
        <Router>

          <HomeView path='/'/>
      
          <Musician path='/musician'/>
          <Photography path='/photographer'/>
        </Router>
    
    </div>
    </SpotifyApiContext.Provider>
  );
}

export default App;


