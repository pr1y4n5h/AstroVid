import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {VideosProvider} from "./Contexts/VideosContext"
import {LikesProvider} from "./Contexts/LikesContext"

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <LikesProvider>
  <VideosProvider>
    <App />
    </VideosProvider>
    </LikesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
