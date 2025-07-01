import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AddToCartButton from './AddToCartButton'; // Adjust path as needed

const ProductPage = () => {
  const { slug } = useParams();

  // Product database - you can move this to a separate file or fetch from an API
  const products = {
    'valentines-special': {
      id: 'valentines-special', // Added unique ID for cart
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
      id: 'summer-glow', // Added unique ID for cart
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
      id: 'winter-wonderland', // Added unique ID for cart
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
      id: 'classic-red', // Added unique ID for cart
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
    },
    'season-collection': {
      id: 'season-collection', // Added unique ID for cart
      name: "Season Collectionl",
      slug: "season-collection", 
      price: 45.5,
      oldPrice: 65,
      stock: true,
      description: 'Relaxing foot treatment with nail shaping, callus removal, foot massage, and polish application.',
      features: [
        'Long-lasting gel finish',
        'Heart and floral designs',
        'UV-protective top coat',
        'Available in multiple lengths'
      ],
      images: [
        '../../asset/christmas/S2.jpeg',
        '../../asset/christmas/S2.jpeg'
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
    'stylish': {
      id: 'stylish', // Added unique ID for cart
      name: "Stylish",
      slug: "stylish", 
      price: 35,
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
        '../../asset/stylish/St1.jpeg',
        '../../asset/stylish/St1.jpeg'
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
    'cross-designs': {
      id: 'cross-designs', // Added unique ID for cart
      name: "Cross designs",
      slug: "cross-designs", 
      price: 60,
      oldPrice: 95,
      stock: true,
      description: 'Long-lasting nail extensions with a natural look using high-quality gel products',
      features: [
        'Long-lasting gel finish',
        'Heart and floral designs',
        'UV-protective top coat',
        'Available in multiple lengths'
      ],
      images: [
        '../../asset/crosses/C1.jpeg',
        '../../asset/crosses/C1.jpeg'
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
    'pink-designs': {
      id: 'pink-designs', // Added unique ID for cart
      name: "Pink designs",
      slug: "pink-designs", 
      price: 50,
      oldPrice: 65,
      stock: true,
      description: 'Custom nail designs from simple patterns to intricate artwork to express your style',
      features: [
        'Long-lasting gel finish',
        'Heart and floral designs',
        'UV-protective top coat',
        'Available in multiple lengths'
      ],
      images: [
        '../../asset/pink/P1.jpeg',
        '../../asset/pink/P1.jpeg'
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
    'summer': {
      id: 'summer', // Added unique ID for cart
      name: "Summer",
      slug: "summer", 
      price: 40,
      oldPrice: 60,
      stock: true,
      description: 'Romantic nail design with heart patterns and pink hues. Includes gel polish and topcoat for long-lasting beauty.',
      features: [
        'Long-lasting gel finish',
        'Heart and floral designs',
        'UV-protective top coat',
        'Available in multiple lengths'
      ],
      images: [
        '../../asset/summer/Su1.jpeg',
        '../../asset/summer/Su1.jpeg'
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
    'spring': {
      id: 'spring', // Added unique ID for cart
      name: "Spring",
      slug: "spring", 
      price: 75,
      oldPrice: 95,
      stock: true,
      description: 'Romantic nail design with heart patterns and pink hues. Includes gel polish and topcoat for long-lasting beauty.',
      features: [
        'Long-lasting gel finish',
        'Heart and floral designs',
        'UV-protective top coat',
        'Available in multiple lengths'
      ],
      images: [
        '../../asset/spring/Sp1.jpeg',
        '../../asset/spring/Sp1.jpeg'
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
    'minimal': {
      id: 'valentines-special', // Added unique ID for cart
      name: "Minimal",
      slug: "minimal", 
      price: 75,
      oldPrice: 95,
      stock: true,
      description: 'Romantic nail design with heart patterns and pink hues. Includes gel polish and topcoat for long-lasting beauty.',
      features: [
        'Long-lasting gel finish',
        'Heart and floral designs',
        'UV-protective top coat',
        'Available in multiple lengths'
      ],
      images: [
        '../../asset/artist simple/1.jpeg',
        '../../asset/artist simple/1.jpeg'
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

  // Prepare product object for cart (only the necessary fields)
  const cartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0] // First image as the cart thumbnail
  };

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

          {/* Updated Add to Cart Button */}
          {product.stock ? (
            <AddToCartButton 
              product={cartProduct}
              className="px-6 py-3 text-white rounded-lg shadow text-lg font-semibold"
            >
              Add to Cart - ${product.price.toFixed(2)}
            </AddToCartButton>
          ) : (
            <button
              disabled
              className="px-6 py-3 text-white rounded-lg shadow bg-gray-400 cursor-not-allowed text-lg font-semibold"
            >
              Out of Stock
            </button>
          )}
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
              <div key={key} className="bg-white shadow rounded p-4 hover:shadow-lg transition-shadow">
                <Link to={`/product/${relatedProduct.slug}`}>
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name} 
                    className="rounded h-40 w-full object-cover mb-4 cursor-pointer" 
                  />
                  <h3 className="font-bold text-lg cursor-pointer hover:text-pink-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-3">${relatedProduct.price.toFixed(2)}</p>
                </Link>
                {/* Add to Cart button for related products */}
                <AddToCartButton 
                  product={{
                    id: relatedProduct.id,
                    name: relatedProduct.name,
                    price: relatedProduct.price,
                    image: relatedProduct.images[0]
                  }}
                  className="w-full py-2 px-4 text-sm"
                >
                  Quick Add
                </AddToCartButton>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;