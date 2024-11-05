import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/NavBar/NavBar'; // Adjust the path if necessary
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import men_banner from './Components/Assets/banner.mp4';
import womens_banner from './Components/Assets/banner.mp4';
import kids_banner from './Components/Assets/banner.mp4';
import men_sideImg from './Components/Assets/mens_banner.jpg';
import kid_sideImg from './Components/Assets/kids_banner.jpg';
import women_sideImg from './Components/Assets/womens_banner.jpg';
import Footer from './Components/Footer/Footer';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import CheckoutPage from './Components/CheckOut/CheckoutPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar onLogout={handleLogout} />} {/* Show Navbar only when logged in */}
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<LoginSignUp onLogin={handleLogin} />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any unknown path to login */}
          </>
        ) : (
          <>
            <Route path="/shop" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} sideImage={men_sideImg} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={womens_banner} sideImage={women_sideImg} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kids_banner} sideImage={kid_sideImg} category="kid" />} />

            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="*" element={<Navigate to="/shop" />} /> {/* Redirect unknown path to shop */}
          </>
        )}
      </Routes>
      {isLoggedIn && <Footer />} {/* Show Footer only when logged in */}
    </BrowserRouter>
  );
}

export default App;
