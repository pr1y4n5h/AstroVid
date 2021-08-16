import React from "react";
import { Link } from "react-router-dom";
import { thumbnail } from "../../utils/thumbnail";
import "./Cards.style.css";

export function VideoCard({ videos }) {
  const { _id, name, category, credits } = videos;
  return (
    <>
      <Link to={`/${_id}`} className="link">
        <div className="videos">
          <img src={`${thumbnail(_id)}`} alt={{ name }} />
          <div className="videos-title">
            <p> {name} </p>
          </div>
          <div className="videos-overview">
            <h3> Credits : {credits}</h3>
            <p>
              <em> Genre : {category} </em>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
