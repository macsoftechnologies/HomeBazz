import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCart, BiTrash, BiHeart, BiMinus, BiPlus, BiRightArrowAlt, BiLeaf } from 'react-icons/bi';
import { MdLocalShipping } from 'react-icons/md';
import './Cart.css';

// Dummy cart items
const initialCartItems = [
  {
    id: 'p1',
    name: 'Gongura Pickle',
    price: 250,
    qty: 1,
    image: 'https://images.unsplash.com/photo-1599321955726-e048426594af?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'Mango Pickle',
    price: 220,
    qty: 1,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'Lemon Pickle',
    price: 200,
    qty: 1,
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=200&auto=format&fit=crop',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate();

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">

        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">
            <div className="cart-title-icon">
              <BiCart size={28} />
            </div>
            <h1>Your Cart ({cartItems.length})</h1>
          </div>
          <button className="cart-clear-btn" onClick={() => setCartItems([])}>
            <BiTrash size={16} /> Clear Cart
          </button>
        </div>

        <div className="row g-4 align-items-start">

          {/* Cart Items */}
          <div className="col-lg-7">
            <div className="cart-items-card">
              {cartItems.length === 0 ? (
                <div className="text-center py-5">
                  <BiCart size={60} className="text-muted mb-3" />
                  <h5 className="text-muted">Your cart is empty</h5>
                  <Link to="/shop" className="checkout-btn mt-3 d-inline-flex" style={{ width: 'auto', padding: '12px 32px' }}>
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                cartItems.map(item => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-price">₹{item.price}</div>
                    </div>
                    <div className="cart-item-controls">
                      <div className="cart-qty-wrap">
                        <button className="cart-qty-btn" onClick={() => updateQty(item.id, -1)}>
                          <BiMinus size={14} />
                        </button>
                        <span className="cart-qty-val">{item.qty}</span>
                        <button className="cart-qty-btn" onClick={() => updateQty(item.id, 1)}>
                          <BiPlus size={14} />
                        </button>
                      </div>
                      <button className="cart-item-icon-btn wishlist">
                        <BiHeart size={18} />
                      </button>
                      <button className="cart-item-icon-btn delete" onClick={() => removeItem(item.id)}>
                        <BiTrash size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Promo Banner */}
            <div className="cart-promo-banner">
              <MdLocalShipping className="cart-promo-icon" size={52} />
              <div className="cart-promo-text">
                <h5>Free Shipping on orders above ₹999</h5>
                <p>Good Food Brings Good Mood!</p>
              </div>
              <BiLeaf className="cart-promo-leaf" size={80} />
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-5">
            <div className="order-summary-card">
              <div className="order-summary-title">Order Summary</div>
              <div className="order-summary-row">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="order-summary-row">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="order-summary-divider"></div>
              <div className="order-summary-total">
                <span>Total</span>
                <span className="order-summary-total-val">₹{total}</span>
              </div>
              <Link to="/checkout" className="checkout-btn">
                Proceed to Checkout <BiRightArrowAlt size={22} />
              </Link>
              <Link to="/shop" className="continue-shopping-link">Continue Shopping</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
