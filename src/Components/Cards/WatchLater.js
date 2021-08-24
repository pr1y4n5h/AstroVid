import React from "react";
import { Link } from "react-router-dom";
import { thumbnail } from "../../utils/thumbnail"
import "./Cards.style.css";
import { useWatchlistContext } from "../../Contexts/WatchlistContext";
import DeleteIcon from '@material-ui/icons/Delete';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import {removeWatchlist} from "../../api/Watchlist/removeWatchlist";

export function WatchLater( { watchlaterData }) {
    const { _id, name, category, credits } = watchlaterData;
    const {dispatchWatchlist, watchlistId} = useWatchlistContext();

    return (
        <>  
        
        <div className="videos">
        <img src={`${thumbnail(_id)}`} alt={name} />
        <span className="delete-icon" onClick={() => removeWatchlist(watchlistId, _id, dispatchWatchlist) }> <DeleteIcon style={{ color: "#ff0000" }} /> </span>
        <div className="videos-title">
        <p> {name} </p>
        </div>
        <div className="videos-overview">
        <h3> Credits : {credits} </h3>
        <p> <em> Genre : {category} </em></p>
        <div className="play-btn-div">
        <Link to={`/${_id}`} className="play-btn" > Play now <PlayCircleFilledWhiteIcon /> </Link>
        </div>
        </div>
        </div>
        </>
    )
}