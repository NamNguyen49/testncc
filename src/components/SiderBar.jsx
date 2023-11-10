// Sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>Home</li>
                <hr className="divider" />
                <li>Services</li>
                <hr className="divider" />
                <li>News</li>
                <hr className="divider" />
                <li>Blog</li>
                <hr className="divider" />
                <li>Contact</li>
                <hr className="divider" />
            </ul>
        </div>
    );
}

export default Sidebar;
