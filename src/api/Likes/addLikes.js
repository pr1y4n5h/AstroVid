import axios from "axios";
import { toastSuccessText } from "../../Components/toast";

export async function addLikes(videoData, dispatchLikes, token) {

  try {
    const { 
      status,
      data: {
        success,
        likeData: { videos },
      },
    } = await axios.post("https://AstroVids-Backend.pr1y4n5h.repl.co/likes/", {
      videos: videoData,
    }, { headers: { authorization: token } });

    if (status === 201 && success === true) {
      dispatchLikes({ type: "ADD_TO_LIKES", payload: videos });
      toastSuccessText("Added to Likes");
    }
  } catch (err) {
    console.log(err);
  }
}
