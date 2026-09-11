// Mock data for HomeBazz application

export const categories = [
  { id: 'c1', name: 'Food', icon: 'BiFoodMenu', image: '/assets/images/category-food.jpg', count: 120 },
  { id: 'c2', name: 'Handmade', icon: 'BiGift', image: '/assets/images/category-handmade.jpg', count: 85 },
  { id: 'c3', name: 'Art & Decor', icon: 'BiHomeHeart', image: '/assets/images/category-art.jpg', count: 64 },
  { id: 'c4', name: 'Clothing', icon: 'BiCloset', image: '/assets/images/category-clothing.jpg', count: 42 },
  { id: 'c5', name: 'Jewellery', icon: 'BiDiamond', image: '/assets/images/category-jewellery.jpg', count: 56 },
  { id: 'c6', name: 'Home Accessories', icon: 'BiShoppingBag', image: '/assets/images/category-accessories.jpg', count: 91 },
];

export const featuredCategories = [
  { id: 'fc1', name: 'Pickles', image: '/categories/pickles.jpg' },
  { id: 'fc2', name: 'Sweets', image: '/categories/sweets.jpg' },
  { id: 'fc3', name: 'Handicrafts', image: '/categories/handicrafts.jpg' },
  { id: 'fc4', name: 'Clothing', image: '/categories/clothing.jpg' },
  { id: 'fc5', name: 'Home Decor', image: '/categories/homedecor.jpg' },
];

export const trustFeatures = [
  { id: 'tf1', icon: 'BiLeaf',       label: 'Authentic Products', bg: '#E8F5E9', color: '#2E7D32' },
  { id: 'tf2', icon: 'BiHome',       label: 'Home Makers',        bg: '#FFF3E0', color: '#E65100' },
  { id: 'tf3', icon: 'BiShieldAlt2', label: 'Quality Assured',    bg: '#E3F2FD', color: '#1565C0' },
  { id: 'tf4', icon: 'BiCreditCard', label: 'Secure Payments',    bg: '#E0F2F1', color: '#00695C' },
  { id: 'tf5', icon: 'BiPackage',    label: 'Fast Shipping',      bg: '#F3E5F5', color: '#6A1B9A' },
  { id: 'tf6', icon: 'BiSupport',    label: 'Support 24/7',       bg: '#FCE4EC', color: '#880E4F' },
];

export const makers = [
  {
    id: 'm1',
    name: 'Lakshmi',
    storeName: "Lakshmi's Home Kitchen",
    location: 'Visakhapatnam, AP',
    speciality: 'Traditional Andhra recipes',
    experience: '18 years',
    rating: 4.8,
    reviews: 120,
    followers: '2.3K',
    avatar: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=200&auto=format&fit=crop',
    story: "I started from my kitchen. Today, people across India enjoy my pickles. What began as a small experiment in my kitchen has now become a way to share the flavours of my home with families across India. Every jar is made with love and tradition."
  },
  {
    id: 'm2',
    name: 'Crafty Nisha',
    storeName: "Nisha's Ceramics",
    location: 'Visakhapatnam, AP',
    speciality: 'Handcrafted ceramics',
    experience: '5 years',
    rating: 4.9,
    reviews: 85,
    followers: '1.1K',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    story: "Pottery is my meditation. Each piece I create is unique and tells its own story."
  }
];

export const products = [
  {
    id: 'p1',
    name: 'Gongura Pickle',
    makerId: 'm1',
    maker: makers[0],
    price: 250,
    rating: 4.8,
    reviews: 124,
    category: 'Food',
    subCategory: 'Pickles',
    images: ['https://images.unsplash.com/photo-1599321955726-e048426594af?q=80&w=600&auto=format&fit=crop'],
    badges: ['HomeMade', 'Organic', 'Bestseller'],
    description: 'Traditional Andhra style gongura pickle made with fresh ingredients and no preservatives.',
    delivery: '3-5 days'
  },
  {
    id: 'p2',
    name: 'Handcrafted Ceramic Mug',
    makerId: 'm2',
    maker: makers[1],
    price: 450,
    rating: 4.8,
    reviews: 120,
    category: 'Handmade',
    subCategory: 'Home Decor',
    images: ['https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop'],
    badges: ['Handcrafted', 'Unique'],
    description: 'Beautifully handcrafted ceramic mug, made with love at home. Each piece is unique.',
    delivery: '5-7 days'
  },
  {
    id: 'p3',
    name: 'Mango Pickle',
    makerId: 'm1',
    maker: makers[0],
    price: 220,
    rating: 4.7,
    reviews: 89,
    category: 'Food',
    subCategory: 'Pickles',
    images: ['https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop'],
    badges: ['HomeMade'],
    description: 'Authentic avakaya mango pickle made with premium spices and oil.',
    delivery: '3-5 days'
  },
  {
    id: 'p4',
    name: 'Lemon Pickle',
    makerId: 'm1',
    maker: makers[0],
    price: 200,
    rating: 4.6,
    reviews: 56,
    category: 'Food',
    subCategory: 'Pickles',
    images: ['https://images.unsplash.com/photo-1599321955726-e048426594af?q=80&w=600&auto=format&fit=crop'], // Reusing image for dummy data
    badges: ['HomeMade', 'Organic'],
    description: 'Tangy and spicy lemon pickle perfect with rice or parathas.',
    delivery: '3-5 days'
  }
];
