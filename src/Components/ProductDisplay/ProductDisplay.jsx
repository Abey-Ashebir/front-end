import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Corrected import of useNavigate
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const navigate = useNavigate(); // Corrected position of useNavigate

    const { product } = props;
    const location = useLocation(); // Access route's state

    // Get selectedImage from location state if available, else fallback to product.image
    const initialImage = location.state?.selectedImage || product.image;
    const [mainImage, setMainImage] = useState(initialImage); // Set initial image

    const handleThumbnailClick = (image) => {
        setMainImage(image); // Update main image on thumbnail click
    };

    const { addToCart } = useContext(ShopContext);

    // Handle checkout navigation
    const handleCheckout = () => {
        navigate('/checkout'); // Redirect to checkout page
    };

    return (
        <div className='product-display'>
            <div className='product-display-left'>
                <div className="product-display-img-list">
                    {/* Update main image on thumbnail click */}
                    <img className='thumbnail small' 
                         src={product.image} 
                         alt="Product Thumbnail" 
                         onClick={() => handleThumbnailClick(product.image)} />
                    <img className='thumbnail medium' 
                         src={product.image} 
                         alt="Product Thumbnail" 
                         onClick={() => handleThumbnailClick(product.image)} />
                    <img className='thumbnail large' 
                         src={product.image} 
                         alt="Product Thumbnail" 
                         onClick={() => handleThumbnailClick(product.image)} />
                    <img className='thumbnail very-large' 
                         src={product.image} 
                         alt="Product Thumbnail" 
                         onClick={() => handleThumbnailClick(product.image)} />
                </div>
            </div>

            <div className='product-display-main'>
                {/* Display the selected main image */}
                <img className='main-img' src={mainImage} alt="Main Product" />
            </div>

            <div className='product-display-right'>
                <h1>{product.name}</h1>
                <div className="product-display-rating">
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_dull} alt="Dull Star Icon" />
                    <p>(122 reviews)</p>
                </div>

                <div className="product-display-price">
                    <div className="product-display-price-old">${product.old_price}</div>
                    <div className="product-display-price-new">${product.new_price}</div>
                </div>

                {/* All images in the product-display-right section update with the clicked image */}
                <div className="product-display-images">
                    <img className="small-img" src={mainImage} alt="Selected Product" />
                    <img className="medium-img" src={mainImage} alt="Selected Product" />
                    <img className="large-img" src={mainImage} alt="Selected Product" />
                </div>

                <div className="product-display-description">
                    In the world of fashion, the experience of shopping for clothing transcends mere necessity; it becomes a journey of self-expression and creativity. From the moment one steps into a vibrant boutique or navigates through an online store, a myriad of choices unfolds. Each piece of clothing tells a story, reflecting the latest trends, timeless classics, or the artistry of a passionate designer.
                </div>

                <div className="product-display-size">
                    <h2>Select Size</h2>
                    <div className="product-display-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button onClick={() => addToCart(product.id)} className="add-to-cart">Add To Cart</button>
                <p className='product-display-category'><span>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className='product-display-tags'><span>Tags:</span> Modern, Latest</p>

                {/* Proceed to Checkout button */}
                <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
