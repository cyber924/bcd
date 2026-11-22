import React from 'react';

export default function FeaturedSection({ onSelectKit }) {
  const highlightFeatures = [
    {
      id: 'img1',
      tag: '시그니처 다이닝',
      title: '셰프 프리미엄 스테이크 & 파스타',
      desc: '레스토랑 품질 그대로 내 집 식탁에서 경험하세요. 비법 마리네이드 숙성 육류와 생생 페스토 소스가 들어있습니다.',
      img: 'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790057722907',
      kitId: 1
    },
    {
      id: 'img2',
      tag: '신선 재료 100%',
      title: '산지직송 10분 손질 완료 식재료',
      desc: '씻고 썰 필요 없이 뜯고 볶으면 완성! 당일 새벽 수확한 청정 채소와 진공 포장 재료로 극강의 Fresh함을 선사합니다.',
      img: 'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790057732669',
      kitId: 2
    },
    {
      id: 'img3',
      tag: '헬시 웰니스',
      title: '건강 식단 & 웰빙 그린 샐러드 파스타',
      desc: '저당/저염 영양 밸런스 설계. 칼로리는 줄이고 섬유질과 영양소는 가득 채워 갓생 사시는 분들을 위한 맞춤 헬시 킷.',
      img: 'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790052412177',
      kitId: 3
    },
    {
      id: 'img4',
      tag: '아웃도어 & 여행',
      title: '캠핑·여행용 간편 얼큰 원팬전골',
      desc: '야외나 캠핑장에서도 냄비 하나만 있으면 OK! 어디서든 실패 없는 깊은 맛과 간편함을 전달합니다.',
      img: 'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790052237762',
      kitId: 4
    }
  ];

  return (
    <section className="featured-section">
      <div className="section-title text-center">
        <h2>🔥 CookEasy 대표 프리미엄 컬렉션</h2>
        <p>맛, 건강, 감성을 모두 잡은 이번 주 가장 시그니처한 밀키트를 직접 살펴보세요.</p>
      </div>

      <div className="grid-2x2">
        {highlightFeatures.map((feat) => (
          <div key={feat.id} className="feature-card" onClick={() => onSelectKit(feat.kitId)}>
            <div className="feature-img-wrapper">
              <img src={feat.img} alt={feat.title} loading="lazy" />
              <span className="feature-tag">{feat.tag}</span>
            </div>
            <div className="feature-info">
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
              <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.88rem', color: '#ff6b35', fontWeight: 700 }}>
                  상세 레시피 및 구성품 보기 &rarr;
                </span>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>무료 새벽배송 🚚</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
