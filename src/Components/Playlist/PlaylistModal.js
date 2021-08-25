import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import "./Playlist.style.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { createPlaylist } from "../../api/Playlist/createPlaylist";
import { toastFailText } from "../toast";
import { addToPlaylist } from "../../api/Playlist/addToPlaylist";
import { removeFromPlaylist } from "../../api/Playlist/removeFromPlaylist";
import { Button } from "@material-ui/core";
import { useVideosContext } from "../../Contexts/VideosContext";


export const PlaylistModal = () => {
  const [text, setText] = useState();
  const { playlist, playlistModal, dispatchPlaylist } = usePlaylist();
  const { token } = useAuth();
  const {loader, dispatchVideos} = useVideosContext();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") createPlaylistHandler();
  };

  async function createPlaylistHandler() {
    dispatchPlaylist({ type: "DISPLAY_INPUT" });

    dispatchVideos({type: "SET_LOADER"})
    try{
      if(text) {
        await createPlaylist(text, dispatchPlaylist, token);
        setText("");
      } else {
        toastFailText("Playlist name can't be empty!");
      }
    }
    catch(error) {
      console.log(error)
    }
    finally {
      dispatchVideos({type: "SET_LOADER"})
    }
    
  }

  function playlistHandler(evt, token) {
    let listId = evt.target.id;
    if (evt.target.checked === true) {
      let videoData = playlistModal.videoData;
      addToPlaylist(listId, dispatchPlaylist, videoData, token);
    } else {
      let videoId = playlistModal.videoData._id;
      removeFromPlaylist(listId, dispatchPlaylist, videoId, token);
    }
  }

  const playlistSelected = (id) => {
    return playlist
      .filter((item) => item._id === id)[0]
      .list.some((item) =>
        item._id === playlistModal.videoData._id ? true : false
      );
  };

  return (
    <div
      className={`modal ${playlistModal.status ? "show-modal" : "hide-modal"}`}
    >
      <div
        className="close-btn"
        onClick={() => dispatchPlaylist({ type: "SHOW_PLAYLIST" })}
      >
        <AiFillCloseCircle />
      </div>
      <h2> Playlist </h2>
      <div className="modal-content">
        <div className="modal-input">
          <input
            placeholder="Enter playlist name..."
            onChange={(evt) => setText(evt.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <Button variant="contained" color="primary" onClick={createPlaylistHandler}>
            {loader ? "Creating..." : "Create"}
          </Button>
        </div>

        {playlist.map((item) => (
          <div key={item._id} className="playlist-list">
            <label className="single-list">
              <input
              style={{marginRight: "1rem"}}
                type="checkbox"
                name="playlist"
                id={item._id}
                checked={playlistSelected(item._id)}
                onChange={(evt) => playlistHandler(evt, token)}
              />
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
