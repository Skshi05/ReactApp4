import React,{useState} from 'react'

export default function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const handlesearch = async() =>{
        const API_KEY = "49389ab4";
        let url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
        try{
          let response = await fetch(url);
          let data = await response.json();
          console.log(data);
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
  return (
    <>
    <div  className="search-bar">
    <input type="text" value={searchTerm} placeholder="search here" onChange={(e)=>setSearchTerm(e.target.value)}></input>
    <button onClick={handlesearch} >
        Search
      </button>
    </div>
    <div className="searchResult">
    {movies.map((movie) => (
        <div className="card" key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <div className="card-content">
            <h2 className="card-title">{movie.Title}</h2>
            <div className="para">
              <p>Type: {movie.Type}</p>
              <p>Year: {movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    
        
  
    </>
  )
}
