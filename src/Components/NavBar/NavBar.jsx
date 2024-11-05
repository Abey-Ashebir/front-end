import React, { useContext, useState } from 'react';
import './NavBar.css';
import cart_icon from '../Assets/cart-icon.jpg';
import logo from '../Assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { ShopContext } from '../../Context/ShopContext'; // Import the context

const NavBar = ({ onLogout }) => { // Accept onLogout as a prop
  const { cartItems } = useContext(ShopContext); // Access cart items from context
  const [menu, setMenu] = useState('shop');
  const navigate = useNavigate(); // Use navigate for redirecting

  // Function to calculate total items in the cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const handleLogout = () => {
    onLogout(); // Call the logout function passed as prop
    navigate('/'); // Redirect to the login/signup page
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <div className='navBar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => { setMenu('shop'); handleLinkClick(); }}>
          <Link to='/shop' style={{ textDecoration: 'none', color: 'inherit' }}>
            Shop
          </Link>
          {menu === 'shop' && <hr />}
        </li>
        <li onClick={() => { setMenu('Men'); handleLinkClick(); }}>
          <Link to='/mens' style={{ textDecoration: 'none', color: 'inherit' }}>
            Men
          </Link>
          {menu === 'Men' && <hr />}
        </li>
        <li onClick={() => { setMenu('Women'); handleLinkClick(); }}>
          <Link to='/womens' style={{ textDecoration: 'none', color: 'inherit' }}>
            Women
          </Link>
          {menu === 'Women' && <hr />}
        </li>
        <li onClick={() => { setMenu('Kids'); handleLinkClick(); }}>
          <Link to='/kids' style={{ textDecoration: 'none', color: 'inherit' }}>
            Kids
          </Link>
          {menu === 'Kids' && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <button className='nav-login-button' onClick={handleLogout}>
          LogOut
        </button>
        <Link to='/cart' style={{ textDecoration: 'none' }} className='nav-cart-link'>
          <img src={cart_icon} onClick={handleLinkClick()} alt="Cart"  className='nav-cart-icon' />
          <div className='nav-cart-count'>{getTotalCartItems()}</div> {/* Display total items */}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
