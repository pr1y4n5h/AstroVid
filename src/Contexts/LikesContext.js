import { createContext, useContext, useReducer } from "react";
import {useLikesData} from "../Hooks/useLikesData"

export const LikesContext = createContext();

function likesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_LIKES":
      return {
        ...state,
        likes: action.payload,
      };

    case "REMOVE_FROM_LIKES":
      return {
        ...state,
        likes: state.likes.filter((item) => item._id !== action.payload),
      };

    case "SAVE_LIKE_ID":
      return {
        ...state,
        likeId: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  likes: [],
};

export function LikesProvider({ children }) {
  const [state, dispatchLikes] = useReducer(likesReducer, initialState);


  return (
    <LikesContext.Provider value={{ ...state, dispatchLikes }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikesContext() {
  return useContext(LikesContext);
}
