
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import { addLikes } from "../api/addLikes";
import { removeLikes } from "../api/removeLikes";
import { useLikesContext } from "../Contexts/LikesContext";
import { useParams } from "react-router-dom";
import {useReactPlayer} from "../Hooks/useReactPlayer";

export function LikeButton() {

    const {likes, likeId, dispatchLikes} = useLikesContext();
    const { id } = useParams();
    const videoData = useReactPlayer(id);

    function likeHandler(videoData) {

        if(likes.some(item => item._id === id)) {
            removeLikes(likeId, videoData._id, dispatchLikes)
            // alert("REMOVED")
        }
        else {
            addLikes(likeId, videoData, dispatchLikes)
            // alert("ADDED!")
        }
    }

    function likeToggle(id) {
        if(likes.some(item => item._id === id)) {
            return <ThumbUpAltSharpIcon style={{color: "#ff4e00"}} />
        }
        else {
            return <ThumbUpAltOutlinedIcon />
        }
    }

    return (
        <>
        <span onClick={() => likeHandler(videoData)}> { likeToggle(videoData._id) } 
        </span>
        <p> {likes.some(item => item._id === id) ? `Liked` : `Like`} </p>
        </>
    )
}