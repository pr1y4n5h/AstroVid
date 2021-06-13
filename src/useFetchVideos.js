import axios from "axios";
import {useEffect} from "react";
import {useVideosContext} from "./videos-context";

export function useFetchVideos() {
    const { videos, dispatchVideos } = useVideosContext();

    async function getData() {
        dispatchVideos({ type: "SET_LOADER" });
        try {
            const { status, data } = await axios.get("https://astrovids-backend.pr1y4n5h.repl.co/videos");

            if(status === 200 && data.success === true ) 
            {
                dispatchVideos({type: "SET_VIDEOS",
                payload: data.videodata})
            }
        }
        catch(err) {
            console.log("err.message")
        }
        finally {
            dispatchVideos({ type: "SET_LOADER" })
        }
    }

    useEffect(() => {
        if (videos.length === 0) {
            getData()
        }
    }, [] )

}