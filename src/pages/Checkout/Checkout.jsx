import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiMap, BiPhone, BiUser, BiBuilding, BiLock, BiRightArrowAlt, BiShoppingBag, BiCheck, BiLeaf } from 'react-icons/bi';
import { MdLocalShipping } from 'react-icons/md';
import './Checkout.css';

const cartItems = [
  {
    id: 'p1', name: 'Gongura Pickle', price: 250, qty: 1,
    image: 'https://images.unsplash.com/photo-1599321955726-e048426594af?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'p2', name: 'Mango Pickle', price: 220, qty: 1,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'p3', name: 'Lemon Pickle', price: 200, qty: 1,
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=200&auto=format&fit=crop',
  },
];
const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
const shipping = 50;
const total = subtotal + shipping;

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: 'Sankar Rao',
    mobile: '9876543210',
    address: '12-4-45, Beach Road',
    city: 'Visakhapatnam',
    pincode: '530016',
    saveAddress: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout-page">
      <div className="container">

        {/* Progress Stepper */}
        <div className="checkout-stepper">
          <div className="stepper-step">
            <div className="stepper-circle active">1</div>
            <span className="stepper-label active">Shipping</span>
          </div>
          <div className="stepper-line"></div>
          <div className="stepper-step">
            <div className="stepper-circle">2</div>
            <span className="stepper-label">Payment</span>
          </div>
          <div className="stepper-line"></div>
          <div className="stepper-step">
            <div className="stepper-circle">3</div>
            <span className="stepper-label">Review</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-4 align-items-start">

            {/* Left: Shipping Form */}
            <div className="col-lg-7">
              <div className="checkout-section-card">
                <div className="checkout-section-header">
                  <div className="checkout-section-icon">
                    <BiMap size={22} />
                  </div>
                  <div>
                    <h3>Shipping Address</h3>
                    <p>Enter your delivery details</p>
                  </div>
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-form-label">Full Name</label>
                  <div className="checkout-input-wrap">
                    <BiUser className="checkout-input-icon" />
                    <input className="checkout-input" type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                  </div>
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-form-label">Mobile Number</label>
                  <div className="checkout-input-wrap">
                    <BiPhone className="checkout-input-icon" />
                    <input className="checkout-input" type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter mobile number" required />
                  </div>
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-form-label">Address</label>
                  <div className="checkout-input-wrap">
                    <BiBuilding className="checkout-input-icon" />
                    <input className="checkout-input" type="text" name="address" value={form.address} onChange={handleChange} placeholder="House No., Street, Area" required />
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-7">
                    <div className="checkout-form-group mb-0">
                      <label className="checkout-form-label">City</label>
                      <div className="checkout-input-wrap">
                        <BiBuilding className="checkout-input-icon" />
                        <input className="checkout-input" type="text" name="city" value={form.city} onChange={handleChange} placeholder="City" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="checkout-form-group mb-0">
                      <label className="checkout-form-label">Pincode</label>
                      <div className="checkout-input-wrap">
                        <BiMap className="checkout-input-icon" />
                        <input className="checkout-input" type="text" name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="checkout-checkbox-row mt-4">
                  <input type="checkbox" id="saveAddress" name="saveAddress" checked={form.saveAddress} onChange={handleChange} />
                  <label htmlFor="saveAddress">Save this address for future orders</label>
                </div>
              </div>

              {/* Promo Banner */}
              <div className="checkout-promo-banner">
                <MdLocalShipping className="checkout-promo-icon" size={52} />
                <div className="checkout-promo-text">
                  <h5>Safe &amp; Fast Delivery</h5>
                  <p>Your favorite homemade products at your doorstep!</p>
                </div>
                <BiLeaf className="checkout-promo-leaf" size={80} />
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="col-lg-5">
              <div className="checkout-order-summary">
                <div className="checkout-section-header">
                  <div className="checkout-section-icon">
                    <BiShoppingBag size={22} />
                  </div>
                  <div>
                    <h3>Order Summary</h3>
                    <p>Review your items</p>
                  </div>
                </div>

                {cartItems.map(item => (
                  <div className="checkout-summary-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="checkout-summary-img" />
                    <div className="checkout-summary-item-info">
                      <div className="checkout-summary-item-name">{item.name}</div>
                      <div className="checkout-summary-item-price">₹{item.price}</div>
                    </div>
                    <span className="checkout-summary-item-qty">x {item.qty}</span>
                  </div>
                ))}

                <div className="checkout-summary-divider"></div>
                <div className="checkout-summary-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
                <div className="checkout-summary-row"><span>Shipping</span><span>₹{shipping}</span></div>
                <div className="checkout-summary-total"><span>Total</span><span>₹{total}</span></div>

                <button type="submit" className="checkout-pay-btn">
                  <BiLock size={20} /> Continue to Payment <BiRightArrowAlt size={22} />
                </button>
                <Link to="/cart" className="checkout-continue-link">Continue Shopping</Link>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
