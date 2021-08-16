import axios from "axios";
import { toastFailText } from "../../Components/toast";

export async function removeLikes(videoId, dispatchLikes, token) {

  try {
    const {
      status,
      data: {
        success,
        likeData: { videos },
      },
    } = await axios.delete(`https://AstroVids-Backend.pr1y4n5h.repl.co/likes/${videoId}`, { headers: { authorization: token } });

    if (status === 200 && success === true) {
      dispatchLikes({ type: "REMOVE_FROM_LIKES", payload: videoId });
      console.log("Removed")
      toastFailText("Removed from Likes");
    }
  } catch (error) {
    console.log(error.message);
  }
}
