import React, { useState } from 'react';

export default function SubscriptionSection() {
  const [selectedPlan, setSelectedPlan] = useState('2meals');
  const [people, setPeople] = useState('2p');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const plans = {
    '2meals': { title: '주 2회 패키지', desc: '주말 편안한 홈파티 & 라이트 쿠킹', price: '34,900원 / 주' },
    '3meals': { title: '주 3회 패키지 (인기 🔥)', desc: '평일 퇴근 후 간편하고 신선한 한 끼', price: '49,800원 / 주' },
    '4meals': { title: '주 4회 패키지', desc: '식비 절약과 영양 밸런스를 모두 챙기는 플랜', price: '64,900원 / 주' }
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="subscription" className="subscription-section">
      <div className="section-container">
        <div className="sub-box-card">
          <div className="sub-badge">REGULAR SUBSCRIPTION</div>
          <h2>매주 맞춤 밀키트 정기 구독 서비스</h2>
          <p className="sub-subtitle">
            매주 메뉴를 바꾸는 번거로움 없이, 취향에 딱 맞는 셰프 밀키트를 정기적으로 받아보세요.<br />
            <strong>정기구독 신청 시 매회 15% 추가 할인 + 상시 무료 새벽배송!</strong>
          </p>

          <div className="sub-plan-grid">
            {Object.keys(plans).map((key) => {
              const plan = plans[key];
              return (
                <div
                  key={key}
                  className={`plan-card ${selectedPlan === key ? 'active' : ''}`}
                  onClick={() => setSelectedPlan(key)}
                >
                  <div className="plan-radio">
                    <input
                      type="radio"
                      name="plan"
                      checked={selectedPlan === key}
                      onChange={() => setSelectedPlan(key)}
                    />
                    <h3>{plan.title}</h3>
                  </div>
                  <p className="plan-desc">{plan.desc}</p>
                  <div className="plan-price">{plan.price}</div>
                </div>
              );
            })}
          </div>

          <div className="sub-people-select">
            <span>인원 선택: </span>
            <button
              className={`people-btn ${people === '1p' ? 'active' : ''}`}
              onClick={() => setPeople('1p')}
            >
              1인 가구 (혼밥)
            </button>
            <button
              className={`people-btn ${people === '2p' ? 'active' : ''}`}
              onClick={() => setPeople('2p')}
            >
              2인 가구 (신혼/룸메)
            </button>
            <button
              className={`people-btn ${people === '4p' ? 'active' : ''}`}
              onClick={() => setPeople('4p')}
            >
              4인 패밀리
            </button>
          </div>

          {subscribed ? (
            <div className="sub-success-message">
              🎉 <strong>{email}</strong> 님, 구독 신청 알림 등록이 완료되었습니다! 첫 구독 결제 시 15% 쿠폰이 자동 발송됩니다.
            </div>
          ) : (
            <form className="sub-form" onSubmit={handleSubscribeSubmit}>
              <input
                type="email"
                placeholder="이메일을 입력하시면 구독 혜택 안내를 드립니다"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                무료 혜택 체험하기 ➔
              </button>
            </form>
          )}

          <div className="sub-guarantees">
            <span>✓ 언제든 해지 가능 (위약금 없음)</span>
            <span>✓ 매주 메뉴 자유롭게 변경</span>
            <span>✓ 안심 신선 보장제</span>
          </div>
        </div>
      </div>
    </section>
  );
}
