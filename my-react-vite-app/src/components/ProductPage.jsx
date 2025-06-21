import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { slug } = useParams();

  // Product database - you can move this to a separate file or fetch from an API
  const products = {
    'valentines-special': {
      name: "Valentine's Special",
      slug: "valentines-special", 
      price: 45.5,
      oldPrice: 65,
      stock: true,
      description: 'Romantic nail design with heart patterns and pink hues. Includes gel polish and topcoat for long-lasting beauty.',
      features: [
        'Long-lasting gel finish',
        'Heart and floral designs',
        'UV-protective top coat',
        'Available in multiple lengths'
      ],
      images: [
        '../../asset/christmas/S8.jpeg',
        '../../asset/christmas/S8.jpeg'
      ],
      reviews: [
        {
          name: 'Jane D.',
          rating: 5,
          comment: 'Absolutely loved it! My nails have never looked better.'
        },
        {
          name: 'Tina A.',
          rating: 4,
          comment: 'Very cute design. Lasted over two weeks!'
        }
      ]
    },
    'summer-glow': {
      name: "Summer Glow",
      slug: "summer-glow",
      price: 44.0,
      oldPrice: 60,
      stock: true,
      description: 'Bright and vibrant summer nail design with tropical colors. Perfect for beach days and sunny weather.',
      features: [
        'Tropical color palette',
        'Fade-resistant formula',
        'Quick-dry technology',
        'Chip-resistant coating'
      ],
      images: [
       '../../asset/summer/Su4.jpeg',
        '../../asset/summer/Su4.jpeg'
      ],
      reviews: [
        {
          name: 'Sarah M.',
          rating: 5,
          comment: 'Perfect for summer! The colors are so vibrant.'
        },
        {
          name: 'Lisa K.',
          rating: 4,
          comment: 'Love the tropical vibes. Lasted my entire vacation!'
        }
      ]
    },
    'winter-wonderland': {
      name: "Winter Wonderland",
      slug: "winter-wonderland",
      price: 45.0,
      oldPrice: 62,
      stock: true,
      description: 'Elegant winter-themed nail art with snowflake patterns and cool blue tones. Perfect for the holiday season.',
      features: [
        'Snowflake and winter patterns',
        'Cool blue and silver tones',
        'Holiday-ready design',
        'Long-lasting winter formula'
      ],
      images: [
        '../../asset/artist simple/16.jpeg',
        '../../asset/artist simple/16.jpeg'
        
      ],
      reviews: [
        {
          name: 'Emma R.',
          rating: 5,
          comment: 'Beautiful winter design! Perfect for the holidays.'
        },
        {
          name: 'Anna C.',
          rating: 4,
          comment: 'Loved the snowflake details. Very festive!'
        }
      ]
    },
    'classic-red': {
      name: "Classic Red",
      slug: "classic-red", 
      price: 39.0,
      oldPrice: 55,
      stock: true,
      description: 'Timeless classic red nail polish with a glossy finish. A staple color that never goes out of style.',
      features: [
        'Classic red color',
        'High-gloss finish',
        'Professional quality',
        'Long-wearing formula'
      ],
      images: [
        '../../asset/artist simple/16.jpeg',
        '../../asset/artist simple/16.jpeg'
        
      ],
      reviews: [
        {
          name: 'Maria L.',
          rating: 5,
          comment: 'The perfect red! Classic and elegant.'
        },
        {
          name: 'Jennifer P.',
          rating: 4,
          comment: 'Great quality red polish. Very professional looking.'
        }
      ]
    }
  };

  // Get the product based on the slug, or show a default/not found message
  const product = products[slug];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find the product you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Images */}
        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="flex gap-4 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product preview ${idx + 1}`}
                className="w-20 h-20 object-cover rounded border cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className="mb-4">
            <span className="text-pink-600 text-2xl font-semibold">${product.price.toFixed(2)}</span>
            <span className="text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <ul className="mb-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                ✅ {feature}
              </li>
            ))}
          </ul>

          <p className={`mb-4 font-medium ${product.stock ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock ? 'In Stock' : 'Out of Stock'}
          </p>

          <button
            disabled={!product.stock}
            className={`px-6 py-3 text-white rounded-lg shadow ${
              product.stock
                ? 'bg-pink-600 hover:bg-pink-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Customer Reviews</h2>
        <div className="space-y-6">
          {product.reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded shadow">
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      
     {/* Related Products */}
<div className="mt-16">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800">You may also like</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {Object.entries(products)
      .filter(([key]) => key !== slug) // Exclude current product
      .slice(0, 3) // Show only 3 related products
      .map(([key, relatedProduct]) => (
        <Link to={`/product/${relatedProduct.slug}`} key={key}>
          <div className="bg-white shadow rounded p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <img src={relatedProduct.images[0]} alt={relatedProduct.name} className="rounded h-40 w-full object-cover mb-4" />
            <h3 className="font-bold text-lg">{relatedProduct.name}</h3>
            <p className="text-pink-600 font-semibold">${relatedProduct.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
  </div>
</div>
    </div>
  );
};

export default ProductPage;