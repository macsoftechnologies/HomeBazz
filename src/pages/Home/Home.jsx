import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, featuredCategories, trustFeatures, products } from '../../data/dummyData';
import { BiRightArrowAlt, BiChevronRight, BiStar, BiFoodTag } from 'react-icons/bi';
import { MdLocalFireDepartment } from 'react-icons/md';
import { BiRestaurant, BiGift, BiHomeHeart, BiCloset, BiDiamond, BiShoppingBag } from 'react-icons/bi';
import { BiLeaf, BiHome, BiShieldAlt2, BiCreditCard, BiPackage, BiSupport } from 'react-icons/bi';
import homeBannerImage from '../../assets/images/Homebanner.png';
import './Home.css';

const categoryIcons = {
  'BiFoodMenu': <BiRestaurant size={32} />,
  'BiGift': <BiGift size={32} />,
  'BiHomeHeart': <BiHomeHeart size={32} />,
  'BiCloset': <BiCloset size={32} />,
  'BiDiamond': <BiDiamond size={32} />,
  'BiShoppingBag': <BiShoppingBag size={32} />
};

const trustIcons = {
  'BiLeaf': <BiLeaf size={30} />,
  'BiHome': <BiHome size={30} />,
  'BiShieldAlt2': <BiShieldAlt2 size={30} />,
  'BiCreditCard': <BiCreditCard size={30} />,
  'BiPackage': <BiPackage size={30} />,
  'BiSupport': <BiSupport size={30} />,
};

const promoCards = [
  {
    id: 'promo1',
    title: 'Traditional Andhra Foods',
    subtitle: 'Taste the authentic flavors of home made food.',
    btnText: 'Explore Now',
    link: '/shop?cat=food',
    image: '/promos/andhra-food.jpg',
    theme: 'dark',   // dark overlay + white text
  },
  {
    id: 'promo2',
    title: 'Handmade With Love',
    subtitle: 'Unique products crafted by home makers.',
    btnText: 'Shop Handmade',
    link: '/shop?cat=handmade',
    image: '/promos/handmade.jpg',
    theme: 'light',  // light bg + dark text
  },
  {
    id: 'promo3',
    title: 'Special Offers',
    subtitle: 'Up to 30% Off on Selected Products',
    btnText: 'Shop Now',
    link: '/shop?sale=true',
    image: '/promos/special-offer.jpg',
    theme: 'purple', // purple bg + white text
  },
];

const Home = () => {
  const [activeTrust, setActiveTrust] = useState(trustFeatures[0]?.id || 'tf1');

  return (
    <div className="home-page">

      {/* ─── Hero Section ─── */}
      <section className="hero-section position-relative">
        <div className="hero-bg-image" style={{ backgroundImage: `url(${homeBannerImage})` }}></div>
        <div className="hero-overlay"></div>

        <div className="container hero-content position-relative">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-6 py-4 py-md-5 px-3 px-sm-4 px-md-0 ps-md-4">
              <svg className="hero-deco-heart mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <h1 className="fw-bolder hero-title" style={{ letterSpacing: '-0.5px', color: '#1A295A' }}>
                One home may have an exceptional family recipe.
              </h1>
              <p className="hero-subtitle" style={{ color: '#2C3E75', fontWeight: 500, lineHeight: '1.55' }}>
                Another may make outstanding pickles, snacks, sweets, handicrafts, paintings, clothing, décor, candles, handmade gifts, or other products.
              </p>
              <svg width="200" height="14" viewBox="0 0 220 20" fill="none" className="hero-swoop d-block">
                <path d="M5 15 Q 110 -5 215 15" stroke="#F5A623" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
              <Link to="/shop" className="btn btn-primary hero-btn rounded-pill d-inline-flex align-items-center gap-2 fw-semibold shadow">
                Shop Now <BiRightArrowAlt size={20} />
              </Link>
            </div>
          </div>
        </div>

        <svg className="hero-deco-burst d-none d-md-block position-absolute" style={{ top: '30px', right: '38%', zIndex: 3 }} width="40" height="40" viewBox="0 0 24 24" stroke="#F5A623" strokeWidth="3" strokeLinecap="round">
          <line x1="8" y1="2" x2="12" y2="8"></line>
          <line x1="20" y1="6" x2="15" y2="11"></line>
          <line x1="23" y1="14" x2="17" y2="14"></line>
        </svg>
      </section>

      {/* ─── Categories Shortcuts ─── */}
      <section className="categories-section py-5" style={{
        background: 'linear-gradient(135deg, rgb(135 111 169) 0%, #D6EEFF 100%)'
      }}>
        <div className="container">
          <div className="section-heading mb-4">
            <h2 className="section-title">Shop by Category</h2>
            <div className="section-underline"></div>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-6 g-3 g-md-4 justify-content-center">
            {categories.map((cat) => (
              <div key={cat.id} className="col text-center">
                <Link to={`/shop/${cat.id}`} className="text-decoration-none text-dark category-card-link d-block h-100">
                  <div className="category-card bg-white rounded-4 d-flex flex-column align-items-center justify-content-center p-3 p-md-4 h-100">
                    <div className="icon-circle rounded-circle d-flex align-items-center justify-content-center mb-3">
                      {categoryIcons[cat.icon]}
                    </div>
                    <h6 className="fw-semibold mb-0 text-secondary">{cat.name}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Categories ─── */}
      <section className="featured-section py-5" style={{ backgroundColor: '#F8F5FF' }}>
        <div className="container">
          <div className="section-heading mb-4">
            <h2 className="section-title">Featured Categories</h2>
            <p className="section-subtitle">Explore our handpicked collections from home makers</p>
            <div className="section-underline"></div>
          </div>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 g-md-4">
            {featuredCategories.map((fc) => (
              <div key={fc.id} className="col">
                <Link to={`/shop/category/${fc.id}`} className="text-decoration-none text-dark">
                  <div className="card border-0 rounded-4 overflow-hidden h-100 featured-card shadow-sm bg-white p-2">
                    <div className="card-img-top position-relative rounded-3 overflow-hidden featured-img-wrap">
                      <img src={fc.image} alt={fc.name} className="w-100 h-100 object-fit-cover" />
                      <div className="position-absolute top-0 end-0 p-2">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm text-secondary" style={{ width: '28px', height: '28px' }}>
                          <BiChevronRight size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="card-body text-center p-2">
                      <h6 className="fw-bold mb-0 text-secondary">{fc.name}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Features Strip ─── */}
      <section className="trust-section py-4 py-md-5" style={{
        background: 'linear-gradient(135deg, #FFF5D6 0%, rgb(90 80 85) 100%)'
      }}>
        <div className="container">
          <div className="section-heading mb-4">
            <h2 className="section-title">Why Choose HomeBazz?</h2>
            <p className="section-subtitle">Everything you need to shop confidently from home makers</p>
            <div className="section-underline"></div>
          </div>
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6 g-3 justify-content-center">
            {trustFeatures.map((tf) => (
              <div key={tf.id} className="col text-center">
                <div 
                  className={`trust-card d-flex flex-column align-items-center justify-content-center p-2 p-md-3 ${activeTrust === tf.id ? 'active' : ''}`}
                  onClick={() => setActiveTrust(tf.id)}
                >
                  <div
                    className="trust-icon-circle rounded-circle d-flex align-items-center justify-content-center mb-2"
                    style={{
                      '--trust-bg': tf.bg,
                      '--trust-color': tf.color,
                      backgroundColor: tf.bg,
                      color: tf.color
                    }}
                  >
                    {trustIcons[tf.icon]}
                  </div>
                  <p className="trust-label fw-semibold mb-0" style={{ color: tf.color }}>{tf.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Promo Banner Cards ─── */}
      <section className="promo-section py-4 py-md-5">
        <div className="container">
          <div className="section-heading mb-4">
            <h2 className="section-title">Our Collections</h2>
            <p className="section-subtitle">Handpicked flavors, crafts and exclusive deals for you</p>
            <div className="section-underline"></div>
          </div>
          <div className="row g-3 g-md-4">
            {promoCards.map((promo) => (
              <div key={promo.id} className="col-12 col-md-4">
                <Link to={promo.link} className="text-decoration-none">
                  <div
                    className={`promo-card rounded-4 overflow-hidden position-relative promo-${promo.theme}`}
                    style={{ backgroundImage: `url(${promo.image})` }}
                  >
                    <div className="promo-card-overlay"></div>
                    <div className="promo-card-body position-relative p-4">
                      <h5 className="promo-card-title fw-bold mb-1">{promo.title}</h5>
                      <p className="promo-card-subtitle mb-3">{promo.subtitle}</p>
                      <span className="promo-btn d-inline-flex align-items-center gap-1 fw-semibold">
                        {promo.btnText} <BiRightArrowAlt size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trending Products ─── */}
      <section className="trending-section py-4 py-md-5" style={{
        background: 'linear-gradient(135deg, #D6FFE8 0%, rgb(75 54 108) 100%)'
      }}>
        <div className="container">
          {/* Section heading */}
          <div className="section-heading mb-4">
            <div className="d-flex align-items-center gap-2">
              <MdLocalFireDepartment size={28} style={{ color: '#F5A623' }} />
              <h2 className="section-title mb-0">Trending Products</h2>
            </div>
            <p className="section-subtitle">Most loved products from our home makers</p>
            <div className="section-underline"></div>
          </div>

          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
            {products.map((product) => (
              <div key={product.id} className="col">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <div className="product-card card border-0 rounded-4 overflow-hidden h-100 shadow-sm bg-white">
                    <div className="product-img-wrap position-relative overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-100 object-fit-cover product-img"
                      />
                      {product.badges && product.badges[0] && (
                        <span className="position-absolute top-0 start-0 m-2 badge product-badge">
                          {product.badges[0]}
                        </span>
                      )}
                    </div>
                    <div className="card-body p-3">
                      <p className="product-category-label mb-1">{product.category}</p>
                      <h6 className="fw-bold product-name mb-1">{product.name}</h6>
                      <div className="d-flex align-items-center gap-1 mb-2">
                        <BiStar size={14} className="text-warning" />
                        <span className="product-rating fw-semibold">{product.rating}</span>
                        <span className="product-reviews text-muted">({product.reviews})</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="product-price fw-bold">₹{product.price}</span>
                        <button className="btn btn-sm btn-outline-primary rounded-pill px-3 add-to-cart-btn">Add</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
