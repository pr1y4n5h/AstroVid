import axios from "axios";
import { toastFailText } from "../../Components/toast";

export async function deletePlaylist(
  playlistId,
  dispatchPlaylist,
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
      `https://AstroVids-Backend.pr1y4n5h.repl.co/playlists/${playlistId}`,
      { headers: { authorization: token } }
    );

    if(status === 200) {
      dispatchPlaylist({ type: "DELETE_PLAYLIST", payload: playlist });
      toastFailText("Playlist Deleted!");
    }
  } catch (err) {
    console.log(err);
  }
}
