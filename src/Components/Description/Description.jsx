import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className='description-box'>
        <div className="description-navigator">
            <div className="description-nav-box active">Description</div>
            <div className="description-nav-fade">Reviews (122)</div>
        </div>
        <div className="description-content">
            <p>
                E-commerce sites provide a platform for buyers and sellers to engage in commerce online. They allow consumers to browse a wide range of products from the comfort of their homes and purchase them with just a few clicks. As technology evolves, e-commerce platforms are becoming more sophisticated, offering personalized experiences, seamless transactions, and enhanced security features.
            </p>
            <p>
                With the rapid growth of mobile commerce, consumers are increasingly using their smartphones to shop online. This trend has led to the development of mobile-friendly websites and applications, making it easier for shoppers to find and buy products on the go. Furthermore, the integration of artificial intelligence in e-commerce is revolutionizing the way businesses interact with customers, providing tailored recommendations and improving customer service.
            </p>
        </div>
    </div>
  );
};

export default Description;
