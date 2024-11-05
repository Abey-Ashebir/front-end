import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import './Item.css'; // Ensure you have appropriate styles

const Item = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="items-container">
            <Link to={`/product/${id}`}>
                <img onClick={() => window.scrollTo(0, 0)} src={image} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
            </Link>
            <div className="description">{name}</div>
            <div className="price new-price">${new_price}</div> {/* Optional: Added class for styling */}
            {old_price && <div className="price old-price">${old_price}</div>} {/* Conditional rendering */}
        </div>
    );
};

export default Item;
