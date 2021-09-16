import { useLikesContext } from "../../Contexts/LikesContext";
import { useVideosContext } from "../../Contexts/VideosContext";
import { MyLoader } from "../../Components/Loader/Loader";
import { Likes } from "../../Components/Cards/Likes";
import { Empty } from "../../Components/Empty/Empty";
import { useAuth } from "../../Contexts/AuthContext";

export function LikedVideosPage() {
  const { loader } = useVideosContext();
  const { likes } = useLikesContext();
  const {token, loggedUser} = useAuth();

  return (
    <>
    {token && <h1 className="page-title"> {loggedUser.name}'s Likes </h1>}
    <div className="videos-container">
      {loader && <MyLoader />}
      {likes.length ? (
        likes.map((item) => <Likes key={item._id} likesData={item} />)
      ) : (
        <Empty component="Likes" />
      )}
    </div>
    </>
  );
}
