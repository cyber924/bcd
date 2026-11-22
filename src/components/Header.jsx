import React from 'react';

export default function Header({ cartCount, onOpenCart, activeCategory, onSelectCategory }) {
  return (
    <header className="header">
      <div className="top-bar">
        🎉 신규 가입 시 첫 주문 <span>10,000원 즉시 할인 쿠폰</span> 증정 & 3만원 이상 무료 배송!
      </div>
      <nav className="navbar">
        <a className="logo" href="#hero">
          <span>🍳 CookEasy</span>
          <span className="logo-badge">밀키트</span>
        </a>

        <ul className="nav-links">
          <li><button type="button"
            className={`nav-item ${activeCategory === '전체' ? 'active' : ''}`}
            onClick={() => onSelectCategory('전체')}
          >
            전체 메뉴
          </button></li>
          <li><button type="button"
            className={`nav-item ${activeCategory === '한식' ? 'active' : ''}`}
            onClick={() => onSelectCategory('한식')}
          >
            한식 전문
          </button></li>
          <li><button type="button"
            className={`nav-item ${activeCategory === '양식' ? 'active' : ''}`}
            onClick={() => onSelectCategory('양식')}
          >
            양식/스테이크
          </button></li>
          <li><button type="button"
            className={`nav-item ${activeCategory === '다이어트/건강' ? 'active' : ''}`}
            onClick={() => onSelectCategory('다이어트/건강')}
          >
            건강/다이어트
          </button></li>
          <li><button type="button"
            className={`nav-item ${activeCategory === '캠핑/파티' ? 'active' : ''}`}
            onClick={() => onSelectCategory('캠핑/파티')}
          >
            홈파티/특별식
          </button></li>
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
