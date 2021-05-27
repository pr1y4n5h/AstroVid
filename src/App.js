import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {SideBarMenu} from './Components/Sidebar.js';


export default function App() {
  return (
    <div className="App" id="outer-container">
    <SideBarMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
      <h1> AstroVid </h1>
      </div>
    </div>
  );
}


