import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../features/products/productsSlice';
import '../../index.css'; // Import the CSS file for styling

const NavBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <nav className="navbar">
      {/* Brand Name */}
      <div className="navbar-brand">Wingman</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={handleSearch}
        />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="search-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 5.65a7.5 7.5 0 010 10.7z"
            />
          </svg>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="navbar-actions">
        <button className="navbar-button">Login</button>
        <button className="navbar-button">Cart</button>
      </div>
    </nav>
  );
};

export default NavBar;
