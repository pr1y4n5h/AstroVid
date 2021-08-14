import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Player } from "./Pages/Player/Reactplayer";
import { VideosPage } from "./Pages/Videos/VideosPage";
import { SideBarMenu } from "./Components/Sidebar.js";
import { NormalSideBarMenu } from "./Components/Sidebar/NormalSidebar";
import { Navbar } from "./Components/Navbar/Navbar";
import { LikedVideosPage } from "./Pages/LikedVideosPage";
import { PlaylistVideos } from "./Pages/PlaylistPage";
import { WatchLaterPage } from "./Pages/WatchLaterPage";
import { ToastContainer } from "react-toastify";
import { ErrorPage } from "./Pages/ErrorPage";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <NormalSideBarMenu />
        <div className="routes">
          <Routes>
            <Route path="/" element={<VideosPage />} />
            <Route path=":id" element={<Player />} />
            <Route path="/liked" element={<LikedVideosPage />} />
            <Route path="/playlist" element={<PlaylistVideos />} />
            <Route path="/watch-later" element={<WatchLaterPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
