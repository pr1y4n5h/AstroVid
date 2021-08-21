import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VideosProvider } from "./Contexts/VideosContext";
import { LikesProvider } from "./Contexts/LikesContext";
import { WatchlistProvider } from "./Contexts/WatchlistContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { PlaylistProvider } from "./Contexts/PlaylistContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <PlaylistProvider>
            <LikesProvider>
              <WatchlistProvider>
                <App />
              </WatchlistProvider>
            </LikesProvider>
          </PlaylistProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
