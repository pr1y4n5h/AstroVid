import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VideosProvider } from "./Contexts/VideosContext";
import { LikesProvider } from "./Contexts/LikesContext";
import { WatchlistProvider } from "./Contexts/WatchlistContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <LikesProvider>
          <WatchlistProvider>
            <App />
          </WatchlistProvider>
        </LikesProvider>
      </VideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
