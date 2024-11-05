import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { all_product, cartItems } = useContext(ShopContext);

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
    <div className='checkout-page'>
      <h1>Checkout</h1>
      <div className='checkout-summary'>
        {all_product.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div className='checkout-item' key={product.id}>
                <img src={product.image} alt={product.name} className='checkout-item-image' />
                <p>{product.name}</p>
                <p>Quantity: {cartItems[product.id]}</p>
                <p>Price: ${product.new_price}</p>
              </div>
            );
          }
          return null;
        })}
        <div className="checkout-total">
          <h3>Total: ${getTotalPrice()}</h3>
        </div>
      </div>
      
      {/* Payment Options */}
      <div className="payment-options">
        <h2>Choose Payment Method</h2>
        <button className="payment-btn cbe">Pay with Commercial Bank of Ethiopia</button>
        <button className="payment-btn telebirr">Pay with Telebirr</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
