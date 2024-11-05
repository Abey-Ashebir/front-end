import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/footer_logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import Pinterrest_icon from '../Assets/pinterest_icon.jpg';
import github_icon from '../Assets/github_icon.png';
import linkedin_icon from '../Assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo" />
        <p>ABEY</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container instagram">
          <span className="social-text">Instagram</span>
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container pinterest">
          <span className="social-text">Pinterest</span>
          <img src={Pinterrest_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container whatsapp">
          <span className="social-text">GitHub</span>
          <img src={github_icon} alt="Git-Hub" />
        </div>
        <div className="footer-icons-container linkedin">
          <span className="social-text">Linkedin</span>
          <img src={linkedin_icon} alt="Git-Hub" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
