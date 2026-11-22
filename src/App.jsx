import React, { useState, useEffect } from 'react';
import { mealkitsData } from './data/mealkits';
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
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('popular');
  
  // Cart state stored in localStorage or default
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('mealkit_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMeal, setActiveMeal] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('mealkit_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleAddToCart = (meal, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === meal.id);
      if (existing) {
        return prev.map(item => 
          item.id === meal.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prev, { ...meal, quantity }];
      }
    });
    showToast(`🛒 '${meal.title}' ${quantity}개가 장바구니에 담겼습니다!`);
  };

  const handleUpdateQuantity = (mealId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === mealId) {
        const nextQty = item.quantity + delta;
        return nextQty > 0 ? { ...item, quantity: nextQty } : item;
      }
      return item;
    }));
  };

  const handleRemoveItem = (mealId) => {
    setCartItems(prev => prev.filter(item => item.id !== mealId));
    showToast('장바구니 항목이 삭제되었습니다.');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectWizardMeal = (meal) => {
    setActiveMeal(meal);
  };

  return (
    <div className="app-container">
      {toastMessage && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}

      <Header 
        cartCount={cartItems.reduce((acc, cur) => acc + cur.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Hero onSelectMeal={(meal) => setActiveMeal(meal)} />

      <FeaturedSection onSelectMeal={(meal) => setActiveMeal(meal)} />

      <WizardSection 
        mealkits={mealkitsData}
        onSelectMeal={handleSelectWizardMeal}
        onAddToCart={handleAddToCart}
      />

      <CatalogSection 
        mealkits={mealkitsData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
        onSelectMeal={(meal) => setActiveMeal(meal)}
        onAddToCart={handleAddToCart}
      />

      <SubscriptionSection />

      <Footer />

      {activeMeal && (
        <MealModal 
          meal={activeMeal}
          onClose={() => setActiveMeal(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />
    </div>
  );
}
