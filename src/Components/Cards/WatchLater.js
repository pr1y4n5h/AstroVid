import { Link } from "react-router-dom";
import { thumbnail } from "../../utils/thumbnail";
import "./Cards.style.css";
import { useWatchlistContext } from "../../Contexts/WatchlistContext";
import {PlayCircleFilledWhite, Delete} from "@material-ui/icons";
import { removeWatchlist } from "../../api/Watchlist/removeWatchlist";
import { useAuth } from "../../Contexts/AuthContext";

export function WatchLater({ watchlaterData }) {
  const { _id: videoID, name, category, credits } = watchlaterData;
  const { dispatchWatchlist } = useWatchlistContext();
  const { token } = useAuth();

  return (
    <>
      <div className="videos">
        <img src={`${thumbnail(videoID)}`} alt={name} />
        <span
          className="delete-icon"
          onClick={() => removeWatchlist(videoID, dispatchWatchlist, token)}
        >
          <Delete className="delete-icon-bin" />
        </span>
        <div className="videos-title">
          <p> {name} </p>
        </div>
        <div className="videos-overview">
          <h3> Credits : {credits} </h3>
          <p>
            <em> Genre : {category} </em>
          </p>
          <div className="play-btn-div">
            <Link to={`/${videoID}`} className="play-btn">
              Play now <PlayCircleFilledWhite />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
