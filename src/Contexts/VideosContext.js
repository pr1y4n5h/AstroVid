import { createContext, useContext, useReducer } from "react";

export const VideosContext = createContext();

function videosReducer(state, action) {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };

    case "VIDEO_FILTER":
      return {
        ...state,
        videoFilter: action.payload,
      };

    case "SET_LOADER":
      return {
        ...state,
        loader: !state.loader,
      };

    default:
      return {
        ...state,
      };
  }
}

const initialState = {
  videos: [],
  videoFilter: "all",
  loader: false,
};

export function VideosProvider({ children }) {
  const [state, dispatchVideos] = useReducer(videosReducer, initialState);

  return (
    <VideosContext.Provider value={{ ...state, dispatchVideos }}>
      {children}
    </VideosContext.Provider>
  );
}

export function useVideosContext() {
  return useContext(VideosContext);
}
