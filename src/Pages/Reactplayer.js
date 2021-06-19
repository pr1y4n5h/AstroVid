import ReactPlayer from "react-player";
import {React, useState} from "react";
import { useParams } from "react-router-dom";
import {useVideosContext} from "../Contexts/VideosContext";
import {useReactPlayer} from "../Hooks/useReactPlayer";
import {MyLoader} from "../Components/Loader";
import "../App.css"
import { useLikesContext } from "../Contexts/LikesContext";
import { addLikes } from "../api/addLikes";
import { removeLikes } from "../api/removeLikes";

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';

import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';

import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import PlaylistAddCheckSharpIcon from '@material-ui/icons/PlaylistAddCheckSharp';


export function Player() {
    const {loader, dispatchVideos} = useVideosContext();
    const {dispatchLikes, likes, likeId} = useLikesContext();
    const { id } = useParams();
    const videoData = useReactPlayer(id);
    // const [toggle, setToggle] = useState(false);

    function likeHandler(videoData) {
        if(likes.some(item => item._id !== id)) {
            addLikes(likeId, videoData, dispatchLikes)
        }
        else {
            removeLikes(likeId, videoData._id, dispatchLikes)
        }
    }

    function likeToggle(id) {
        if(likes.some(item => item._id === id)) {
            return (
                <ThumbUpAltSharpIcon />
            )
        }
        else {
         return (
            <ThumbUpAltOutlinedIcon />
         )       
        }
    }

    

    return (
        <div className="player-container">

        {loader && <MyLoader /> }

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
                 <li>
                    <span onClick={() => likeHandler(videoData)}> {likeToggle(videoData._id)} </span>
                    <p>
                     {/* {toggle ? `Liked` : `Like`} */}
                     Like
                     </p>
                 </li>
                 <li>
                 <span> <WatchLaterOutlinedIcon /></span>
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
            
        </div>
    )
}
