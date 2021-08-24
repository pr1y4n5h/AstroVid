import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { usePlaylist } from '../../Contexts/PlaylistContext';
import { useVideosContext } from '../../Contexts/VideosContext';
import { useUserPlaylist } from '../../Hooks/useUserPlaylist';
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeFromPlaylist } from '../../api/Playlist/removeFromPlaylist';
import { thumbnail } from '../../utils/thumbnail';

export const PlaylistVideos = () => {
    
    const {playlist, dispatchPlaylist} = usePlaylist();
    const {token} = useAuth();
    const {loader} = useVideosContext();
    const {id} = useParams();
    const userPlaylist = useUserPlaylist(id);

    function getPlaylist(playlist,playlistId) {
        return playlist?.find(item => item._id === playlistId)
    }

    const playlistData = playlist.length !== 0 ? getPlaylist(playlist, id) : getPlaylist(userPlaylist, id) 

    console.log(playlistData)

    return (
        <div className="videos-container">
        {
        playlistData?.list.map(video => (
        <div className="videos">
        <img src={`${thumbnail(video._id)}`} alt={video.name} />
        <span
          className="delete-icon"
          onClick={() => removeFromPlaylist(id, dispatchPlaylist, video._id, token ) }
        >
          <DeleteIcon style={{ color: "#ff0000" }} />
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
              Play now <PlayCircleFilledWhiteIcon />
            </Link>
          </div>
        </div>
      </div>
            ) )
        }  
    </div>
    )
}