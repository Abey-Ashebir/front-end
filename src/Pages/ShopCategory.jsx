import React, { useContext } from 'react';
import './CSS/ShopCattegory.css';
import Item from '../Components/Items/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <div className='banner-container'>
        <img className='side-image' src={props.sideImage} alt="Side Banner" />
        <video className='shopcategory-banner' autoPlay loop muted>
          <source src={props.banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12 </span> out of {all_product.length} Products
        </p>
        <div className="shopcattegory-sort">
          sort by 
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcattegory-loadmore">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
