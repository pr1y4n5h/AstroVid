import ReactPlayer from "react-player";
import React from "react";
import { useParams } from "react-router-dom";
import {useVideosContext} from "./videos-context";
import {useReactPlayer} from "./useReactPlayer";
import {MyLoader} from "./Components/Loader";
import "./App.css"

export function Player() {
    const {loader, dispatchVideos} = useVideosContext();
    const { id } = useParams();
    const videoData = useReactPlayer(id);

    return (
        <div className="player-container">
        {loader && <MyLoader /> }
        {videoData && (
            <div className="player">
            <ReactPlayer 
            controls
            className="react-player" 
            url = {`https://www.youtube.com/watch?v=${id}`} 
            // playing = {true}
            width = "100%"
            height ="100%" />
            <div className="player-content">

            <div className="player-content-left">
            <div className="player-heading">
            <p> {videoData.name} </p>
             </div>
             <div className="player-category">
            <p> Category : {videoData.category} </p>
             </div>
             <div className="player-description">
            <p> Description : {videoData.description} </p>
             </div>
             <div className="player-description">
            <p> Credits : {videoData.credits} </p>
             </div>
             
             </div>

             <div className="player-content-right">
                 <button>
                     Like
                 </button>
                 <button>
                 Watch Later
                 </button>
                 <button>
                 Save
                 </button>
             </div>
             </div>
            </div>
        )}
            
        </div>
    )
}
