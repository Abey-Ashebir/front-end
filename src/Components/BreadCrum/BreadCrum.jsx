import React from 'react';
import './BreadCrum.css';
import arrow_icon from '../Assets/arrow-icon.jpg';

const BreadCrum = (props) => {
    const { product } = props;

    return (
        <div className='breadcrum'>
            <span>HOME</span>
            <img src={arrow_icon} alt="Arrow icon" />
            <span>SHOP</span>
            <img src={arrow_icon} alt="Arrow icon" />
            <span>{product.category}</span>
            <img src={arrow_icon} alt="Arrow icon" />
            <span>{product.name}</span>
        </div>
    );
};

export default BreadCrum;
