import axios from "axios";
import { toastText } from "../utils/toast";

export async function removeLikes(likeId, videoId, dispatchLikes) {

    const removeLikesURL = `https://astrovids-backend.pr1y4n5h.repl.co/likes/${likeId}/${videoId}` ;
    
    try {
        const { 
            status, 
            data: { 
                success, 
                likeData: 
                { 
                    videos 
                } 
            } }= await axios.delete(removeLikesURL);
            
            if(status === 200 && success === true)
            { 
                dispatchLikes({type: "REMOVE_FROM_LIKES", payload: videoId});
                toastText("Removed from Likes")
            }
    } 
    catch (error) {
        console.log(error.message);
    }
}
