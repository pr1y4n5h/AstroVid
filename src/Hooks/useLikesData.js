import axios from "axios";
import { useEffect } from "react";
import { useLikesContext } from "../Contexts/LikesContext";
import { useVideosContext } from "../Contexts/VideosContext";

export function useLikesData() {
  const { dispatchLikes, likes, likeId } = useLikesContext();
  const { dispatchVideos } = useVideosContext();

  async function fetchData() {
    dispatchVideos({ type: "SET_LOADER" });

    try {
      const { status, data } = await axios.get(
        `https://astrovids-backend.pr1y4n5h.repl.co/likes/${likeId}`
      );

      if (status === 200 && data.success === true) {
        dispatchLikes({ type: "ADD_TO_LIKES", payload: data.likeData.videos });
      }
    } catch (err) {
      console.error(err.stack);
    } finally {
      dispatchVideos({ type: "SET_LOADER" });
    }
  }

  useEffect(() => {
    if (likes.length === 0 && likeId !== null) {
      fetchData();
    }
  }, [likeId]);
}
