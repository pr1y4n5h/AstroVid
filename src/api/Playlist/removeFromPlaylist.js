import axios from "axios";
import { toastFailText } from "../../Components/toast";

export async function removeFromPlaylist(
  playlistId,
  dispatchPlaylist,
  videoId,
  token
) {
  try {
    const {
      status,
      data: {
        success,
        playlistData: { playlist },
      },
    } = await axios.delete(
      `https://AstroVids-Backend.pr1y4n5h.repl.co/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } }
    );

    if (status === 201 && success === true) {
      dispatchPlaylist({ type: "REMOVE_FROM_PLAYLIST", payload: playlist });
      toastFailText("Video Removed from Playlist!");
    }
  } catch (err) {
    console.log(err);
  }
}
