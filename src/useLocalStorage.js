import {useEffect} from "react";
import {useLikesContext} from "./Contexts/LikesContext";
import { useVideosContext } from "./Contexts/VideosContext";
import { useWatchlistContext } from "./Contexts/WatchlistContext";

export function useLocalStorage() {
    // const { dispatchVideos } = useVideosContext();
    const { dispatchLikes } = useLikesContext();
    const { dispatchWatchlist } = useWatchlistContext();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("likeid"));
        dispatchLikes({type: "SAVE_LIKE_ID", payload: data})
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("watchlistid"));
        dispatchWatchlist({type: "SAVE_WATCHLIST_ID", payload: data })
    }, [] )
}