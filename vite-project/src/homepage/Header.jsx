import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="top-header">
      <div className="left-text">Rumah Sakit Pelita</div>
      <div className="right-section">
        <span className="username">Admin</span>
        <button className="logout-button" title="Logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M16 13v-2H7V8l-5 4 5 4v-3zM19 3h-8v2h8v14h-8v2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
