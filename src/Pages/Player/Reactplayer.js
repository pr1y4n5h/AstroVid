import ReactPlayer from "react-player";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useVideosContext } from "../../Contexts/VideosContext";
import { useReactPlayer } from "../../Hooks/useReactPlayer";
import { MyLoader } from "../../Components/Loader/Loader";
import "./Player.style.css";
import { useLikesContext } from "../../Contexts/LikesContext";
import { useWatchlistContext } from "../../Contexts/WatchlistContext";
import { addLikes } from "../../api/Likes/addLikes";
import { removeLikes } from "../../api/Likes/removeLikes";
import { addWatchlist } from "../../api/Watchlist/addWatchlist";
import { removeWatchlist } from "../../api/Watchlist/removeWatchlist";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import PlaylistAddCheckSharpIcon from "@material-ui/icons/PlaylistAddCheckSharp";
import { useAuth } from "../../Contexts/AuthContext";

export function Player() {
  const { loader, dispatchVideos } = useVideosContext();
  const { likes, dispatchLikes } = useLikesContext();
  const { id } = useParams();
  const videoData = useReactPlayer(id);
  const { watchlist, watchlistId, dispatchWatchlist } = useWatchlistContext();
  const [toggle, setToggle] = useState(false);
  const {token} = useAuth();

  function likeHandler(videoData) {
    if(token) {
      if (likes.some((item) => item._id === id)) {
        removeLikes(videoData._id, dispatchLikes, token);
        alert("REMOVED")
      } else {
        addLikes(videoData, dispatchLikes, token);
        alert("ADDED!")
      }
    }
    else {
      alert("Please Login")
    }
      
  }

  function likeToggle(id) {
    if (likes.some((item) => item._id === id)) {
      return <ThumbUpAltSharpIcon style={{ color: "#ff4e00" }} />;
    } else {
      return <ThumbUpAltOutlinedIcon />;
    }
  }

  function watchlistHandler(videoData) {
    if (watchlist.some((item) => item._id === id)) {
      removeWatchlist(watchlistId, videoData._id, dispatchWatchlist);
      // alert("Removed")
    } else {
      addWatchlist(watchlistId, videoData, dispatchWatchlist);
      // alert("Added")
    }
  }

  function watchlistToggle(id) {
    if (watchlist.some((item) => item._id === id)) {
      return <WatchLaterSharpIcon style={{ color: "#ff4e00" }} />;
    } else {
      return <WatchLaterOutlinedIcon />;
    }
  }

  console.log(likes)

  return (
    <>
      {loader && <MyLoader />}
      <div className="player-container">
        {videoData && (
          <>
            <div className="player">
              <div className="react-player-div">
                <ReactPlayer
                  controls
                  className="react-player"
                  url={`https://www.youtube.com/watch?v=${id}`}
                  playing={true}
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="player-buttons">
                <ul className="player-buttons-ul">
                  <li>
                    <span onClick={() => likeHandler(videoData)}>
                      {likeToggle(videoData._id)}
                    </span>
                    <p>
                      {likes.some((item) => item._id === id) ? `Liked` : `Like`}
                    </p>
                  </li>
                  <li>
                    <span onClick={() => watchlistHandler(videoData)}>
                      {watchlistToggle(videoData._id)}
                    </span>
                    <p>Watch Later</p>
                  </li>
                  <li>
                    <span>
                      <PlaylistAddOutlinedIcon />
                    </span>
                    <p>Playlist</p>
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
                <span onClick={() => setToggle((toggle) => !toggle)}>
                  {toggle ? "Show Less..." : "Show More..."}
                </span>
                <p
                  style={
                    !toggle
                      ? { visibility: "hidden" }
                      : { visibility: "visible" }
                  }
                >
                  Description : {videoData.description}
                </p>
              </div>
            </div>
          </>
        )}

        <hr />
      </div>
    </>
  );
}