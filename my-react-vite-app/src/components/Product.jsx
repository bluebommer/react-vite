// pages/Product.jsx
import React from 'react';

const Product = () => {
  const product = {
    name: 'Wireless Headphones',
    price: 199.99,
    oldPrice: 249.99,
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    images: [
      'https://via.placeholder.com/400x300?text=Product+Image+1',
      'https://via.placeholder.com/400x300?text=Product+Image+2'
    ],
    inStock: true,
    rating: 4.5,
    reviewsCount: 123
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img src={product.images[0]} alt={product.name} style={styles.image} />
      </div>

      <div style={styles.detailsSection}>
        <h1>{product.name}</h1>

        <p>
          <strong style={{ fontSize: '1.5rem' }}>${product.price.toFixed(2)}</strong>{' '}
          <span style={{ textDecoration: 'line-through', color: 'gray' }}>
            ${product.oldPrice.toFixed(2)}
          </span>
        </p>

        <p>{product.description}</p>

        <p>
          ⭐ {product.rating} ({product.reviewsCount} reviews)
        </p>

        <p style={{ color: product.inStock ? 'green' : 'red' }}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>

        <button
          disabled={!product.inStock}
          style={{
            ...styles.button,
            backgroundColor: product.inStock ? '#007bff' : 'gray',
            cursor: product.inStock ? 'pointer' : 'not-allowed'
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    padding: '2rem',
    flexWrap: 'wrap'
  },
  imageSection: {
    flex: '1 1 40%'
  },
  image: {
    width: '100%',
    borderRadius: '8px'
  },
  detailsSection: {
    flex: '1 1 50%'
  },
  button: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem'
  }
};

export default Product;
