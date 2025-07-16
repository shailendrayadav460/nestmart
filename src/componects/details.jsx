import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CartContext from './practiceExample/cartcontext'; // Ensure this path is correct

function ProductCard() {
  const location = useLocation();
  const product = location.state;
  const { addToCart } = useContext(CartContext);

  if (!product) return <p>Product not found</p>;

  const thumbnails = product.thumbnails || [product.image];

  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="titleproduct"><h1>Product Details</h1></div>

      <div className="product-container">
        {/* Images */}
        <div className="product-images">
          <div className="main-image">
            <img src={mainImage} alt="Main Product" className="main-image" />
          </div>
          <div className="thumbnail-gallery">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="product-details">
          <span className="brand">SNEAKER COMPANY</span>
          <h2 className="title">{product.name}</h2>
          <p className="description">{product.description}</p>
          <p>
            A well-crafted e-commerce product description is more than just a list of features;
            it's a persuasive sales tool designed to inform, engage, and ultimately convert potential
            customers into buyers...
          </p>
          <ul className='p-0'>
            <li><b>Product Name:</b> {product.name}</li>
            <li><b>Key Features & Specifications:</b> Dimensions, materials, etc.</li>
            <li><b>Benefits: </b>Customer advantages</li>
            <li><b>Target Audience:</b> Who is this for?</li>
            <li><b>Use Cases:</b> Example uses</li>
            <li><b>Care Instructions:</b> If applicable</li>
            <li><b>What's included:</b> All components listed</li>
          </ul>

          <div className="price-section">
            <div className="price-box">
              <span className="price">${product.price}</span>
              <span className="discount">50%</span>
            </div>
            <div className="original-price">$250.00</div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="action-bar">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>
              🛒 Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

