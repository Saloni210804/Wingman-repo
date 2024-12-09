import { useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';
import SearchBar from '../components/SearchBar';
import '../../index.css'; // Import custom CSS file

const HomePage = () => {
  const {
   
    status,
    error,
    
  } = useProducts();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (status === 'loading') {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="error-message">
        {error || 'Failed to load products'}
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Header */}
      <div className="header">
        <SearchBar />
      </div>

      {/* Dark Mode Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
          className="mode-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>

      {/* Sorting and Pagination */}
      <div className="flex justify-between items-center mb-6">
        {/* Sorting and Pagination components can go here */}
      </div>
    </div>
  );
};

export default HomePage;
