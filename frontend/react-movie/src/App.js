import React, {useEffect} from 'react';
import './App.css';

function App() {
  
  useEffect(()=>{
    fetch('/api/all_movies').then(response =>
      response.json().then(data => {
        console.log(data);
      }))
  },[])
  
  
  
  return (
    <div className="App">
      HOla bebeeee
    </div>
  );
}

export default App;
