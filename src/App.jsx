import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Search, ShoppingBag, X, Plus, Minus, Heart, Menu } from 'lucide-react';
import './style.css';

const images = [
  'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/hubsheet_5d7a1931-371e-4013-9ccf-198cabca2934_607b1da07d888d1007365aa6',
  'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/hubsheet_5d7a1931-371e-4013-9ccf-198cabca2934_18db1cc8ba3d4a921ac9ef35',
  'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1792051990814',
  'https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1791089863336',
];
const products = [
  { id: 1, name: '소프트 테일러드 재킷', english: 'Soft tailored jacket', price: 189000, category: 'OUTER', image: images[0], color: 'Ivory' },
  { id: 2, name: '에브리데이 시티 재킷', english: 'Everyday city jacket', price: 178000, category: 'OUTER', image: images[1], color: 'Cream' },
  { id: 3, name: '시그니처 데일리 셋업', english: 'Signature daily set-up', price: 219000, category: 'SET-UP', image: images[2], color: 'Natural' },
  { id: 4, name: '에센셜 아우터', english: 'Essential outerwear', price: 198000, category: 'OUTER', image: images[3], color: 'Classic' },
];
const money = (value) => `₩${value.toLocaleString('ko-KR')}`;

export default function App() {
  const [filter, setFilter] = useState('ALL');
  const [liked, setLiked] = useState([]);
  const [bag, setBag] = useState([]);
  const [panel, setPanel] = useState(null);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [size, setSize] = useState('S');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const count = bag.reduce((sum, item) => sum + item.quantity, 0);
  const addToBag = () => {
    setBag((current) => {
      const existing = current.find((item) => item.id === selected.id && item.size === size);
      return existing ? current.map((item) => item === existing ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...selected, size, quantity: 1 }];
    });
    setSelected(null);
    setPanel('bag');
  };
  const changeQuantity = (id, itemSize, delta) => setBag((current) => current.map((item) => item.id === id && item.size === itemSize ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0));
  const close = () => { setPanel(null); setSelected(null); };
  const openProduct = (product) => { setSelected(product); setSize('S'); setPanel(null); };

  return (
    <>
      <div className="announcement">A NEW SEASON, A NEW PERSPECTIVE <span>첫 구매 회원 10% 혜택 <ArrowUpRight size={12} /></span></div>
      <header className="header">
        <a href="#" className="wordmark" aria-label="누아 홈">nuée<span>®</span></a>
        <nav className="desktop-nav" aria-label="메인 메뉴"><a href="#collection">NEW ARRIVALS <span className="nav-dot" /></a><a href="#collection" onClick={() => setFilter('ALL')}>SHOP</a><a href="#story">COLLECTION</a><a href="#about">OUR STORY</a></nav>
        <div className="header-actions"><button aria-label="검색" onClick={() => setPanel('search')}><Search size={19} strokeWidth={1.5} /></button><button className="bag-button" aria-label={`쇼핑백 ${count}개`} onClick={() => setPanel('bag')}><ShoppingBag size={19} strokeWidth={1.5} /><span>({count})</span></button><button className="mobile-menu" aria-label="메뉴" onClick={() => setPanel('menu')}><Menu size={21} /></button></div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy"><div className="eyebrow"><span className="tiny-line" /> SPRING / SUMMER 2026</div><h1>Effortless.<br />Essential.<br /><em>Entirely you.</em></h1><p className="hero-description">가장 자연스러운 순간, 가장 나다운 스타일.<br />일상의 감각을 깨우는 누아의 새로운 컬렉션.</p><a href="#collection" className="dark-link">DISCOVER THE COLLECTION <ArrowUpRight size={18} /></a><div className="hero-foot"><span>LESS, BUT BETTER.</span><span>01 — 04</span></div></div>
          <div className="hero-image"><img src={images[1]} alt="화이트 재킷으로 완성한 누아의 데일리 스타일링" fetchPriority="high" /><div className="image-top"><span>THE NEW EVERYDAY</span><span>SEOUL, 2026</span></div><div className="hero-image-bottom"><span>New season.<br /><em>Same you.</em></span><a href="#collection" aria-label="새 컬렉션 보기"><ArrowUpRight size={29} strokeWidth={1} /></a></div></div>
        </section>
        <section className="manifesto" id="about"><span className="eyebrow">THE NUÉE WAY</span><p>유행을 넘어, 오래도록 당신 곁에.<br /><span>Wear less. Feel more.</span></p><span className="manifesto-note">좋은 소재와 섬세한 실루엣,<br />그리고 변하지 않는 취향을 담습니다.</span></section>
        <section className="collection section-wrap" id="collection"><div className="section-heading"><div><span className="eyebrow">CURATED FOR YOUR EVERYDAY</span><h2>New & noteworthy<span> (04)</span></h2></div><a href="#products" onClick={() => setFilter('ALL')} className="text-link">VIEW ALL <ArrowUpRight size={16} /></a></div><div className="collection-toolbar"><div className="filters">{['ALL', 'OUTER', 'SET-UP'].map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><span>Timeless pieces, made for you.</span></div><div className="product-grid" id="products">{products.filter((product) => filter === 'ALL' || product.category === filter).map((product, index) => <article className="product" key={product.id}><div className="product-image"><button className="product-open" onClick={() => openProduct(product)} aria-label={`${product.name} 상세 보기`}><img src={product.image} alt={product.name} loading="lazy" /></button><span className="product-badge">{index === 0 ? 'NEW SEASON' : 'NEW'}</span><button className={`heart ${liked.includes(product.id) ? 'is-liked' : ''}`} aria-label={`${product.name} ${liked.includes(product.id) ? '관심 해제' : '관심 등록'}`} aria-pressed={liked.includes(product.id)} onClick={() => setLiked((current) => current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id])}><Heart size={18} strokeWidth={1.2} fill={liked.includes(product.id) ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={() => openProduct(product)}>DISCOVER <Plus size={16} /></button></div><div className="product-title"><button onClick={() => openProduct(product)}>{product.name}</button><span>{money(product.price)}</span></div><p className="product-english">{product.english}</p><div className="swatches"><span style={{ background: '#e2dbce' }} /><span style={{ background: '#42413d' }} /><small>{product.color}</small></div></article>)}</div></section>
        <section className="editorial" id="story"><div className="editorial-image"><img src={images[2]} alt="일상 속 자연스러운 여성 룩북" loading="lazy" /><span>NUÉE JOURNAL — VOL. 01</span></div><div className="editorial-copy"><span className="eyebrow">2026 SPRING EDITORIAL</span><h2>The art of<br /><em>being yourself.</em></h2><p>특별하지 않아도 충분히 아름다운 하루.<br />익숙한 거리, 느긋한 오후, 그리고 나만의 리듬.<br />누아가 제안하는 가장 편안한 우아함을 만나보세요.</p><a className="text-link" href="#collection">EXPLORE THE EDIT <ArrowUpRight size={18} /></a><span className="editorial-number">01 / THE EVERYDAY MUSE</span></div></section>
        <section className="values"><div><span>01 / THOUGHTFUL DESIGN</span><p>덜어낼수록 선명해지는 디자인</p></div><div><span>02 / QUALITY THAT LASTS</span><p>오래 입을수록 느껴지는 가치</p></div><div><span>03 / MADE FOR EVERYDAY</span><p>당신의 모든 일상과 함께</p></div></section>
        <section className="newsletter"><div><span className="eyebrow">LET’S STAY CLOSE</span><h2>A little inspiration,<br /><em>in your inbox.</em></h2><p>새로운 컬렉션과 누아의 이야기를 가장 먼저 만나보세요.</p></div><form onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }}><label htmlFor="email">NEWSLETTER</label><div className="email-field"><input id="email" type="email" required placeholder="이메일 주소를 입력해주세요" value={email} onChange={(event) => { setEmail(event.target.value); setSubscribed(false); }} /><button aria-label="뉴스레터 구독" type="submit"><ArrowRight size={22} strokeWidth={1.2} /></button></div><p role="status">{subscribed ? '감사합니다. 이 브라우저에 구독 신청이 접수되었습니다.' : '입력한 이메일은 뉴스레터 구독 신청에 사용됩니다. (현재 데모 서비스)'}</p></form></section>
      </main>
      <footer><div className="footer-top"><a href="#" className="wordmark footer-logo">nuée<span>®</span></a><p>For the way you are.<br />당신의 자연스러운 아름다움을 위해.</p><div><a href="#about">ABOUT US</a><a href="#story">JOURNAL <ArrowUpRight size={12} /></a><button onClick={() => setPanel('contact')}>CONTACT</button></div></div><div className="footer-bottom"><span>© 2026 NUÉE. ALL RIGHTS RESERVED.</span><span>DESIGNED FOR YOUR EVERYDAY.</span><a href="#">BACK TO TOP ↑</a></div></footer>
      {(panel || selected) && <div className="overlay" onClick={close}><section className={`drawer ${selected ? 'product-drawer' : ''}`} role="dialog" aria-modal="true" aria-label={selected ? selected.name : panel === 'bag' ? '쇼핑백' : panel === 'search' ? '상품 검색' : panel === 'menu' ? '메뉴' : '문의 안내'} onClick={(event) => event.stopPropagation()}><button className="close" onClick={close} aria-label="닫기"><X size={23} /></button>
        {selected && <><img className="detail-image" src={selected.image} alt={selected.name} /><span className="eyebrow">NUÉE ESSENTIALS</span><h2>{selected.name}</h2><p>{money(selected.price)}</p><p className="detail-description">일상에 자연스럽게 스며드는 섬세한 실루엣.<br />편안함과 균형을 담은 누아의 새로운 에센셜입니다.</p><label>SIZE</label><div className="sizes">{['S', 'M', 'L'].map((value) => <button key={value} className={size === value ? 'active' : ''} onClick={() => setSize(value)}>{value}</button>)}</div><button className="solid-button" onClick={addToBag}>쇼핑백에 담기 <Plus size={17} /></button><small className="demo-note">컬렉션 소개용 데모이며 실제 결제는 제공하지 않습니다.</small></>}
        {panel === 'bag' && <><span className="eyebrow">YOUR EDIT</span><h2>Shopping bag ({count})</h2>{bag.length === 0 ? <div className="empty"><ShoppingBag size={36} strokeWidth={1} /><p>아직 쇼핑백이 비어 있어요.</p><button className="solid-button" onClick={close}>컬렉션 둘러보기 <ArrowRight size={16} /></button></div> : <><div className="bag-items">{bag.map((item) => <div className="bag-item" key={`${item.id}-${item.size}`}><img src={item.image} alt={item.name} /><div><h3>{item.name}</h3><p>{item.color} / {item.size}</p><span>{money(item.price)}</span><div className="quantity"><button aria-label="수량 줄이기" onClick={() => changeQuantity(item.id, item.size, -1)}><Minus size={13} /></button>{item.quantity}<button aria-label="수량 늘리기" onClick={() => changeQuantity(item.id, item.size, 1)}><Plus size={13} /></button></div></div></div>)}</div><div className="bag-total"><span>SUBTOTAL</span><strong>{money(bag.reduce((sum, item) => sum + item.price * item.quantity, 0))}</strong></div><p className="demo-note">컬렉션 소개용 데모 쇼핑백입니다. 실제 주문 및 결제는 지원하지 않습니다.</p></> }</>}
        {panel === 'search' && <><span className="eyebrow">FIND YOUR ESSENTIALS</span><h2>Search</h2><div className="search-input"><input autoFocus aria-label="상품 검색어" placeholder="찾고 있는 아이템을 검색해보세요" value={query} onChange={(event) => setQuery(event.target.value)} /><Search size={20} /></div><p className="demo-note">{query ? '검색 결과' : '추천 아이템'}</p>{products.filter((product) => `${product.name} ${product.english} ${product.category}`.toLowerCase().includes(query.toLowerCase().trim())).map((product) => <button className="search-result" key={product.id} onClick={() => openProduct(product)}><img src={product.image} alt="" /><span>{product.name}<small>{money(product.price)}</small></span><ArrowUpRight size={18} /></button>)}{!products.some((product) => `${product.name} ${product.english} ${product.category}`.toLowerCase().includes(query.toLowerCase().trim())) && <p>검색 결과가 없습니다. 다른 검색어를 입력해주세요.</p>}</>}
        {panel === 'menu' && <nav className="drawer-nav">{[['NEW ARRIVALS', '#collection'], ['SHOP', '#collection'], ['COLLECTION', '#story'], ['OUR STORY', '#about']].map(([text, href]) => <a key={text} href={href} onClick={close}>{text}<ArrowUpRight size={22} /></a>)}</nav>}
        {panel === 'contact' && <><span className="eyebrow">GET IN TOUCH</span><h2>Here for you.</h2><p className="detail-description">누아 컬렉션을 찾아주셔서 감사합니다.<br />현재 브랜드 컬렉션 소개용 데모 페이지로,<br />고객 상담과 실제 주문은 운영하지 않습니다.</p><button className="solid-button" onClick={close}>계속 둘러보기 <ArrowRight size={17} /></button></>}
      </section></div>}
    </>
  );
}
