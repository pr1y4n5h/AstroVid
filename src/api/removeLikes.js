import axios from "axios";

export async function removeLikes(likeId, videoId, dispatchLikes) {
    
    try {
        const { 
            status, 
            data: { 
                success, 
                likeData: 
                { 
                    videos 
                } 
            } }= await axios.delete(`https://astrovids-backend.pr1y4n5h.repl.co/likes/${likeId}/${videoId}`);
            
            if(status === 200 && success === true)
            { 
                dispatchLikes({type: "REMOVE_FROM_LIKES", payload: videoId});
            }
    } 
    catch (error) {
        console.log(error.message);
    }
}
