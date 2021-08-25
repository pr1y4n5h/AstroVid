import axios from "axios";
import { useEffect } from "react";
import { useWatchlistContext } from "../Contexts/WatchlistContext";
import { useVideosContext } from "../Contexts/VideosContext";
import { useAuth } from "../Contexts/AuthContext";

export function useWatchLaterData() {
  const { dispatchVideos } = useVideosContext();
  const { dispatchWatchlist, watchlist } = useWatchlistContext();
 
  const { token, loggedUser } = useAuth();

  async function fetchData() {
    dispatchVideos({ type: "SET_LOADER" });
    try {
      const {
        status,
        data: {
          watchlistData: { videos },
          success,
        },
      } = await axios.get(
        `https://astrovids-backend.pr1y4n5h.repl.co/watchlater/`,
        { headers: { authorization: token } }
      );

      if (success === true && status === 200) {
        dispatchWatchlist({
          type: "ADD_TO_WATCHLIST",
          payload: videos,
        });
      }
    } catch (err) {
      console.log(err.stack);
    } finally {
      dispatchVideos({ type: "SET_LOADER" });
    }
  }

  useEffect(() => {
    if (token && watchlist.length === 0) {
      fetchData();
    }
  }, [token, loggedUser]);
}
