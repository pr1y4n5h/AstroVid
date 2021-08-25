import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useLikesContext } from "../Contexts/LikesContext";
import { useVideosContext } from "../Contexts/VideosContext";

export function useLikesData() {
  const { dispatchLikes, likes } = useLikesContext();
  const { dispatchVideos } = useVideosContext();
  const { token, loggedUser } = useAuth();

  async function fetchData() {
    dispatchVideos({ type: "SET_LOADER" });

    try {
      const { status, data } = await axios.get(
        `https://astrovids-backend.pr1y4n5h.repl.co/likes/`,
        { headers: { authorization: token } }
      );

      if (status === 200 && data.success === true) {
        dispatchLikes({ type: "ADD_TO_LIKES", payload: data.likeData.videos });
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatchVideos({ type: "SET_LOADER" });
    }
  }

  useEffect(() => {
    if (likes.length === 0 && token) {
      fetchData();
    }
  }, [token, loggedUser]);
}
