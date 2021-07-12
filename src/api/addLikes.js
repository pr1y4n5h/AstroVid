import axios from "axios";
import {toastText } from "../utils/toast";

export async function addLikes(likeId, videoData, dispatchLikes ) {

    const addLikesURL = (likeId === null) ? "https://astrovids-backend.pr1y4n5h.repl.co/likes" : `https://astrovids-backend.pr1y4n5h.repl.co/likes/${likeId}`;

    try {
        const {
            status, 
            data: 
            { success, likeData: { 
                _id: like_id, 
                videos 
            } 
            }
        } = await axios.post( addLikesURL , 
        { 
            videos: videoData
        }
        );

        if(status === 201 && success === true) {
            dispatchLikes({type: "ADD_TO_LIKES", payload: videos});
            console.log(videos)
            toastText("Added to Likes");
            
            if(likeId === null) {
                dispatchLikes({type: "SAVE_LIKE_ID", payload: like_id});
                localStorage.setItem("likeid", JSON.stringify(like_id));
            } 
            
        }

    } catch (err) {
        console.log(err.message);
    }
}


