import axios from "axios";
import { toastSuccessText } from "../../Components/toast";

export async function createPlaylist(text, dispatchPlaylist, token)   {

  try {
    const { 
      status,
      data: {
        success,
        playlistData: { playlist },
      },
    } = await axios.post("https://AstroVids-Backend.pr1y4n5h.repl.co/playlists/", {
      playlist: {
        name: text,
        list: []
      },
    }, { headers: { authorization: token } });

    if (status === 201 && success === true) {
      dispatchPlaylist({ type: "CREATE_PLAYLIST", payload: playlist });
      toastSuccessText("Playlist Created!");
    }
  } catch (err) {
    console.log(err);
  }
}
