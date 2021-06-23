import ReactPlayer from "react-player";
import {React} from "react";
import { useParams } from "react-router-dom";
import {useVideosContext} from "../Contexts/VideosContext";
import {useReactPlayer} from "../Hooks/useReactPlayer";
import {MyLoader} from "../Components/Loader";
import "../App.css"
import { useLikesContext } from "../Contexts/LikesContext";
import {useWatchlistContext} from "../Contexts/WatchlistContext"
import { addLikes } from "../api/addLikes";
import { removeLikes } from "../api/removeLikes";
import { addWatchlist } from "../api/Watchlist/addWatchlist";
import {removeWatchlist } from "../api/Watchlist/removeWatchlist";

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import PlaylistAddCheckSharpIcon from '@material-ui/icons/PlaylistAddCheckSharp';


export function Player() {
    const {loader, dispatchVideos} = useVideosContext();
    const {likes, likeId, dispatchLikes} = useLikesContext();
    const { id } = useParams();
    const videoData = useReactPlayer(id);
    const {watchlist, watchlistId, dispatchWatchlist } = useWatchlistContext();

    function likeHandler(videoData) {

        if(likes.some(item => item._id === id)) {
            removeLikes(likeId, videoData._id, dispatchLikes)
            // alert("REMOVED")
        }
        else {
            addLikes(likeId, videoData, dispatchLikes)
            // alert("ADDED!")
        }
    }

    function likeToggle(id) {
        if(likes.some(item => item._id === id)) {
            return <ThumbUpAltSharpIcon style={{color: "#ff4e00"}} />
        }
        else {
            return <ThumbUpAltOutlinedIcon />
        }
    }

    function watchlistHandler(videoData) {
        if(watchlist.some(item => item._id === id )) {
            removeWatchlist(watchlistId, videoData._id, dispatchWatchlist)
            // alert("Removed")
        }
        else {
            addWatchlist(watchlistId, videoData, dispatchWatchlist)
            // alert("Added") 
        }
    }

    function watchlistToggle(id) {
       if(watchlist.some(item => item._id === id )) {
        return <WatchLaterSharpIcon style={{color: "#ff4e00"}} />
       }
       else {
           return <WatchLaterOutlinedIcon />
       }
    }

    return (
        <>
        {loader && <MyLoader /> }
        <div className="player-container">
        {videoData && (
            <>
            <div className="player">
            <div className="react-player-div">
            <ReactPlayer 
            controls
            className="react-player" 
            url = {`https://www.youtube.com/watch?v=${id}`} 
            // playing = {true}
            width = "100%"
            height ="100%" />
            </div>
            
            <div className="player-buttons" >
             <ul className="player-buttons-ul">
                 <li  >
                    <span onClick={() => likeHandler(videoData)}> {likeToggle(videoData._id)} </span>
                    <p>
                     {likes.some(item => item._id === id) ? `Liked` : `Like`}
                     </p>
                 </li>
                 <li>
                 <span onClick={() => watchlistHandler(videoData)} > {watchlistToggle(videoData._id)}</span>
                 <p>
                 Watch Later
                 </p>
                 </li>
                 <li>
                 <span> <PlaylistAddOutlinedIcon /></span>
                 <p>
                     Playlist
                 </p>
                 </li>
             </ul>
             </div>
            
            </div>

            
            <div className="player-content">

            <div className="player-heading">
            <p> {videoData.name} </p>
             </div>
             <div className="player-credits">
            <p> Credits : {videoData.credits} </p>
             </div>
             <div className="player-category">
            <p> Category : {videoData.category} </p>
             </div>

             <div className="player-description">
            <p> Description : {videoData.description} </p>
             </div>
             </div>

            </>
        )}

        <hr />
            
        </div>
        </>
    )
}