import axios from "axios";
import { toastFailText } from "../../Components/toast";

export async function removeWatchlist(videoId, dispatchWatchlist, token) {

  try {
    const {
      status,
      data: {
        success,
      }
    } = await axios.delete(`https://AstroVids-Backend.pr1y4n5h.repl.co/watchlater/${videoId}`, { headers: { authorization: token } });

    if (status === 200 && success === true) {
      dispatchWatchlist({ type: "REMOVE_FROM_WATCHLIST", payload: videoId });
      toastFailText("Removed from Watch Later!");
    }
  } catch (error) {
    console.log(error);
  }
}
