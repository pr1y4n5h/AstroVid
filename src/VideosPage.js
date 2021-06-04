import './App.css';
import { Movie } from "./Components/Videos"
import { useEffect, useState } from 'react';
import axios from 'axios';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

export function VideosPage() {
  const [movies, setMovies] = useState([]);
  
  // useEffect(() => {
  //   (async function () {
  //     try {0
  //       const response = await axios.get(FEATURED_API)
  //       console.log(response);
  //       setMovies(response)
  //     }
  //     catch (e) {
  //       console.log("The error is ", e);
  //     }
  //   })();
  //   }, []);

  useEffect(() => {
        fetch(FEATURED_API)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        });
    }, []);

  return (
    <div>

    
    <div id="page-wrap">
    <div className="movie-container"> 
    { movies.length > 0 &&
      movies.map(item => <Movie key={item.id} {...item} />)
    }
    </div>
    </div>
    </div>
  );
}
