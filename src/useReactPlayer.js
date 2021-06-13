import axios from "axios";
import {useEffect , useState} from "react";
import {useVideosContext} from "./videos-context";

export function useReactPlayer(videoId) {
    const { dispatchVideos } = useVideosContext();
    const [videos, setVideos] = useState();

    async function getData() {
        dispatchVideos({ type: "SET_LOADER" });
        try {
            const { status, data } = await axios.get(`https://astrovids-backend.pr1y4n5h.repl.co/videos/${videoId}`);

            if(status === 200 && data.success === true ) 
            {
                setVideos(data.videodata)
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
            getData()
    }, [videoId] )

    return videos;
}