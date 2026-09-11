import React, { useState, useEffect } from 'react';
import { BiX, BiLock, BiUser, BiPhone, BiEnvelope, BiShow, BiHide } from 'react-icons/bi';
import Logo from '../Logo/Logo';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showPassword, setShowPassword] = useState(false);

  // Sync tab whenever modal opens or defaultTab changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setShowPassword(false);
    }
  }, [isOpen, defaultTab]);

  if (!isOpen) return null;

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">

        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose} aria-label="Close">
          <BiX size={22} />
        </button>

        {/* Logo */}
        <div className="text-center mb-3">
          <Logo width={110} />
        </div>

        {/* Tabs */}
        <div className="auth-tabs mb-4">
          <button
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* ─── LOGIN ─── */}
        {activeTab === 'login' && (
          <div className="auth-form-wrap">
            <h5 className="auth-form-title">Welcome Back!</h5>
            <p className="auth-form-subtitle">Login to your HomeBazz account</p>

            <div className="auth-input-group">
              <span className="auth-input-icon"><BiEnvelope size={18} /></span>
              <input type="text" placeholder="Mobile Number / Email" className="auth-input" />
            </div>

            <div className="auth-input-group">
              <span className="auth-input-icon"><BiLock size={18} /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="auth-input"
              />
              <button className="auth-input-eye" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiHide size={18} /> : <BiShow size={18} />}
              </button>
            </div>

            <div className="text-end mb-3">
              <a href="#" className="auth-forgot">Forgot Password?</a>
            </div>

            <button className="auth-submit-btn w-100">Login</button>

            <p className="auth-switch-text">
              Don't have an account?{' '}
              <button className="auth-switch-link" onClick={() => setActiveTab('signup')}>Sign Up</button>
            </p>
          </div>
        )}

        {/* ─── SIGN UP ─── */}
        {activeTab === 'signup' && (
          <div className="auth-form-wrap">
            <h5 className="auth-form-title">Join HomeBazz!</h5>
            <p className="auth-form-subtitle">Create your account and support home makers</p>

            <div className="auth-input-group">
              <span className="auth-input-icon"><BiUser size={18} /></span>
              <input type="text" placeholder="Full Name" className="auth-input" />
            </div>

            <div className="auth-input-group">
              <span className="auth-input-icon"><BiPhone size={18} /></span>
              <input type="tel" placeholder="Mobile Number" className="auth-input" />
            </div>

            <div className="auth-input-group">
              <span className="auth-input-icon"><BiEnvelope size={18} /></span>
              <input type="email" placeholder="Email Address" className="auth-input" />
            </div>

            <div className="auth-input-group">
              <span className="auth-input-icon"><BiLock size={18} /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create Password"
                className="auth-input"
              />
              <button className="auth-input-eye" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiHide size={18} /> : <BiShow size={18} />}
              </button>
            </div>

            <button className="auth-submit-btn w-100 mt-1">Create Account</button>

            <p className="auth-switch-text">
              Already have an account?{' '}
              <button className="auth-switch-link" onClick={() => setActiveTab('login')}>Login</button>
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AuthModal;
