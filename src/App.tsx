
import { useEffect } from 'react';
import './App.css'
import FetchingData from './store/createasyncawait';

function App() {
  fetch(`https://api.themoviedb.org/3/movie/6/videos`, {
    method: 'GET',
    headers: {
      

      'Authorization': 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzczMGFjODY4NzM0N2I3OWZjMzIyOWM5ZTYzNTdjMSIsIm5iZiI6MTczNzEyNTQyMy4yMiwic3ViIjoiNjc4YTZlMmY5M2Y3NDJjYzI5YWQxNWRiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uTuDN7o4wGtgLtQzpf_Ijlm8-QqscVMBOOv_TQNnfoI'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    useEffect(()=>{

    })
return(
  <div>
    this is App paelkwrMfmgee
  </div>
)
}

export default App
