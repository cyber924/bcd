import React, { useState } from 'react';

export default function MealModal({ kit, onClose, onAddToCart }) {
  const [servings, setServings] = useState(2);
  const [activeTab, setActiveTab] = useState('detail'); // detail, nutrition, recipe, reviews
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewsList, setReviewsList] = useState([
    { id: 1, user: '김*현', rating: 5, date: '2025-02-18', comment: '손질이 너무 잘되어 있어서 캠핑 가서 15분만에 뚝딱 만들었어요! 강추합니다.' },
    { id: 2, user: '이*진', rating: 5, date: '2025-02-15', comment: '소스 맛이 기막히네요. 레스토랑에서 먹는 거랑 차이가 없습니다.' },
    { id: 3, user: '박*우', rating: 4, date: '2025-02-10', comment: '양도 넉넉하고 식재료가 정말 싱싱해서 만족스럽습니다.' }
  ]);

  if (!kit) return null;

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    setReviewsList([
      {
        id: Date.now(),
        user: '고객(나)',
        rating: newReviewRating,
        date: new Date().toISOString().split('T')[0],
        comment: newReviewText,
      },
      ...reviewsList,
    ]);
    setNewReviewText('');
    alert('후기가 작성되었습니다!');
  };

  const totalPrice = kit.price * (servings / 2);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header-grid">
          <div className="modal-img-wrap">
            <img src={kit.image} alt={kit.title} />
          </div>
          <div className="modal-info-wrap">
            <span className="modal-cat-badge">{kit.category}</span>
            <h2>{kit.title}</h2>
            <p className="modal-sub">{kit.subtitle}</p>
            <p className="modal-desc-full">{kit.description}</p>

            <div className="modal-meta-grid">
              <div><strong>⏱️ 조리시간:</strong> {kit.cookingTime}분</div>
              <div><strong>👨‍🍳 난이도:</strong> {kit.difficulty}</div>
              <div><strong>🔥 칼로리:</strong> {kit.calories} kcal</div>
              <div><strong>📦 구성:</strong> {kit.servings}인분 기준 포장</div>
            </div>

            <div className="servings-selector">
              <label>인원 수 선택:</label>
              <div className="qty-buttons">
                <button disabled={servings <= 2} onClick={() => setServings(servings - 2)}>-</button>
                <span>{servings}인분</span>
                <button onClick={() => setServings(servings + 2)}>+</button>
              </div>
            </div>

            <div className="modal-price-box">
              <span className="modal-price-label">합계 금액:</span>
              <span className="modal-price-val">{totalPrice.toLocaleString()}원</span>
            </div>

            <div className="modal-action-btns">
              <button
                className="btn-primary"
                onClick={() => {
                  onAddToCart(kit, servings);
                  onClose();
                }}
              >
                🛒 장바구니에 담기
              </button>
            </div>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="modal-tabs">
          <button
            className={activeTab === 'detail' ? 'active' : ''}
            onClick={() => setActiveTab('detail')}
          >
            🥗 재료 & 상세안내
          </button>
          <button
            className={activeTab === 'nutrition' ? 'active' : ''}
            onClick={() => setActiveTab('nutrition')}
          >
            📊 영양 성분표
          </button>
          <button
            className={activeTab === 'recipe' ? 'active' : ''}
            onClick={() => setActiveTab('recipe')}
          >
            👩‍🍳 초간단 레시피
          </button>
          <button
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            💬 구매 후기 ({reviewsList.length + kit.reviewsCount})
          </button>
        </div>

        {/* Tab Body */}
        <div className="modal-tab-content">
          {activeTab === 'detail' && (
            <div>
              <h3>동봉된 식재료 구성</h3>
              <div className="ingredients-chips">
                {kit.ingredients.map((ing, idx) => (
                  <span key={idx} className="ing-chip">
                    {ing}
                  </span>
                ))}
              </div>
              <p className="storage-info">
                ℹ️ <strong>보관방법:</strong> 냉장보관 (1~5℃) / 수령 후 4일 이내 조리 권장
              </p>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="nutrition-table-wrap">
              <h3>영양 성분 정보 (1인분 당 기준)</h3>
              <table className="nutrition-table">
                <tbody>
                  <tr>
                    <td>열량 (Calories)</td>
                    <td><strong>{kit.calories} kcal</strong></td>
                  </tr>
                  <tr>
                    <td>단백질 (Protein)</td>
                    <td>{kit.nutrition.protein}</td>
                  </tr>
                  <tr>
                    <td>탄수화물 (Carbs)</td>
                    <td>{kit.nutrition.carbs}</td>
                  </tr>
                  <tr>
                    <td>지방 (Fat)</td>
                    <td>{kit.nutrition.fat}</td>
                  </tr>
                  <tr>
                    <td>나트륨 (Sodium)</td>
                    <td>{kit.nutrition.sodium}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'recipe' && (
            <div className="recipe-steps-list">
              <h3>단계별 쿡가이드 (Cook Guide)</h3>
              <ol>
                {kit.recipeSteps.map((step, idx) => (
                  <li key={idx}>
                    <span className="step-num">Step {idx + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-wrap">
              <form onSubmit={handleAddReview} className="review-form">
                <h4>생생한 후기 작성하기</h4>
                <div className="rating-select">
                  <label>별점: </label>
                  <select
                    value={newReviewRating}
                    onChange={(e) => setNewReviewRating(Number(e.target.value))}
                  >
                    <option value="5">⭐⭐⭐⭐⭐ 5점 (최고예요)</option>
                    <option value="4">⭐⭐⭐⭐ 4점 (좋아요)</option>
                    <option value="3">⭐⭐⭐ 3점 (보통이에요)</option>
                    <option value="2">⭐⭐ 2점 (아쉬워요)</option>
                    <option value="1">⭐ 1점 (별로예요)</option>
                  </select>
                </div>
                <textarea
                  placeholder="맛, 신선도, 양에 대한 솔직한 평가를 남겨주세요."
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  rows="3"
                ></textarea>
                <button type="submit" className="btn-secondary">후기 등록</button>
              </form>

              <div className="reviews-list">
                {reviewsList.map((rev) => (
                  <div key={rev.id} className="review-item">
                    <div className="review-top">
                      <span className="reviewer">{rev.user}</span>
                      <span className="review-rating">{'⭐'.repeat(rev.rating)}</span>
                      <span className="review-date">{rev.date}</span>
                    </div>
                    <p className="review-comment">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
