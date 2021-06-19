import {useEffect} from "react";
import {useLikesContext} from "./LikesContext";
import { useVideosContext } from "./VideosContext";

export function useLocalStorage() {
    const { dispatchVideos } = useVideosContext();
    const { dispatchLikes } = useLikesContext();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("likeid"));
        dispatchLikes({type: "SAVE_LIKE_ID", payload: data})
    }, [])

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("historyid"));
    //     dispatchVideos({type: ""})
    // } )


}