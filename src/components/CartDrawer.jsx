import React, { useState } from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [isOrdering, setIsOrdering] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.servings / 2)) * item.quantity, 0);
  const freeShippingThreshold = 40000;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 3000;
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const finalTotal = subtotal - discountAmount + shippingFee;
  const freeShipProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'MEAL10' || couponCode.trim().toUpperCase() === 'FRESH10') {
      setDiscountPercent(10);
      alert('🎉 10% 할인 쿠폰이 적용되었습니다!');
    } else if (couponCode.trim().toUpperCase() === 'WELCOME') {
      setDiscountPercent(15);
      alert('🎉 웰컴 15% 할인 쿠폰이 적용되었습니다!');
    } else {
      alert('유효하지 않은 쿠폰 코드입니다. (추천 쿠폰: MEAL10)');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('장바구니가 비어 있습니다.');
      return;
    }
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      alert(`🎉 주문 및 새벽배송 신청이 완료되었습니다!\n배송 예약일: ${deliveryDate}\n결제 금액: ${finalTotal.toLocaleString()}원\n\n갓 지은 신선한 밀키트로 즐거운 식사 되세요!`);
      onClearCart();
      onClose();
    }, 1000);
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <h3>🛒 나의 밀키트 장바구니</h3>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Free Shipping Progress */}
        <div className="free-shipping-bar-wrap">
          <p>
            {subtotal >= freeShippingThreshold
              ? '✨ 무료 새벽배송 조건이 달성되었습니다!'
              : `🚚 ${(freeShippingThreshold - subtotal).toLocaleString()}원 더 담으면 무료배송!`}
          </p>
          <div className="progress-bg">
            <div className="progress-fill" style={{ width: `${freeShipProgress}%` }}></div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div className="empty-cart-view">
              <span className="empty-icon">🥗</span>
              <p>장바구니에 담긴 밀키트가 없습니다.</p>
              <button className="btn-secondary" onClick={onClose}>인기 밀키트 둘러보기</button>
            </div>
          ) : (
            cartItems.map((item) => {
              const itemPrice = (item.price * (item.servings / 2));
              return (
                <div key={`${item.id}-${item.servings}`} className="cart-item-card">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p className="cart-servings-badge">{item.servings}인분 포장</p>
                    <p className="cart-price">{itemPrice.toLocaleString()}원</p>
                    <div className="cart-item-qty">
                      <button onClick={() => onUpdateQty(item.id, item.servings, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, item.servings, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => onRemoveItem(item.id, item.servings)}>✕</button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer & Order Summary */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="coupon-box">
              <input
                type="text"
                placeholder="쿠폰코드 입력 (예: MEAL10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={applyCoupon}>적용</button>
            </div>

            <div className="delivery-date-box">
              <label>🚚 수령 희망일 선택:</label>
              <input
                type="date"
                value={deliveryDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>

            <div className="summary-rows">
              <div className="row">
                <span>상품 금액</span>
                <span>{subtotal.toLocaleString()}원</span>
              </div>
              {discountAmount > 0 && (
                <div className="row discount">
                  <span>할인 금액</span>
                  <span>-{discountAmount.toLocaleString()}원</span>
                </div>
              )}
              <div className="row">
                <span>배송비 (새벽배송)</span>
                <span>{shippingFee === 0 ? '무료' : `${shippingFee.toLocaleString()}원`}</span>
              </div>
              <div className="row total">
                <span>최종 결제예정금액</span>
                <span className="total-price">{finalTotal.toLocaleString()}원</span>
              </div>
            </div>

            <button
              className="btn-checkout"
              onClick={handleCheckout}
              disabled={isOrdering}
            >
              {isOrdering ? '결제 처리중...' : `${finalTotal.toLocaleString()}원 새벽배송 결제하기`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
