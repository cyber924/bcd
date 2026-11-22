import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text">FRESH MEALKIT</span>
            <p className="brand-desc">
              셰프의 정성과 신선한 식재료를 그대로 담아 당신의 식탁에.<br />
              오늘 밤 10시 주문 시 내일 아침 7시 전 신선 새벽배송!
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>카테고리</h4>
              <ul>
                <li><a href="#catalog">한식 & 전골</a></li>
                <li><a href="#catalog">양식 & 파스타</a></li>
                <li><a href="#catalog">일식 & 아시안</a></li>
                <li><a href="#catalog">캠핑 & BBQ</a></li>
                <li><a href="#catalog">다이어트 & 샐러드</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>고객 센터</h4>
              <ul>
                <li><a href="#hero">자주 묻는 질문</a></li>
                <li><a href="#hero">1:1 문의하기</a></li>
                <li><a href="#subscription">정기배송 문의</a></li>
                <li><a href="#hero">배송 및 환불 정책</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>고객상담센터</h4>
              <p className="phone">1588-0000</p>
              <p className="hours">평일 09:00 - 18:00 (점심시간 12:00 - 13:00)<br />주말/공휴일 휴무</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 FRESH MEALKIT Studio. All rights reserved.</p>
          <div className="footer-sns">
            <span>Instagram</span>
            <span>YouTube</span>
            <span>KakaoTalk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
