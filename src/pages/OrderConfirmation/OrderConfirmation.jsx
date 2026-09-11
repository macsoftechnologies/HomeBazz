import React from 'react';
import { Link } from 'react-router-dom';
import { BiCheck, BiRightArrowAlt, BiLeaf } from 'react-icons/bi';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const orderNumber = 'HB123456';

  return (
    <div className="order-confirm-page">
      <div className="container">
        <div className="order-confirm-card">
          
          {/* Success Icon with Confetti */}
          <div className="d-flex justify-content-center">
            <div className="success-icon-wrap">
              <div className="success-bg-circle"></div>

              {/* Confetti decorations */}
              <span className="confetti-star s1">✦</span>
              <span className="confetti-star s2">✧</span>
              <span className="confetti-star s3">✦</span>
              <span className="confetti-star s4">✧</span>
              <div className="confetti-dot d1"></div>
              <div className="confetti-dot d2"></div>
              <div className="confetti-dash da1"></div>
              <div className="confetti-dash da2"></div>

              <div className="success-circle">
                <BiCheck size={52} strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Success Text */}
          <h1 className="order-confirm-title">Order Placed Successfully!</h1>
          <p className="order-confirm-subtitle">
            Your order <span className="order-number">#{orderNumber}</span> has been placed.
          </p>

          {/* Action Buttons */}
          <Link to="/shop" className="order-view-btn">
            View Order Details <BiRightArrowAlt size={22} />
          </Link>
          <Link to="/shop" className="order-continue-link">
            Continue Shopping
          </Link>

          {/* Thank You Card */}
          <div className="order-thankyou-card">
            <div className="order-thankyou-house">🏠</div>
            <div className="order-thankyou-text">
              <h4>Thank you for supporting home makers!</h4>
              <p>Together we make homes happier 💜</p>
            </div>
            <BiLeaf className="order-thankyou-leaf" size={80} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
