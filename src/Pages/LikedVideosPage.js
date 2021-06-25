import '../App.css';
import { useLikesContext } from "../Contexts/LikesContext";
import { useLikesData } from "../Hooks/useLikesData"
import {useVideosContext} from "../Contexts/VideosContext";
import { MyLoader } from "../Components/Loader";
import { Likes } from "../Components/Likes"
import {useLocalStorage} from "../useLocalStorage";

export function LikedVideosPage() {

    const { loader } = useVideosContext();
    const { likes } = useLikesContext();

    

    useLikesData();
    useLocalStorage()

    return (
        <div>
        <div id="page-wrap">
        
        {loader && <MyLoader /> }

        <div className="videos-container">

        {
            likes.length ? likes.map(item => (
                <Likes key={item._id} likesData={item} />
            )) : <h1> The Like list is Empty</h1>
        }

        </div>
        </div>
        </div>
    )
}