import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    fetch('/api/all_movies').then(response =>
      response.json().then(data => {
        console.log(data.movies);
      }))
  },[]);
  
  console.log(movies);
  return (
    <div className="App">
      HOla bebeeee
    </div>
  );
}

export default App;
