import '../App.css';
import { useWatchlistContext } from "../Contexts/WatchlistContext";
import { useWatchlistData } from "../Hooks/useWatchlistData"
import {useVideosContext} from "../Contexts/VideosContext";
import { MyLoader } from "../Components/Loader";
import {WatchLater} from "../Components/WatchLater"

export function WatchLaterPage() {

    const { loader } = useVideosContext();
    const { watchlist } = useWatchlistContext();

    useWatchlistData();

    return (
        <div>
        <div id="page-wrap">
        
        {/* {loader && <MyLoader /> } */}

        <div className="videos-container">

        {
            watchlist.length > 0 ? watchlist.map(item => (
                <WatchLater key={item._id} watchlaterData={item} />
            )) : <h1> The watchlist is Empty</h1>
        }

        </div>
        </div>
        </div>
    )
}