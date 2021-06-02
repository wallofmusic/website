import { useArtist, Artist } from 'react-spotify-api';
import React, {useEffect} from 'react';
import axios from 'axios';



const Musician = (props) => {
    const { data, loading, error } = useArtist('28eNxtn09ZVxAI23Pzpe4U');
    
    useEffect(()=>(
        axios.get('https://api.spotify.com/v1/artists/{28eNxtn09ZVxAI23Pzpe4U}/albums')
            .then(response => console.log(response.data.results))
            .catch(error => console.log(error))
    ))

  return (
    <div>
      <h1>Music!</h1>
    <Artist id={'28eNxtn09ZVxAI23Pzpe4U'}>
    {({ data, loading, error }) =>
      data ? (
        <div>
          <h1>{data.name}</h1>
          <ul>
            {data.genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ) : null
    }
  </Artist>
  </div>
  )
}

export default Musician
