import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VideosProvider } from "./Contexts/VideosContext";
import { LikesProvider } from "./Contexts/LikesContext";
import { WatchlistProvider } from "./Contexts/WatchlistContext";
import { AuthProvider } from "./Contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <LikesProvider>
            <WatchlistProvider>
              <App />
            </WatchlistProvider>
          </LikesProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
