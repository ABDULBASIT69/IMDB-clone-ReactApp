import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import Movie from './pages/movieDetail/Movie'
import MovieList from './components/movielist/MovieList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='movie/:id' element={ <Movie /> } />
          <Route path='movies/:type' element={<MovieList />} />
          <Route path='/*' element={<h1>Error Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
