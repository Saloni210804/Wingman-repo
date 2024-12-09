import React, { useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard';
import '../../index.css';

const ProductList: React.FC = () => {
  const { products, status, error, setSortType, currentPage, setCurrentPage, totalPages } = useProducts();
  const [sortType, setSortTypeState] = useState('default');
  const [sortedProducts, setSortedProducts] = useState(products);

  // Handle sorting change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortTypeState(value);
    setSortType(value);
  };

  // Sort products based on the selected sort type
  useEffect(() => {
    let sorted = [...products]; // Copy the products array to avoid direct mutation

    if (sortType === 'priceLowHigh') {
      sorted.sort((a, b) => a.price - b.price); // Sort by price (low to high)
    } else if (sortType === 'priceHighLow') {
      sorted.sort((a, b) => b.price - a.price); // Sort by price (high to low)
    } else if (sortType === 'rating') {
      sorted.sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating (high to low)
    }
    
    setSortedProducts(sorted);
  }, [sortType, products]); // Re-run the sorting logic when products or sortType change

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      {/* Sorting Dropdown */}
      <div className="sort-container">
        <label htmlFor="sort" className="sort-label">Sort by:</label>
        <select
          id="sort"
          value={sortType}
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="default">Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Loading/Error Message */}
      {status === 'loading' && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Product Grid */}
      <div className="catalog">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="pagination-info">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
