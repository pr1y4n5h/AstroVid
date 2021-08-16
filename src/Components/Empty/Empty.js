import React from 'react';
import "./Empty.style.css";

export const Empty = ({component}) => {
    return (
        <div className="empty-container">
            <h1 className="empty-content"> You have nothing here in {component}! 😅 </h1>
        </div>
    )
}
