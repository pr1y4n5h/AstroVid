import './WatchLater.style.css';
import { useWatchlistContext } from "../../Contexts/WatchlistContext";
import {useVideosContext} from "../../Contexts/VideosContext";
import { MyLoader } from "../../Components/Loader/Loader";
import {WatchLater} from "../../Components/Cards/WatchLater";
import { Empty } from "../../Components/Empty/Empty";

export function WatchLaterPage() {

    const { loader } = useVideosContext();
    const { watchlist } = useWatchlistContext();

    return (
        <div className="videos-container">
        {loader && <MyLoader /> }
        {
            watchlist.length > 0 ? watchlist.map(item => (
                <WatchLater key={item._id} watchlaterData={item} />
            )) : <Empty component="Watch Later" />
        }
        </div>
    )
}