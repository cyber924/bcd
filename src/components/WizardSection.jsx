import React, { useState } from 'react';
import { mealkits } from '../data/mealkits';

export default function WizardSection({ onSelectKit, onAddToCart }) {
  const [step, setStep] = useState(1);
  const [servings, setServings] = useState('2인분');
  const [cookingTime, setCookingTime] = useState('15분 이내');
  const [category, setCategory] = useState('한식');
  const [diet, setDiet] = useState('전체');
  const [results, setResults] = useState(null);

  const handleRecommend = () => {
    // Filter matching kits
    let filtered = mealkits.filter(kit => {
      let matchesCat = category === '전체' || kit.category === category;
      let matchesTime = true;
      if (cookingTime === '10분 이내') matchesTime = kit.cookingTime <= 10;
      else if (cookingTime === '15분 이내') matchesTime = kit.cookingTime <= 15;
      else if (cookingTime === '20분 이내') matchesTime = kit.cookingTime <= 20;

      let matchesDiet = diet === '전체' || kit.dietTags.includes(diet);
      return matchesCat && matchesTime && matchesDiet;
    });

    if (filtered.length === 0) {
      filtered = mealkits.slice(0, 3);
    }
    setResults(filtered);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setResults(null);
  };

  return (
    <section className="wizard-section">
      <div className="section-title text-center">
        <h2>🎯 AI 맞춤 밀키트 큐레이터</h2>
        <p>인원수, 조리시간, 식성만 클릭하세요! 오늘 저녁 최적의 메뉴를 바로 추천해 드립니다.</p>
      </div>

      <div className="wizard-container">
        {step === 1 && (
          <div className="wizard-step">
            <h3>Step 1. 몇 분이서 드시나요?</h3>
            <p className="wizard-subtitle">인원수에 꼭 맞게 양을 추천해드립니다.</p>
            <div className="wizard-options">
              {['1인분 (솔로)', '2인분 (커플)', '3-4인분 (패밀리)', '단체/파티'].map((opt) => (
                <button
                  key={opt}
                  className={`wizard-opt-btn ${servings === opt ? 'active' : ''}`}
                  onClick={() => setServings(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="wizard-actions">
              <button className="wizard-next-btn" onClick={() => setStep(2)}>
                다음 단계 (조리시간) &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="wizard-step">
            <h3>Step 2. 요리에 쓸 수 있는 시간은?</h3>
            <p className="wizard-subtitle">초간단 초스피드 밀키트부터 근사한 다이닝까지!</p>
            <div className="wizard-options">
              {['10분 이내', '15분 이내', '20분 이내', '상관없음'].map((opt) => (
                <button
                  key={opt}
                  className={`wizard-opt-btn ${cookingTime === opt ? 'active' : ''}`}
                  onClick={() => setCookingTime(opt)}
                >
                  ⚡ {opt}
                </button>
              ))}
            </div>
            <div className="wizard-actions">
              <button className="wizard-prev-btn" onClick={() => setStep(1)}>
                &larr; 이전
              </button>
              <button className="wizard-next-btn" onClick={() => setStep(3)}>
                다음 단계 (스타일) &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="wizard-step">
            <h3>Step 3. 끌리는 요리 장르 & 다이어트 선택</h3>
            <p className="wizard-subtitle">취향대로 골라 조화로운 식단을 맞춰보세요.</p>

            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px', color: '#555' }}>장르 선택</p>
              <div className="wizard-options">
                {['전체', '한식', '양식', '아시안', '캠핑/파티'].map((cat) => (
                  <button
                    key={cat}
                    className={`wizard-opt-btn ${category === cat ? 'active' : ''}`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px', color: '#555' }}>식단 특성 (선택)</p>
              <div className="wizard-options">
                {['전체', '저당/키토', '고단백', '저칼로리', '비건', '어린이추천'].map((dt) => (
                  <button
                    key={dt}
                    className={`wizard-opt-btn ${diet === dt ? 'active' : ''}`}
                    onClick={() => setDiet(dt)}
                  >
                    🌱 {dt}
                  </button>
                ))}
              </div>
            </div>

            <div className="wizard-actions">
              <button className="wizard-prev-btn" onClick={() => setStep(2)}>
                &larr; 이전
              </button>
              <button className="wizard-next-btn primary" onClick={handleRecommend}>
                🎉 추천 결과 확인하기
              </button>
            </div>
          </div>
        )}

        {step === 4 && results && (
          <div className="wizard-step">
            <h3>✨ 고객님의 완벽한 한 끼 추천 결과!</h3>
            <p className="wizard-subtitle">
              [{servings} / {cookingTime} / {category} / {diet}] 기준 최적 밀키트 {results.length}종을 엄선했습니다.
            </p>

            <div className="catalog-grid" style={{ marginTop: '24px' }}>
              {results.map((kit) => (
                <div key={kit.id} className="meal-card">
                  <div className="meal-img-box" onClick={() => onSelectKit(kit.id)}>
                    <img src={kit.image} alt={kit.title} />
                    <span className="badge-cat">{kit.category}</span>
                  </div>
                  <div className="meal-content">
                    <span className="meal-subtitle">{kit.subtitle}</span>
                    <h3 className="meal-title" onClick={() => onSelectKit(kit.id)}>
                      {kit.title}
                    </h3>
                    <div className="meal-meta">
                      <span>⏱️ {kit.cookingTime}분</span>
                      <span>👨‍🍳 난이도 {kit.difficulty}</span>
                      <span>⭐ {kit.rating}</span>
                    </div>
                    <div className="meal-price-row">
                      <div>
                        {kit.discount > 0 && <span className="meal-discount">{kit.discount}% </span>}
                        <span className="meal-price">{kit.price.toLocaleString()}원</span>
                        {kit.originalPrice > kit.price && (
                          <span className="meal-orig-price">{kit.originalPrice.toLocaleString()}원</span>
                        )}
                      </div>
                      <button className="add-cart-btn" onClick={() => onAddToCart(kit)}>
                        담기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button className="wizard-reset-btn" onClick={handleReset}>
                🔄 다시 찾아보기
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
