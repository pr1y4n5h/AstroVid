import "./VideosPage.style.css";
import { VideoCard } from "../../Components/Cards/Videos";
import { useFetchVideos } from "../../Hooks/useFetchVideos";
import { useVideosContext } from "../../Contexts/VideosContext";
import { MyLoader } from "../../Components/Loader/Loader";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import { useEffect } from "react";

export function VideosPage() {
  
  useFetchVideos();

  const { videos, loader } = useVideosContext();
  const {playlistModal, dispatchPlaylist} = usePlaylist();

  useEffect(() => {
    if(playlistModal.status) {
      dispatchPlaylist({type: "SHOW_PLAYLIST"})
    }
  },[])

  return (
    <div>
        {loader && <MyLoader />}
        <div className="videos-container">
          {videos.map((item) => (
            <VideoCard key={item._id} videos={item} />
          ))}
        </div>
    </div>
  );
}
