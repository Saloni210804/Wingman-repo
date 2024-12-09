import React from 'react';
import { Product } from '../types';
import './../../index.css'; // Include the custom CSS file

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
  return (
    <div className="custom-card">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      
      {/* Product Info */}
      <div className="card-content">
      <h2 className="card-title" title={product.title}>
  {product.title}
</h2>
        <p className="card-price">${product.price}</p>
        {/* Rating */}
        <div className="card-rating">
          <span>{product.rating.rate}⭐</span>
          <span className="card-reviews">{`(${product.rating.count} reviews)`}</span>
        </div>
        {/* Add to Cart Button */}
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
});

export default ProductCard;
