import React from 'react';
import { Link } from 'react-router-dom';
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoYoutube,
  BiLogoPlayStore,
  BiLogoApple,
  BiLink,
  BiGridAlt,
  BiEnvelope,
  BiChevronRight,
  BiMapPin,
  BiPhone,
  BiHome,
  BiLeaf,
  BiChevronUp,
  BiHeart,
  BiSearch,
  BiUserVoice,
  BiGroup
} from 'react-icons/bi';
import Logo from '../../common/Logo/Logo';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="hb-footer">
      {/* ─── Decorative Leaves ─── */}
      <div className="hb-footer-leaf hb-footer-leaf-left d-none d-xl-block">
        <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 400 C 80 300, 120 200, 100 0" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M96 350 C 50 320, 20 280, 10 230 C 40 260, 80 290, 96 350" fill="currentColor" />
          <path d="M104 300 C 150 270, 180 230, 190 180 C 160 210, 120 240, 104 300" fill="currentColor" />
          <path d="M100 240 C 60 210, 30 170, 20 120 C 50 150, 90 180, 100 240" fill="currentColor" />
          <path d="M104 180 C 140 150, 170 110, 180 60 C 150 90, 110 120, 104 180" fill="currentColor" />
          <path d="M100 120 C 70 90, 50 50, 40 0 C 70 30, 100 60, 100 120" fill="currentColor" />
          <path d="M100 0 C 90 -20, 100 -40, 100 -50 C 110 -40, 110 -20, 100 0" fill="currentColor" />
        </svg>
      </div>

      <div className="hb-footer-leaf hb-footer-leaf-right d-none d-lg-block">
        <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 400 C 120 300, 80 200, 100 0" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M104 350 C 150 320, 180 280, 190 230 C 160 260, 120 290, 104 350" fill="currentColor" />
          <path d="M96 300 C 50 270, 20 230, 10 180 C 40 210, 80 240, 96 300" fill="currentColor" />
          <path d="M100 240 C 140 210, 170 170, 180 120 C 150 150, 110 180, 100 240" fill="currentColor" />
          <path d="M96 180 C 60 150, 30 110, 20 60 C 50 90, 90 120, 96 180" fill="currentColor" />
          <path d="M100 120 C 130 90, 150 50, 160 0 C 130 30, 100 60, 100 120" fill="currentColor" />
          <path d="M100 0 C 110 -20, 100 -40, 100 -50 C 90 -40, 90 -20, 100 0" fill="currentColor" />
        </svg>
      </div>
      <div className="hb-footer-top container">
        <div className="row g-4 position-relative">

          {/* ─── Column 1: Brand & Socials ─── */}
          <div className="col-lg-4 col-md-6 hb-footer-brand">
            <Link to="/" className="text-decoration-none d-block mb-3">
              <Logo width={180} />
            </Link>
            <p className="hb-footer-text mb-4 pe-lg-4">
              <b>Every Home Has Something Worth Sharing.
                Discover authentic, handmade and home-made
                products from talented home makers.</b>
            </p>

            <div className="hb-social-links d-flex gap-2 mb-4">
              <a href="#" className="hb-social-icon"><BiLogoFacebook size={18} /></a>
              <a href="#" className="hb-social-icon"><BiLogoTwitter size={18} /></a>
              <a href="#" className="hb-social-icon"><BiLogoInstagram size={18} /></a>
              <a href="#" className="hb-social-icon"><BiLogoPinterest size={18} /></a>
              <a href="#" className="hb-social-icon"><BiLogoYoutube size={18} /></a>
            </div>

            <div className="hb-app-buttons d-flex gap-3">
              <a href="#" className="hb-app-btn">
                <BiLogoPlayStore size={24} />
                <div className="hb-app-btn-text">
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </a>
              <a href="#" className="hb-app-btn">
                <BiLogoApple size={24} />
                <div className="hb-app-btn-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </a>
            </div>
          </div>

          {/* ─── Column 2: Quick Links ─── */}
          <div className="col-lg-2 col-md-3 col-6">
            <div className="hb-footer-heading d-flex align-items-center gap-2 mb-4">
              <div className="hb-heading-icon"><BiLink size={18} /></div>
              <h5 className="mb-0 fw-bold">Quick Links</h5>
            </div>
            <ul className="list-unstyled hb-footer-links d-flex flex-column gap-3">
              <li><Link to="/about"><BiChevronRight size={16} className="hb-link-arrow" /> About Us</Link></li>
              <li><Link to="/shop"><BiChevronRight size={16} className="hb-link-arrow" /> Shop</Link></li>
              <li><Link to="/categories"><BiChevronRight size={16} className="hb-link-arrow" /> Categories</Link></li>
              <li><Link to="/contact"><BiChevronRight size={16} className="hb-link-arrow" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* ─── Column 3: Categories ─── */}
          <div className="col-lg-2 col-md-3 col-6">
            <div className="hb-footer-heading d-flex align-items-center gap-2 mb-4">
              <div className="hb-heading-icon"><BiGridAlt size={18} /></div>
              <h5 className="mb-0 fw-bold">Categories</h5>
            </div>
            <ul className="list-unstyled hb-footer-links d-flex flex-column gap-3">
              <li><Link to="/shop/food"><BiChevronRight size={16} className="hb-link-arrow" /> Food & Pickles</Link></li>
              <li><Link to="/shop/handmade"><BiChevronRight size={16} className="hb-link-arrow" /> Handmade Crafts</Link></li>
              <li><Link to="/shop/decor"><BiChevronRight size={16} className="hb-link-arrow" /> Art & Decor</Link></li>
              <li><Link to="/shop/clothing"><BiChevronRight size={16} className="hb-link-arrow" /> Clothing</Link></li>
            </ul>
          </div>

          {/* ─── Column 4: Contact Info & Features ─── */}
          <div className="col-lg-4 col-md-6">
            <div className="hb-footer-heading d-flex align-items-center gap-2 mb-4">
              <div className="hb-heading-icon"><BiEnvelope size={18} /></div>
              <h5 className="mb-0 fw-bold">Contact Info</h5>
            </div>
            <ul className="list-unstyled hb-footer-contact d-flex flex-column gap-4">
              <li className="d-flex gap-3">
                <BiMapPin size={20} className="hb-contact-icon flex-shrink-0 mt-1" />
                <span>Visakhapatnam, Andhra Pradesh,<br />India</span>
              </li>
              <li className="d-flex gap-3 align-items-center">
                <BiEnvelope size={20} className="hb-contact-icon flex-shrink-0" />
                <span>hello@homebazz.com</span>
              </li>
              <li className="d-flex gap-3 align-items-center">
                <BiPhone size={20} className="hb-contact-icon flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>

            {/* ─── Small Features Section ─── */}
            <div className="hb-footer-features mt-4 pt-4" style={{ borderTop: '1px solid rgba(123, 97, 201, 0.2)' }}>
              <div className="d-flex flex-wrap gap-2 gap-sm-3 mb-2">
                <div className="hb-feature-item">
                  <div className="hb-feature-icon-wrapper small">
                    <BiSearch size={18} />
                  </div>
                  <span className="hb-feature-title small">Discover</span>
                </div>
                <div className="hb-feature-item">
                  <div className="hb-feature-icon-wrapper small">
                    <BiHeart size={18} />
                  </div>
                  <span className="hb-feature-title small">Support</span>
                </div>
                <div className="hb-feature-item">
                  <div className="hb-feature-icon-wrapper small">
                    <BiUserVoice size={18} />
                  </div>
                  <span className="hb-feature-title small">Empower</span>
                </div>
                <div className="hb-feature-item">
                  <div className="hb-feature-icon-wrapper small">
                    <BiLeaf size={18} />
                  </div>
                  <span className="hb-feature-title small">Sustain</span>
                </div>
                <div className="hb-feature-item">
                  <div className="hb-feature-icon-wrapper small">
                    <BiGroup size={18} />
                  </div>
                  <span className="hb-feature-title small">Belong</span>
                </div>
              </div>
              <p className="hb-feature-tagline small mt-3 mb-0" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                A MARKETPLACE FOR HOMEGROWN PRODUCTS,<br /> PEOPLE AND POSSIBILITIES.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Bar with Wave ─── */}
      <div className="hb-footer-bottom-wrapper">
        <svg className="hb-footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="#5E35B1" fillOpacity="1" d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          <path fill="#7B61C9" fillOpacity="0.4" d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,80C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>

        <div className="hb-footer-bottom">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

            <div className="d-flex align-items-center gap-3 hb-bottom-left">
              <BiHome size={22} className="text-white" />
              <span className="hb-copyright">&copy; {new Date().getFullYear()} HomeBazz. All rights reserved.</span>
            </div>

            <div className="hb-bottom-center d-none d-lg-flex align-items-center gap-2">
              <BiLeaf size={16} />
              <div className="hb-dots">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-4 hb-bottom-right">
              <div className="hb-legal-links">
                <Link to="/privacy">Privacy Policy</Link>
                <span className="mx-3 opacity-50">|</span>
                <Link to="/terms">Terms of Service</Link>
              </div>
              <button className="hb-back-to-top" onClick={scrollToTop} aria-label="Back to top">
                <BiChevronUp size={24} />
              </button>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
