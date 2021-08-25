import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useVideosContext } from "../Contexts/VideosContext";

export const useUserPlaylist = (playlistId) => {
  const [playlist, setPlaylist] = useState();
  const { dispatchVideos } = useVideosContext();

  const { token } = useAuth(); 

  async function fetchData() {
    dispatchVideos({ type: "SET_LOADER" }); 
    try {
      const { data, status } = await axios.get(
        `https://astrovids-backend.pr1y4n5h.repl.co/playlists/${playlistId}`,
        { headers: { authorization: token } }
      );

      if (status === 200) {
        setPlaylist(data.playlistData.playlist);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatchVideos({ type: "SET_LOADER" });
    }
  }

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  return playlist;
};
