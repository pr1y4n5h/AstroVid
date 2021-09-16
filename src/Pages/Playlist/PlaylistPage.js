import { PlaylistCard } from "../../Components/Cards/Playlist";
import { Empty } from "../../Components/Empty/Empty";
import { useAuth } from "../../Contexts/AuthContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import  "./playlist.style.css"

export function PlaylistPage() {
  const { playlist } = usePlaylist();
  const { loggedUser, token } = useAuth();

  console.log(playlist);

  return (
    <div>
      {token && <h1 className="page-title"> {loggedUser.name}'s Playlist </h1>}
      <div className="videos-container">
        {playlist.length ? (
          playlist.map((item) => <PlaylistCard item={item} key={item._id} />)
        ) : (
          <Empty component="Playlist" />
        )}
      </div>
    </div>
  );
}
