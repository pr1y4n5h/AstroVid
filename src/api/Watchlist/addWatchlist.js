import axios from "axios";
import { toastText } from "../../utils/toast";

export async function addWatchlist(watchlistId, videoData, dispatchWatchlist) {
    try {
        const {
            status,
            data: {
                success,
                watchlistData: {
                    _id: watchlist_id,
                    videos
                } 
                }
        } = await axios.post(
            watchlistId === null ? "https://astrovids-backend.pr1y4n5h.repl.co/watchlist" : `https://astrovids-backend.pr1y4n5h.repl.co/watchlist/${watchlistId}`, {
                videos: videoData
            }
        );

        if(success === true && status === 201) {
            dispatchWatchlist({type: "ADD_TO_WATCHLIST", payload: videos})
            toastText("Added to Watchlist");

            if(watchlistId === null) {
                dispatchWatchlist({type: "SAVE_WATCHLIST_ID", payload: watchlist_id})
            }
        }

    } catch (error) {
        console.log(error.message)
    }   
}