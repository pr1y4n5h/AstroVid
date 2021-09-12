import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Player } from "./Pages/Player/Reactplayer";
import { VideosPage } from "./Pages/Videos/VideosPage";
import { NormalSideBarMenu } from "./Components/Sidebar/NormalSidebar";
import { Navbar } from "./Components/Navbar/Navbar";
import { LikedVideosPage } from "./Pages/LikedVideos/LikedVideosPage";
import { PlaylistPage } from "./Pages/Playlist/PlaylistPage";
import { WatchLaterPage } from "./Pages/WatchLater/WatchLaterPage";
import { ToastContainer } from "react-toastify";
import { ErrorPage } from "./Pages/ErrorPage";
import { Signup } from "./Pages/Signup/Signup";
import { Login } from "./Pages/Login/Login";
import { useLikesData } from "./Hooks/useLikesData";
import { useWatchLaterData } from "./Hooks/useWatchLaterData";
import { usePlaylistData } from "./Hooks/usePlaylistData";
import { PlaylistVideos } from "./Pages/Playlist/PlaylistVideos";
import { PrivateRoute } from "./PrivateRoute";

export default function App() {
  useLikesData();
  useWatchLaterData();
  usePlaylistData();

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <NormalSideBarMenu />
        <div className="routes">
          <Routes>
            <Route path="/" element={<VideosPage />} />
            <Route path=":id" element={<Player />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <PrivateRoute path="/liked" element={<LikedVideosPage />} />
            <PrivateRoute path="/playlist" element={<PlaylistPage />} />
            <PrivateRoute path="/playlist/:id" element={<PlaylistVideos />} />
            <PrivateRoute path="/watch-later" element={<WatchLaterPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
