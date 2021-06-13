import './App.css';
import {Route, Routes} from "react-router-dom";
import {Player} from "./Reactplayer"
import {VideosPage} from "./VideosPage"
import {SideBarMenu} from './Components/Sidebar.js';
import {Navbar} from "./Components/Navbar"

export default function App() {

  return (
    <div className="App" id="outer-container">
    <SideBarMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <Navbar />    
    <main className="main-content">
    <Routes>
        <Route path="/" element={<VideosPage />} />
        <Route path=":id" element={<Player />} />
    </Routes>
    </main>
    </div>
  );
}


