import axios from "axios";
import { toastText } from "../../utils/toast";

export async function removeWatchlist(watchlistId, videoId, dispatchWatchlist) {
    try {
        const {
            status,
            data: { 
                success,
                watchlistData: {
                    _id: watchlist_id
                }
            }
        } = await axios.delete(`https://astrovids-backend.pr1y4n5h.repl.co/watchlist/${watchlistId}/${videoId}`);

        if(status === 200 && success === true) {
            dispatchWatchlist({type: "REMOVE_FROM_WATCHLIST", payload: videoId })
            toastText("Removed from Watch Later!");
        }

    } catch (error) {
        console.log(error.stack);
    }

} 