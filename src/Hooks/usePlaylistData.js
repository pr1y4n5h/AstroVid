import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { usePlaylist } from "../Contexts/PlaylistContext";
import { useVideosContext } from "../Contexts/VideosContext";

export function usePlaylistData() {
  const { dispatchPlaylist, playlist } = usePlaylist();
  const { dispatchVideos } = useVideosContext();
  const { token } = useAuth();

  async function fetchData() {
    dispatchVideos({ type: "SET_LOADER" });

    try {
      const { status, data } = await axios.get(
        `https://astrovids-backend.pr1y4n5h.repl.co/playlists/`,
        { headers: { authorization: token } }
      );

      if (status === 200 && data.success === true) {
        dispatchPlaylist({ type: "ADD_TO_PLAYLIST", payload: data.playlistData.playlist });
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatchVideos({ type: "SET_LOADER" });
    }
  }

  useEffect(() => {
    if (playlist.length === 0 && token) {
      fetchData();
    }
  }, [token]);
}
