import { createContext, useContext, useReducer } from "react";

export const PlaylistContext = createContext();

export function playlistReducer(state, action) {
  switch (action.type) {
    case "SHOW_PLAYLIST":
      return {
        ...state,
        playlistModal: {
          ...state.playlistModal,
          status: state.playlistModal.status === false ? true : false,
          videoData:
            action.payload === undefined ? "" : action.payload,
        },
      }; 

    case "DISPLAY_INPUT":
      return {
        ...state,
        playlistInput: state.playlistInput === false ? true : false,
      };

    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };

      case "CLEAR_PLAYLIST":
        return {
          ...state,
          playlist: []
        };

    default:
      return state;
  }
}

export const initialState = {
  playlist: [],
  playlistInput: false,
  playlistModal: {
    status: false,
    videoData: "",
  },
};

export function PlaylistProvider({ children }) {
  const [state, dispatchPlaylist] = useReducer(playlistReducer, initialState);

  return (
  <PlaylistContext.Provider value={{...state, dispatchPlaylist}}>
  {children}
  </PlaylistContext.Provider>);
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}
