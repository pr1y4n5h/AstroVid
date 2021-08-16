import axios from "axios";
import { toastSuccessText } from "../../Components/toast";

export async function addWatchlist(videoData, dispatchWatchlist, token) {
  try {
    const {
      status,
      data: {
        success,
        watchlistData: { videos },
      },
    } = await axios.post(
      `https://AstroVids-Backend.pr1y4n5h.repl.co/watchlater`,
      {
        videos: videoData,
      },
      { headers: { authorization: token } }
    );

    if (success === true && status === 201) {
      dispatchWatchlist({ type: "ADD_TO_WATCHLIST", payload: videos });
      toastSuccessText("Added to Watchlist");
    }
  } catch (error) {
    console.log(error.message);
  }
}
