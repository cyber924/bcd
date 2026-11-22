import React, { useState, useEffect } from 'react';
import { mealkits } from './data/mealkits';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import WizardSection from './components/WizardSection';
import CatalogSection from './components/CatalogSection';
import MealModal from './components/MealModal';
import CartDrawer from './components/CartDrawer';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';

export default function App() {
  const [category, setCategory] = useState('전체');
  const [cartItems, setCartItems] = useState(() => {
    try { const items = JSON.parse(localStorage.getItem('mealkit_cart') || '[]'); return Array.isArray(items) ? items : []; } catch { return []; }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeKit, setActiveKit] = useState(null);
  const [toast, setToast] = useState('');
  useEffect(() => { try { localStorage.setItem('mealkit_cart', JSON.stringify(cartItems)); } catch {} }, [cartItems]);
  const showToast = message => { setToast(message); setTimeout(() => setToast(''), 3000); };
  const selectKit = id => {
    const kit = typeof id === 'number' ? mealkits[id - 1] : mealkits.find(item => item.id === id);
    if (kit) setActiveKit(kit);
  };
  const addToCart = (kit, servings = 2) => {
    setCartItems(items => {
      const found = items.find(item => item.id === kit.id && item.servings === servings);
      return found ? items.map(item => item === found ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...kit, servings, quantity: 1 }];
    });
    showToast('장바구니에 담았습니다.');
  };
  const updateQty = (id, servings, quantity) => setCartItems(items => quantity <= 0 ? items.filter(item => !(item.id === id && item.servings === servings)) : items.map(item => item.id === id && item.servings === servings ? { ...item, quantity } : item));
  const removeItem = (id, servings) => setCartItems(items => items.filter(item => !(item.id === id && item.servings === servings)));
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <div className="app-container">
    {toast && <div className="toast-notification">{toast}</div>}
    <Header cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} activeCategory={category} onSelectCategory={value => { setCategory(value); scrollTo('catalog'); }} />
    <Hero onExploreClick={() => scrollTo('catalog')} onWizardClick={() => scrollTo('wizard')} />
    <FeaturedSection onSelectKit={selectKit} />
    <div id="wizard"><WizardSection onSelectKit={selectKit} onAddToCart={addToCart} /></div>
    <CatalogSection selectedCategory={category} setSelectedCategory={setCategory} onSelectKit={selectKit} onAddToCart={addToCart} />
    <SubscriptionSection /><Footer />
    {activeKit && <MealModal kit={activeKit} onClose={() => setActiveKit(null)} onAddToCart={addToCart} />}
    <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} onUpdateQty={updateQty} onRemoveItem={removeItem} onClearCart={() => setCartItems([])} />
  </div>;
}
