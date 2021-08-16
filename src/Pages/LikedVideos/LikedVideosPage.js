import "./LikedVideos.style.css";
import { useLikesContext } from "../../Contexts/LikesContext";
import { useVideosContext } from "../../Contexts/VideosContext";
import { MyLoader } from "../../Components/Loader/Loader";
import { Likes } from "../../Components/Cards/Likes";
import { Empty } from "../../Components/Empty/Empty";

export function LikedVideosPage() {
  const { loader } = useVideosContext();
  const { likes } = useLikesContext();

  return (
    <div className="videos-container">
      {loader && <MyLoader />}
      {likes.length ? (
        likes.map((item) => <Likes key={item._id} likesData={item} />)
      ) : (
        <Empty component="Likes" />
      )}
    </div>
  );
}
