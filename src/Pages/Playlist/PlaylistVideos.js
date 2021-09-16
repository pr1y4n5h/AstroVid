import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import { useVideosContext } from "../../Contexts/VideosContext";
import { useUserPlaylist } from "../../Hooks/useUserPlaylist";
import {Delete,PlayCircleFilledWhite}  from "@material-ui/icons";
import { removeFromPlaylist } from "../../api/Playlist/removeFromPlaylist";
import { thumbnail } from "../../utils/thumbnail";
import {Empty} from "../../Components/Empty/Empty"

export const PlaylistVideos = () => {
  const { playlist, dispatchPlaylist } = usePlaylist();
  const { token } = useAuth();
  const { loader } = useVideosContext();
  const { id } = useParams();
  const userPlaylist = useUserPlaylist(id);

  function getPlaylist(playlist, playlistId) {
    return playlist?.find((item) => item._id === playlistId);
  }

  const playlistData =
    playlist.length !== 0
      ? getPlaylist(playlist, id)
      : getPlaylist(userPlaylist, id);

  console.log(playlistData);

  return playlistData?.list.length ? (
    <div className="videos-container">
      {playlistData?.list.map((video) => (
        <div className="videos">
          <img src={`${thumbnail(video._id)}`} alt={video.name} />
          <span
            className="delete-icon"
            onClick={() =>
              removeFromPlaylist(id, dispatchPlaylist, video._id, token)
            }
          >
            <Delete style={{ color: "#ff0000" }} />
          </span>
          <div className="videos-title">
            <p> {video.name} </p>
          </div>
          <div className="videos-overview">
            <h3> Credits : {video.credits} </h3>
            <p>
              <em> Genre : {video.category} </em>
            </p>
            <div className="play-btn-div">
              <Link to={`/${video._id}`} className="play-btn">
                Play now <PlayCircleFilledWhite />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Empty component={`${playlistData?.name} Playlist`} />
  );
};
