// Cart.js
import React, { useContext } from 'react';
import './Cart.css';
import remove_icon from '../Assets/remove_icon.jpg';
import { ShopContext } from '../../Context/ShopContext';

const Cart = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // Calculate total price of the items in the cart
  const getTotalPrice = () => {
    return all_product.reduce((total, product) => {
      if (cartItems[product.id] > 0) {
        return total + product.new_price * cartItems[product.id];
      }
      return total;
    }, 0).toFixed(2); // Fixed to 2 decimal places
  };

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div className="cartitem-format" key={product.id}>
                <img src={product.image} alt={product.name} className='cartitem-producticon' />
                <p className='cartitem-title'>{product.name}</p>
                <p>${product.new_price}</p>
                
                {/* Quantity adjustment section */}
                <div className="cartitem-quantity-controls">
                  <button 
                    className='quantity-button minus' 
                    onClick={() => removeFromCart(product.id)} 
                    disabled={cartItems[product.id] === 0} // Disable if quantity is zero
                  >
                    -
                  </button>
                  <span className='cartitem-quantity'>{cartItems[product.id]}</span>
                  <button 
                    className='quantity-button plus' 
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>
                </div>

                <img 
                  src={remove_icon} 
                  alt="Remove Icon" 
                  className='cartitem-removeicon' 
                  onClick={() => removeFromCart(product.id)} 
                />
              </div>
            );
          }
          return null; // Only render if the product is in the cart
        })}
      </div>
      {/* Display total price below the table */}
      {Object.values(cartItems).some(quantity => quantity > 0) ? (
        <p className='cart-total'>Total: ${getTotalPrice()}</p>
      ) : (
        <p className='empty-cart'>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
