import './Offer.css';
import exclusive_image from '../Assets/p2_img.png';

const Offers = () => {
  return (
    <div className='offer'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>offers for you</h1>
            <p>ONLY ON BEST FOR YOU</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="Exclusive Offers" />
        </div>
    </div>
  )
}

export default Offers;
