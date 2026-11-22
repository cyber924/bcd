import React from 'react';

export default function Header({ cartCount, onOpenCart, activeCategory, onSelectCategory }) {
  return (
    <header className="header">
      <div className="top-bar">
        🎉 신규 가입 시 첫 주문 <span>10,000원 즉시 할인 쿠폰</span> 증정 & 3만원 이상 무료 배송!
      </div>
      <nav className="navbar">
        <div className="logo" onClick={() => onSelectCategory('all')}>
          <span>🍳 CookEasy</span>
          <span className="logo-badge">밀키트</span>
        </div>

        <ul className="nav-links">
          <li 
            className={`nav-item ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => onSelectCategory('all')}
          >
            전체 메뉴
          </li>
          <li 
            className={`nav-item ${activeCategory === 'korean' ? 'active' : ''}`}
            onClick={() => onSelectCategory('korean')}
          >
            한식 전문
          </li>
          <li 
            className={`nav-item ${activeCategory === 'western' ? 'active' : ''}`}
            onClick={() => onSelectCategory('western')}
          >
            양식/스테이크
          </li>
          <li 
            className={`nav-item ${activeCategory === 'health' ? 'active' : ''}`}
            onClick={() => onSelectCategory('health')}
          >
            건강/다이어트
          </li>
          <li 
            className={`nav-item ${activeCategory === 'party' ? 'active' : ''}`}
            onClick={() => onSelectCategory('party')}
          >
            홈파티/특별식
          </li>
        </ul>

        <div className="nav-actions">
          <button className="cart-btn" onClick={onOpenCart}>
            🛒 장바구니
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </nav>
    </header>
  );
}
