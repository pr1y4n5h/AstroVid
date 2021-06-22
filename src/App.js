import './App.css';
import {Route, Routes} from "react-router-dom";
import {Player} from "./Pages/Reactplayer"
import {VideosPage} from "./Pages/VideosPage"
import {SideBarMenu} from './Components/Sidebar.js';
import {Navbar} from "./Components/Navbar"
import { LikedVideos } from './Pages/LikedVideosPage';
import { PlaylistVideos } from './Pages/PlaylistPage';
import {WatchLater} from './Pages/WatchLaterPage'

export default function App() {

  return (
    <div className="App" id="outer-container">
    <SideBarMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <Navbar />    
    <main className="main-content">
    <Routes>
        <Route path="/" element={<VideosPage />} />
        <Route path=":id" element={<Player />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/playlist" element={<PlaylistVideos />} />
        <Route path="/watch-later" element={<WatchLater />} />
    </Routes>
    </main>
    </div>
  );
}


