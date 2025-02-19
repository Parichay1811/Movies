
import './App.css'
import {movies} from './data/movies'

function App() {
  
  return (
    <div className="app">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie}/>
      ))}
    </div>
  );
}

export default App
