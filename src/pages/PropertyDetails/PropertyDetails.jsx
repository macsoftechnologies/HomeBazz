import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/dummyData';
import { BiStar, BiHeart, BiCheckShield, BiMap, BiShareAlt, BiStore, BiBadgeCheck, BiPlus, BiMinus } from 'react-icons/bi';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Find product or use first as fallback for dummy data
  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="product-details-page min-vh-100 py-5">
      <div className="container">
        
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="breadcrumb-custom">
          Home &gt; <Link to="/shop">Shop</Link> &gt; <Link to={`/shop/${product.category.toLowerCase()}`}>{product.category}</Link> &gt; <span className="active">{product.name}</span>
        </nav>

        {/* Product Main Section */}
        <div className="row g-5 mb-5 align-items-start">
          
          {/* Images Gallery */}
          <div className="col-lg-5">
            <div className="product-gallery-main">
              <img src={product.images[0]} alt={product.name} className="product-gallery-img" />
              <button className="product-wishlist-btn">
                <BiHeart size={22} />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="product-thumbnails">
              {[product.images[0], product.images[0], product.images[0]].map((img, i) => (
                <div 
                  key={i} 
                  className={`product-thumbnail-wrap ${i === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`thumb-${i}`} className="product-thumbnail-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-7">
            
            <div className="product-badges-wrap">
              {product.badges?.map((badge, idx) => (
                <span key={idx} className={`product-badge-premium ${idx % 2 !== 0 ? 'variant-green' : ''}`}>
                  <BiBadgeCheck size={16} /> {badge}
                </span>
              ))}
            </div>

            <h1 className="product-title-premium">{product.name}</h1>
            
            <div className="product-meta-row">
              <div className="product-rating-premium">
                <BiStar size={20} /> <BiStar size={20} /> <BiStar size={20} /> <BiStar size={20} /> <BiStar size={20} />
                <span className="rating-val">{product.rating}</span>
                <span className="rating-count">({product.reviews} reviews)</span>
              </div>
              <button className="product-share-btn">
                <BiShareAlt size={18} /> Share
              </button>
            </div>

            <h2 className="product-price-premium">₹{product.price}</h2>

            <p className="product-desc-premium">{product.description}</p>

            <div className="product-divider"></div>

            {/* Actions */}
            <div className="product-actions-row flex-wrap">
              <div className="product-qty-selector">
                <button className="product-qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <BiMinus size={20} />
                </button>
                <span className="product-qty-val">{quantity}</span>
                <button className="product-qty-btn" onClick={() => setQuantity(quantity + 1)}>
                  <BiPlus size={20} />
                </button>
              </div>
              
              <div className="product-buttons-group">
                <Link to="/cart" className="product-btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                  Add to Cart
                </Link>
                <Link to="/checkout" className="product-btn-filled" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Trust Box */}
            <div className="product-trust-box">
              <div className="product-trust-item">
                <BiCheckShield className="icon-success" /> 
                <span><strong>HomeBazz Verified</strong> — Quality guaranteed.</span>
              </div>
              <div className="product-trust-item">
                <BiMap className="icon-primary" /> 
                <span>Delivers in <strong>{product.delivery}</strong> to your location.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Maker Profile Section */}
        <section className="maker-profile-premium mt-5 mb-5">
          <div className="maker-bg-blob"></div>
          
          <div className="maker-profile-content row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <div className="maker-avatar-wrap">
                <img src={product.maker.avatar} alt={product.maker.name} className="maker-avatar-img" />
                <div className="maker-badge-icon">
                  <BiBadgeCheck size={26} />
                </div>
              </div>
              <h4 className="maker-name">{product.maker.name}</h4>
              <p className="maker-store">
                <BiStore size={20} /> {product.maker.storeName}
              </p>
              <div className="maker-stats">
                <span><BiMap size={18} className="me-1"/> {product.maker.location}</span>
                <span><BiStar size={18} className="me-1 text-warning"/> {product.maker.rating}</span>
              </div>
            </div>
            
            <div className="col-md-8 ps-md-5">
              <h3 className="fw-bold mb-4" style={{ color: '#1A295A' }}>Meet the Maker</h3>
              
              <div className="maker-story-box">
                "{product.maker.story}"
              </div>
              
              <div className="maker-info-grid">
                <div className="maker-info-card">
                  <span className="maker-info-label">Speciality</span>
                  <span className="maker-info-val">{product.maker.speciality}</span>
                </div>
                <div className="maker-info-card">
                  <span className="maker-info-label">Experience</span>
                  <span className="maker-info-val">{product.maker.experience}</span>
                </div>
              </div>
              
              <Link to={`/maker/${product.maker.id}`} className="maker-view-btn">
                View Full Profile & All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="related-products mb-5 pt-4">
          <h3 className="fw-bold mb-4" style={{ color: '#1A295A', fontSize: '2rem' }}>More from this Category</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {relatedProducts.map(p => (
              <div className="col" key={`related-${p.id}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PropertyDetails;
