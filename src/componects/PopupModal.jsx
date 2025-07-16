
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const PopupModal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Snack'); 
  };


  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Optionally add a timer to auto-close after some seconds
    // setTimeout(() => setShowModal(false), 1000);
  }, []);

  if (!showModal) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={handleClose}>
          <IoClose size={24} />
        </button>
        <div className="popup-content">
          <div className="popup-left">
            <p className="deal-text">Deal of the Day</p>
            <h2>Organic fruit for<br />your family's health</h2>
            <div className="price-row-e">
              <span className="main-price">$38</span>
              <span className="discount">26% Off</span>
              <del className="old-price">$52</del>
            </div>
            <p>Hurry Up! Offer End In:</p>
            <div className="timer">
              <div><strong>00</strong><span>Days</span></div>
              <div><strong>00</strong><span>Hours</span></div>
              <div><strong>00</strong><span>Mins</span></div>
              <div><strong>00</strong><span>Sec</span></div>
            </div>
            <div className="ratinghh">
              ⭐⭐⭐⭐⭐ <span>(32 rates)</span>
            </div>
            <button className="shop-btn" onClick={handleClick} variant="success" >Shop Now →</button>
          </div>
          <div className="popup-right">
            <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/popup-1.png" alt="fruit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
