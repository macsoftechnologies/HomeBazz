import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiHeart, BiCart, BiX, BiMenuAltRight } from 'react-icons/bi';
import Logo from '../../common/Logo/Logo';
import AuthModal from '../../common/AuthModal/AuthModal';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openLogin  = () => { setAuthTab('login');  setAuthOpen(true); setIsMenuOpen(false); };
  const openSignup = () => { setAuthTab('signup'); setAuthOpen(true); setIsMenuOpen(false); };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'hb-nav-link hb-nav-link--active' : 'hb-nav-link';

  return (
    <>
      <header className={`hb-header${scrolled ? ' hb-header--scrolled' : ''}`}>
        <div className="hb-header__inner container">

          {/* ── Logo ── */}
          <Link to="/" className="hb-logo">
            <Logo width={96} />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hb-desktop-nav">
            <NavLink to="/"           end className={navLinkClass}>Home</NavLink>
            <NavLink to="/shop"           className={navLinkClass}>Shop</NavLink>
            <NavLink to="/categories"     className={navLinkClass}>Categories</NavLink>
            <NavLink to="/about"          className={navLinkClass}>About</NavLink>
            <NavLink to="/contact"        className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* ── Right Actions ── */}
          <div className="hb-actions">
            {/* Icon strip */}
            <div className="hb-icon-strip">
              <Link to="/wishlist" className="hb-icon-btn" title="Wishlist">
                <BiHeart size={22} />
              </Link>
              <Link to="/cart" className="hb-icon-btn hb-cart-btn" title="Cart">
                <BiCart size={22} />
                <span className="hb-cart-badge">2</span>
              </Link>
            </div>

            {/* Auth buttons — desktop */}
            <div className="hb-auth-btns d-none d-md-flex">
              <button className="hb-btn-login"  onClick={openLogin}>Login</button>
              <button className="hb-btn-signup" onClick={openSignup}>Sign Up</button>
            </div>

            {/* Hamburger */}
            <button
              className={`hb-hamburger d-md-none${isMenuOpen ? ' open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <BiX size={26} /> : <BiMenuAltRight size={26} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <div className={`hb-mobile-menu${isMenuOpen ? ' open' : ''}`}>
          <nav className="hb-mobile-nav">
            <NavLink to="/"       end className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/shop"       className={navLinkClass} onClick={toggleMenu}>Shop</NavLink>
            <NavLink to="/categories" className={navLinkClass} onClick={toggleMenu}>Categories</NavLink>
            <NavLink to="/about"      className={navLinkClass} onClick={toggleMenu}>About</NavLink>
            <NavLink to="/contact"    className={navLinkClass} onClick={toggleMenu}>Contact</NavLink>
          </nav>
          <div className="hb-mobile-auth">
            <button className="hb-btn-login  w-100" onClick={openLogin}>Login</button>
            <button className="hb-btn-signup w-100" onClick={openSignup}>Sign Up</button>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultTab={authTab}
      />
    </>
  );
};

export default Header;
