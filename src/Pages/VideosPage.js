import '../App.css';
import { Movie } from "../Components/Videos"
import {useFetchVideos} from "../Hooks/useFetchVideos";
import {useVideosContext} from "../Contexts/VideosContext";
import { MyLoader } from "../Components/Loader"

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
