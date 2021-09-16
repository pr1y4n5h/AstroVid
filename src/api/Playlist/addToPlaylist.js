import axios from "axios";
import { toastSuccessText } from "../../Components/toast";

export async function addToPlaylist(
  playlistId,
  dispatchPlaylist,
  video,
  token
) {
  try {
    const {
      status,
      data: {
        success,
        playlistData: { playlist },
      },
    } = await axios.post(
      `https://AstroVids-Backend.pr1y4n5h.repl.co/playlists/${playlistId}`,
      {
        videos: video,
      },
      { headers: { authorization: token } }
    );

    if (status === 201 && success === true) {
      dispatchPlaylist({ type: "ADD_TO_PLAYLIST", payload: playlist });
      toastSuccessText("Video Added to Playlist!");
    }
  } catch (err) {
    console.log(err);
  }
}
