import React, { useState, useMemo } from 'react';
import { mealkits } from '../data/mealkits';

export default function CatalogSection({ onSelectKit, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedTag, setSelectedTag] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('popular'); // popular, priceLow, priceHigh, rating, time

  const categories = ['전체', '한식', '양식', '아시안', '캠핑/파티', '다이어트/건강'];
  const tags = ['전체', '저당/키토', '고단백', '저칼로리', '비건', '국물요리', '어린이추천'];

  const filteredKits = useMemo(() => {
    return mealkits
      .filter((kit) => {
        const matchesCategory =
          selectedCategory === '전체' || kit.category === selectedCategory;

        const matchesTag =
          selectedTag === '전체' || kit.dietTags.includes(selectedTag);

        const matchesSearch =
          kit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          kit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          kit.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesTag && matchesSearch;
      })
      .sort((a, b) => {
        if (sortOption === 'priceLow') return a.price - b.price;
        if (sortOption === 'priceHigh') return b.price - a.price;
        if (sortOption === 'rating') return b.rating - a.rating;
        if (sortOption === 'time') return a.cookingTime - b.cookingTime;
        return b.reviewsCount - a.reviewsCount; // default popular
      });
  }, [selectedCategory, selectedTag, searchQuery, sortOption]);

  return (
    <section className="catalog-section" id="catalog">
      <div className="section-title">
        <h2>🍲 전체 밀키트 라인업</h2>
        <p>신선한 식재료, 정량으로 손질된 세밀한 키트로 누구나 15분 만에 셰프의 맛을 완성하세요.</p>
      </div>

      {/* Categories Tabs */}
      <div className="catalog-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Controls Bar (Search, Tags, Sort) */}
      <div className="catalog-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="메뉴명, 재료 검색 (예: 스테이크, 파스타, 불고기)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              ✕
            </button>
          )}
        </div>

        <div className="filter-tags">
          <span className="filter-label">건강/테마:</span>
          {tags.map((t) => (
            <button
              key={t}
              className={`tag-btn ${selectedTag === t ? 'active' : ''}`}
              onClick={() => setSelectedTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="sort-box">
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="popular">🔥 인기순</option>
            <option value="rating">⭐ 평점 높은순</option>
            <option value="priceLow">💰 가격 낮은순</option>
            <option value="priceHigh">💎 가격 높은순</option>
            <option value="time">⏱️ 조리시간 짧은순</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredKits.length > 0 ? (
        <div className="catalog-grid">
          {filteredKits.map((kit) => (
            <div key={kit.id} className="meal-card">
              <div className="meal-img-box" onClick={() => onSelectKit(kit.id)}>
                <img src={kit.image} alt={kit.title} loading="lazy" />
                <span className="badge-cat">{kit.category}</span>
                {kit.discount > 0 && <span className="badge-discount">-{kit.discount}% SALE</span>}
              </div>

              <div className="meal-content">
                <span className="meal-subtitle">{kit.subtitle}</span>
                <h3 className="meal-title" onClick={() => onSelectKit(kit.id)}>
                  {kit.title}
                </h3>

                <p className="meal-desc">{kit.description}</p>

                <div className="diet-tags-list">
                  {kit.dietTags.map((dt) => (
                    <span key={dt} className="diet-chip">
                      #{dt}
                    </span>
                  ))}
                </div>

                <div className="meal-meta">
                  <span>⏱️ {kit.cookingTime}분</span>
                  <span>👨‍🍳 난이도 {kit.difficulty}</span>
                  <span>⭐ {kit.rating} ({kit.reviewsCount})</span>
                </div>

                <div className="meal-price-row">
                  <div>
                    <span className="meal-price">{kit.price.toLocaleString()}원</span>
                    {kit.originalPrice > kit.price && (
                      <span className="meal-orig-price">{kit.originalPrice.toLocaleString()}원</span>
                    )}
                  </div>
                  <button className="add-cart-btn" onClick={() => onAddToCart(kit)}>
                    🛒 담기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-catalog">
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🔍</div>
          <h3>검색 조건에 일치하는 밀키트가 없습니다.</h3>
          <p>검색어를 변경하거나 필터를 초기화해 보세요.</p>
          <button
            className="reset-filter-btn"
            onClick={() => {
              setSelectedCategory('전체');
              setSelectedTag('전체');
              setSearchQuery('');
            }}
          >
            필터 초기화하기
          </button>
        </div>
      )}
    </section>
  );
}
