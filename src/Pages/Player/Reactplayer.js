import ReactPlayer from "react-player";
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
import { toastFailText } from "../../Components/toast";
import {ThumbUpAltOutlined, ThumbUpAltSharp, WatchLaterOutlined, WatchLaterSharp, PlaylistAddOutlined} from "@material-ui/icons";
import { useAuth } from "../../Contexts/AuthContext";
import { PlaylistModal } from "../../Components/Playlist/PlaylistModal";
import { usePlaylist } from "../../Contexts/PlaylistContext";

export function Player() {
  const { loader } = useVideosContext();
  const { likes, dispatchLikes } = useLikesContext();
  const { dispatchPlaylist } = usePlaylist();
  const { id } = useParams();
  const videoData = useReactPlayer(id);
  const { watchlist, dispatchWatchlist } = useWatchlistContext();
  const { token } = useAuth();

  function likeHandler(videoData) {
    if (token) {
      if (likes.some((item) => item._id === id)) {
        removeLikes(videoData._id, dispatchLikes, token);
      } else {
        addLikes(videoData, dispatchLikes, token);
      }
    } else {
      toastFailText("Please Login to continue!");
    }
  }

  function likeToggle(id) {
    if (likes.some((item) => item._id === id)) {
      return <ThumbUpAltSharp style={{ color: "#ff4e00" }} />;
    } else {
      return <ThumbUpAltOutlined />;
    }
  }

  function watchLaterHandler(videoData) {
    if (token) {
      if (watchlist.some((item) => item._id === id)) {
        removeWatchlist(videoData._id, dispatchWatchlist, token);
      } else {
        addWatchlist(videoData, dispatchWatchlist, token);
      }
    } else {
      toastFailText("Please Login to continue!");
    }
  }

  function watchLaterToggle(id) {
    if (watchlist.some((item) => item._id === id)) {
      return <WatchLaterSharp style={{ color: "#ff4e00" }} />;
    } else {
      return <WatchLaterOutlined />;
    }
  }

  function playlistHandler() {
    if (token) {
      dispatchPlaylist({ type: "SHOW_PLAYLIST", payload: videoData });
    } else {
      toastFailText("Please Login to continue!");
    }
  }

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
                  <li className="player-buttons-li">
                    <span onClick={() => likeHandler(videoData)}>
                      {likeToggle(videoData._id)}
                    </span>
                    <p>
                      {likes.some((item) => item._id === id) ? `Liked` : `Like`}
                    </p>
                  </li>
                  <li className="player-buttons-li">
                    <span onClick={() => watchLaterHandler(videoData)}>
                      {watchLaterToggle(videoData._id)}
                    </span>
                    <p>Watch Later</p>
                  </li>
                  <li className="player-buttons-li" onClick={playlistHandler}>
                    <span>
                      <PlaylistAddOutlined />
                    </span>
                    <p>Playlist</p>
                  </li>
                </ul>
              </div>
              <PlaylistModal />
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
                <p>Description : {videoData.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
