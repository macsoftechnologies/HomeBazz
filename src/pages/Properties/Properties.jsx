import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, categories } from '../../data/dummyData';
import {
  BiHome, BiRestaurant, BiHeart, BiLeaf, BiCloset, BiDiamond, BiShoppingBag,
  BiRightArrowAlt, BiChevronDown, BiGridAlt, BiListUl, BiStar, BiHeart as BiHeartOutline, BiCartAdd, BiChevronLeft, BiChevronRight, BiMenu, BiX, BiSearch
} from 'react-icons/bi';
import './Properties.css';

// Mapping icons for sidebar
const iconMap = {
  'c1': <BiRestaurant />,
  'c2': <BiHeart />,
  'c3': <BiLeaf />,
  'c4': <BiCloset />,
  'c5': <BiDiamond />,
  'c6': <BiShoppingBag />,
};

// Dummy data for subcategory Explore cards
const exploreSubcategories = [
  { id: 'pickles', name: 'Gongura Pickle', count: 12, variant: 'purple', image: 'https://images.unsplash.com/photo-1599321955726-e048426594af?q=80&w=600&auto=format&fit=crop' },
  { id: 'pickles', name: 'Mango Pickle', count: 10, variant: 'green', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop' },
  { id: 'pickles', name: 'Lemon Pickle', count: 8, variant: 'orange', image: 'https://images.unsplash.com/photo-1599321955726-e048426594af?q=80&w=600&auto=format&fit=crop' },
  { id: 'pickles', name: 'Tomato Pickle', count: 6, variant: 'pink', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop' },
  { id: 'pickles', name: 'Avakaya Pickle', count: 9, variant: 'orange', image: 'https://images.unsplash.com/photo-1599321955726-e048426594af?q=80&w=600&auto=format&fit=crop' },
  { id: 'pickles', name: 'Onion Pickle', count: 7, variant: 'purple', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop' }
];

const Properties = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [activeSubcat, setActiveSubcat] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy subcategories for the pill menu
  const overviewPills = ['All', 'Snacks Pickles', 'Sweets', 'Bakery', 'Spice Powders', 'Ready-to-cook', 'Dairy', 'Beverages'];
  const listingPills = ['All (6)', 'Mango (1)', 'Gongura (1)', 'Lemon (1)', 'Mixed (1)', 'Tomato (1)', 'Onion (1)'];

  const currentPills = subcategory ? listingPills : overviewPills;

  // Duplicate dummy products to fill the grid
  const displayedProducts = products.concat(products);

  // Get current category name
  const currentCategoryName = category
    ? categories.find(c => c.id === category)?.name || 'Products'
    : 'All Categories';

  const isListingMode = !!subcategory;
  const pageTitle = isListingMode ? (subcategory.charAt(0).toUpperCase() + subcategory.slice(1)) : (category ? `${currentCategoryName} Categories` : 'All Categories');
  const pageSubtitle = isListingMode
    ? `Authentic homemade ${subcategory} from selected home makers`
    : 'Explore our wide range of homemade delicacies';

  return (
    <div className="shop-page py-4 min-vh-100">
      <div className="container-fluid">
        <div className="row">

          {/* ─── SIDEBAR ─── */}
          <div className="col-lg-3">
            {/* Mobile overlay backdrop */}
            <div className={`shop-sidebar-backdrop d-lg-none ${isSidebarOpen ? 'show' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>

            <div className={`shop-sidebar-wrapper ${isSidebarOpen ? 'open' : ''}`}>
              <div className="shop-sidebar">
                {/* Mobile Close Button */}
                <div className="d-flex justify-content-between align-items-center d-lg-none mb-3 pb-3 border-bottom">
                  <h5 className="mb-0 fw-bold" style={{ color: '#1A295A' }}>Categories</h5>
                  <button className="btn btn-sm btn-light rounded-circle" onClick={() => setIsSidebarOpen(false)}>
                    <BiX size={24} />
                  </button>
                </div>

                <ul className="shop-sidebar-menu">
                  <li>
                    <Link to="/shop" className={`shop-sidebar-item ${!category ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
                      <div className="d-flex align-items-center gap-3">
                        <span className="shop-sidebar-icon"><BiHome /></span>
                        <span className="shop-sidebar-text">All Categories</span>
                      </div>
                      <BiChevronRight className="shop-sidebar-chevron" size={20} />
                    </Link>
                  </li>
                  {categories.map(c => (
                    <li key={c.id}>
                      <Link
                        to={`/shop/${c.id}`}
                        className={`shop-sidebar-item ${category === c.id ? 'active' : ''}`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span className="shop-sidebar-icon">{iconMap[c.id] || <BiRestaurant />}</span>
                          <span className="shop-sidebar-text">{c.name}</span>
                        </div>
                        <BiChevronRight className="shop-sidebar-chevron" size={20} />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Promo Box */}
                <div className="sidebar-promo-box d-none d-lg-block mt-4">
                  <div className="sidebar-promo-content">
                    <span className="sidebar-promo-badge">DISCOVER</span>
                    <h4 className="sidebar-promo-title">Unique &<br />Handmade Products</h4>
                    <p className="sidebar-promo-subtitle">Support small business<br />and shop with heart <BiHeartOutline size={14}/></p>
                    <Link to="/shop?sale=true" className="sidebar-promo-btn text-decoration-none mt-2">
                      Explore Now <BiRightArrowAlt size={16} />
                    </Link>
                  </div>
                  {/* Decorative element for promo */}
                  <div className="sidebar-promo-decoration"></div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── MAIN CONTENT ─── */}
          <div className="col-lg-9 mt-4 mt-lg-0">

            {/* Mobile Sidebar Toggle Button */}
            <div className="d-lg-none mb-3">
              <button
                className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                style={{ background: '#F3F0FF', color: '#5E35B1', fontWeight: 600, border: '1px solid #EBE5FF', borderRadius: '12px', padding: '12px' }}
                onClick={() => setIsSidebarOpen(true)}
              >
                <BiMenu size={22} /> Browse Categories
              </button>
            </div>

            {/* Header & Breadcrumb */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-4">
              <div className="mb-3 mb-md-0">
                <div className="shop-breadcrumb">
                  {isListingMode ? (
                    <><Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <Link to={`/shop/${category}`}>{currentCategoryName}</Link> &gt; {pageTitle}</>
                  ) : (
                    <><Link to="/">Home</Link> &gt; {category ? <><Link to="/shop">Shop</Link> &gt; {currentCategoryName}</> : 'Shop'}</>
                  )}
                </div>
                <h1 className="shop-page-title">{pageTitle}</h1>
                <p className="shop-page-subtitle mb-0">{pageSubtitle}</p>
              </div>

              <div className="shop-header-actions d-flex flex-wrap align-items-center gap-3 justify-content-start justify-content-md-end">
                <button type="button" onClick={() => navigate(-1)} className="hb-back-btn">
                  <BiChevronLeft size={20} /> Back
                </button>
                <div className="shop-search-wrap">
                  <BiSearch className="shop-search-icon" size={18} />
                  <input
                    type="text"
                    className="shop-search-input"
                    placeholder="Search products..."
                  />
                </div>
              </div>
            </div>

            {/* Subcategory Pills */}
            <div className="shop-subcategory-pills">
              {currentPills.map((subcat, idx) => {
                const subcatKey = subcat.split(' ')[0].toLowerCase();

                const handlePillClick = () => {
                  if (!isListingMode) {
                    if (subcatKey !== 'all') {
                      navigate(`/shop/${category || 'c1'}/${subcatKey}`);
                    }
                  } else {
                    setActiveSubcat(subcatKey);
                  }
                };

                return (
                  <button
                    key={subcat}
                    className={`shop-pill ${(!isListingMode && subcatKey === 'all') ? 'active' : (isListingMode && activeSubcat === subcatKey ? 'active' : '')}`}
                    onClick={handlePillClick}
                  >
                    {subcat}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4">

              {!isListingMode ? (
                // ─── OVERVIEW MODE: SHOW EXPLORE CARDS ───
                exploreSubcategories.map((sub, idx) => (
                  <div className="col" key={`explore-${idx}`}>
                    <div className="shop-product-card p-3">
                      <div className="shop-product-heart" style={{ top: '8px', right: '8px' }}>
                        <BiHeartOutline size={20} />
                      </div>
                      <Link to={`/shop/${category || 'c1'}/${sub.id}`} className="text-decoration-none">
                        <img src={sub.image} alt={sub.name} className="w-100 rounded-3 mb-3 object-fit-cover" style={{ height: '160px' }} />
                        <h4 className="shop-product-title mb-1 text-dark">{sub.name}</h4>
                        <p className="shop-explore-subtitle">{sub.count} Products</p>
                      </Link>
                      <Link to={`/shop/${category || 'c1'}/${sub.id}`} className={`shop-explore-btn mt-auto variant-${sub.variant}`}>
                        Explore <BiRightArrowAlt size={18} />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                // ─── LISTING MODE: SHOW PRODUCT CARDS ───
                displayedProducts.map((product, idx) => (
                  <div className="col" key={`${product.id}-${idx}`}>
                    <div className="shop-product-card">

                      <div className="shop-product-img-wrap">
                        <div className="shop-product-heart">
                          <BiHeartOutline size={20} />
                        </div>
                        <Link to={`/product/${product.id}`} className="w-100 h-100">
                          <img src={product.images[0]} alt={product.name} className="shop-product-img" />
                        </Link>
                      </div>

                      <div className="shop-product-body">
                        <Link to={`/product/${product.id}`} className="text-decoration-none">
                          <h3 className="shop-product-title text-truncate" title={product.name}>{product.name}</h3>
                        </Link>

                        <div className="shop-product-meta">
                          <div className="shop-product-rating">
                            <BiStar size={14} color="#F5A623" />
                            <span style={{ color: '#1A295A', fontWeight: 600 }}>{product.rating}</span>
                            <span>({product.reviews})</span>
                          </div>
                          <span className="shop-product-stock">In Stock</span>
                        </div>

                        <div className="shop-product-price">₹{product.price}</div>

                        <div className="shop-product-actions">
                          <div className="shop-qty-selector">
                            <button className="shop-qty-btn">-</button>
                            <input type="text" className="shop-qty-input" value="1" readOnly />
                            <button className="shop-qty-btn">+</button>
                          </div>
                          <button className="shop-add-btn">
                            <BiCartAdd size={20} /> Add to Cart
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                ))
              )}

            </div>

            {/* Pagination & Footer Note (Only in Listing Mode) */}
            {isListingMode && (
              <div className="shop-pagination-wrap">
                <div className="shop-pagination">
                  <button className="shop-page-btn nav-btn"><BiChevronLeft size={20} /></button>
                  <button className="shop-page-btn active">1</button>
                  <button className="shop-page-btn">2</button>
                  <button className="shop-page-btn">3</button>
                  <span className="shop-page-btn" style={{ pointerEvents: 'none' }}>...</span>
                  <button className="shop-page-btn">10</button>
                  <button className="shop-page-btn nav-btn"><BiChevronRight size={20} /></button>
                </div>

                <div className="d-flex align-items-center justify-content-between w-100 mt-2 px-2">
                  <div className="d-none d-sm-flex align-items-center gap-2" style={{ color: '#5A6B8A', fontStyle: 'italic', fontSize: '0.85rem' }}>
                    <BiLeaf size={16} color="#7B61C9" /> Good Food Brings People Together
                  </div>
                  <span className="shop-pagination-text w-100 text-center text-sm-end">Showing 1-6 of 56 products</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
