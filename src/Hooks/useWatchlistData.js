import axios from "axios";
import { useEffect } from "react";
import { useWatchlistContext } from "../Contexts/WatchlistContext";
import { useVideosContext } from "../Contexts/VideosContext";

export function useWatchlistData() {
  const { dispatchVideos } = useVideosContext();
  const { dispatchWatchlist, watchlist, watchlistId } = useWatchlistContext();

  async function fetchData() {
    dispatchVideos("SET_LOADER");
    try {
      const {
        status,
        data: {
          watchlistData: { videos },
          success,
        },
      } = await axios.get(
        `https://astrovids-backend.pr1y4n5h.repl.co/watchlist/${watchlistId}`
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
    if (watchlistId !== null && watchlist.length === 0) {
      fetchData();
    }
  }, [watchlistId]);
}
