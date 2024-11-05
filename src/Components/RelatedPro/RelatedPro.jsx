import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import './RelatedPro.css';
import data_product from '../Assets/data_product';

const RelatedProductItem = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='product-item'>
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}> {/* Scroll on click */}
        <img src={image} alt={name} />
      </Link>
      <h3>{name}</h3>
      <p className='prices'>
        <span className='new-price'>${new_price}</span>
        {old_price && <span className='old-price'>${old_price}</span>}
      </p>
    </div>
  );
};

const RelatedPro = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => (
          <RelatedProductItem 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedPro;
