import React from 'react';

export default function Hero({ onExploreClick, onWizardClick }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">✨ 10분 완성 신선 밀키트</span>
        <h1>셰프의 일상 요리,<br />내 집 주방에서 완벽하게.</h1>
        <p>
          신선한 100% 식재료와 황금 비율 특제 소스를 한 상자에.<br />
          바쁜 오늘 저녁도 쿡이지 밀키트로 근사하고 유기농스럽게 즐기세요.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={onExploreClick}>
            Popular Menu 보기 🍽️
          </button>
          <button className="btn-secondary" onClick={onWizardClick}>
            취향 맞춤 밀키트 찾기 🪄
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">98.9%</span>
            <span className="stat-label">고객 만족도</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10분</span>
            <span className="stat-label">평균 조리시간</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">0.5만+</span>
            <span className="stat-label">누적 새벽배송</span>
          </div>
        </div>
      </div>
    </section>
  );
}
