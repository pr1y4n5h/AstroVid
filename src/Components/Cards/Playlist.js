import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import DeleteIcon from "@material-ui/icons/Delete";
import { deletePlaylist } from "../../api/Playlist/deletePlaylist";
import { thumbnail } from "../../utils/thumbnail";

export const PlaylistCard = ({ item }) => {
  const { playlist, dispatchPlaylist } = usePlaylist();
  const { token } = useAuth(); 
  
  const playlistThumbnail = (playlist) => {
    if(playlist.length > 0) {
      return thumbnail(playlist[0]?._id)
    }
    else {
      return thumbnail("IZDReMwYM0Y")
    }
  }

  return (
    <div className="playlist-card">
    <div className="playlist-top">
    <img src={playlistThumbnail(item.list)} alt={item.name} />
    <span
      className="delete-icon"
      onClick={() => deletePlaylist(item._id, dispatchPlaylist, token)}
    >
      <DeleteIcon style={{ color: "#ff0000" }} />
    </span>
    </div>
    <div className="playlist-title">
          <p> {item.name} </p>
        </div>
          <div className="play-btn-div">
            <Link to={`/playlist/${item._id}`} className="play-btn">
              Watch Now
            </Link>
        </div>
    </div>
  );
}; 