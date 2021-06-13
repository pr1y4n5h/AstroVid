import './App.css';
import { Movie } from "./Components/Videos"
import {useFetchVideos} from "./useFetchVideos";
import {useVideosContext} from "./videos-context";
import { MyLoader } from "./Components/Loader"



// const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

export function VideosPage() {
  // const [movies, setMovies] = useState([]);
  
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await axios.get(FEATURED_API)
  //       console.log(response);
  //       setMovies(response.data.results)
  //     }
  //     catch (e) {
  //       console.log("The error is ", e);
  //     }
  //   })();
  //   }, []);

  useFetchVideos();
  
  const { videos, videoFilter, loader } = useVideosContext();

  const filterByCategory = (videos, videofilter) => {
    if (videofilter === "all") {
      return videos;
    } else {
      return videos.filter((item) => item.category === videofilter);
    }
  };

  const filteredItems = filterByCategory(videos, videoFilter);
  
  return (
    <div>    
    <div id="page-wrap">
    <div className="videos-container"> 
    {loader && <MyLoader />}
    { filteredItems.map(item => <Movie key={item._id} videos={item} />)
    }
    </div>
    </div>
    </div>
  );
}
