"use client";

import { useMemo, useState } from "react";

type AddOn = {
  id: string;
  vendor: "好醉" | "芮希";
  name: string;
  price: number;
  note?: string;
};

const savorPlans = [
  {
    name: "法式小花園",
    english: "FRENCH GARDEN",
    price: "NT$ 30,000",
    options: ["無背板・6 柱 NT$ 26,800", "無背板・4 柱 NT$ 21,500"],
    image: "works/savor-french-garden.jpg",
    tone: "柔霧花朵 × 法式空氣感",
    size: "高 240 × 寬 400–520 × 深 100 cm，可微調",
  },
  {
    name: "Blushy 粉霧花園",
    english: "BLUSHY GARDEN",
    price: "NT$ 33,000",
    options: ["無背板 NT$ 28,800", "6 柱改可移動花型 NT$ 31,500"],
    image: "works/savor-blushy-garden.jpg",
    tone: "粉橘紙花 × 甜美精品感",
    size: "高 260 × 寬 420–520 × 深 130 cm，可微調",
  },
  {
    name: "精靈花園",
    english: "FAIRY GARDEN",
    price: "NT$ 25,800",
    options: ["無背板方案", "三款中入手門檻最低"],
    image: "works/savor-fairy-garden.jpg",
    tone: "大型花藝 × 戲劇性合影",
    size: "高 200–250 × 寬 300–480 × 深 100 cm",
  },
];

const addons: AddOn[] = [
  { id: "s-album", vendor: "好醉", name: "相本桌", price: 3500 },
  { id: "s-gift", vendor: "好醉", name: "收禮桌", price: 2000 },
  { id: "s-tables", vendor: "好醉", name: "雙桌面包套", price: 5000 },
  { id: "s-mirror", vendor: "好醉", name: "雲朵迎賓鏡", price: 800, note: "加道具另加 NT$ 1,000" },
  { id: "s-photo", vendor: "好醉", name: "相片牆一組", price: 7500, note: "一大一小；兩組 NT$ 12,000" },
  { id: "s-aisle", vendor: "好醉", name: "走道花一組", price: 10000, note: "一組兩柱；兩組 9 折、三組 8 折" },
  { id: "s-floor", vendor: "好醉", name: "地貼（5 米內）", price: 3500, note: "6 米內 NT$ 4,200" },
  { id: "s-vip", vendor: "好醉", name: "西式主桌佈置", price: 5000 },
  { id: "s-dessert", vendor: "好醉", name: "點心桌花藝", price: 2000 },
  { id: "r-wall", vendor: "芮希", name: "婚紗牆／大型座位表", price: 4200, note: "80 × 200 cm；含花藝為 NT$ 4,600" },
  { id: "r-mirror", vendor: "芮希", name: "公版迎賓鏡", price: 1500, note: "含花藝，活動後回收" },
  { id: "r-custom-mirror", vendor: "芮希", name: "客製迎賓鏡", price: 3500, note: "約 45 × 52 cm，含花藝，可帶回" },
  { id: "r-full-mirror", vendor: "芮希", name: "全身迎賓鏡", price: 5500, note: "A 雲朵／B 黑框鐵架／C 無框木架" },
  { id: "r-frame", vendor: "芮希", name: "拍照框", price: 1500, note: "60 × 80 cm" },
  { id: "r-pet45", vendor: "芮希", name: "寵物立牌 45 cm", price: 700, note: "60 cm NT$ 900；80 cm NT$ 1,100" },
  { id: "r-seat", vendor: "芮希", name: "座位表＋迎賓板", price: 2500, note: "約 50 × 65 cm，含花藝" },
  { id: "r-flower", vendor: "芮希", name: "宴會廳地上花叢一對", price: 3500 },
  { id: "r-ground", vendor: "芮希", name: "地花＋草皮一對", price: 2500 },
  { id: "r-paper", vendor: "芮希", name: "大型紙花一對", price: 3500, note: "2 朵大型紙花＋地花" },
  { id: "r-aisle", vendor: "芮希", name: "花柱走道花一對", price: 4000, note: "一對 2 柱" },
];

const money = new Intl.NumberFormat("zh-TW");

export default function Home() {
  const [vendor, setVendor] = useState<"全部" | "好醉" | "芮希">("全部");
  const [selected, setSelected] = useState<string[]>([]);

  const filteredAddons = vendor === "全部" ? addons : addons.filter((item) => item.vendor === vendor);
  const total = useMemo(
    () => addons.filter((item) => selected.includes(item.id)).reduce((sum, item) => sum + item.price, 0),
    [selected],
  );

  const toggle = (id: string) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到頁首">
          <span className="brand-mark">W</span>
          <span>WEDDING SCENE<br /><small>佈置提案比較</small></span>
        </a>
        <nav aria-label="網站導覽">
          <a href="#verdict">快速結論</a>
          <a href="#compare">完整比較</a>
          <a href="#plans">方案介紹</a>
          <a href="#calculator">加購試算</a>
        </nav>
        <a className="header-cta" href="#decision">幫我選方案</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">WEDDING DECOR · PROPOSAL REVIEW</p>
          <h1>一眼看懂，<br /><em>哪一種美</em>更適合你。</h1>
          <p className="hero-intro">
            把「好醉工作室」與「芮希」的報價、作品、包含項目與限制放在同一把尺上，
            從完整主景到細節單品，找到最符合婚禮現場與預算的佈置方式。
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#compare">開始比較</a>
            <a className="text-link" href="#gallery">先看作品 <span>↘</span></a>
          </div>
          <div className="hero-stats">
            <div><b>2</b><span>家提案</span></div>
            <div><b>3</b><span>主景系列</span></div>
            <div><b>20</b><span>項加購單品</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="hero-main">
            <img src="works/savor-french-garden.jpg" alt="好醉法式小花園婚禮佈置作品" />
            <figcaption><span>01</span> 好醉 · 法式小花園</figcaption>
          </figure>
          <figure className="hero-small">
            <img src="works/rexi-main-backdrop.jpg" alt="芮希清新花藝婚禮背板作品" />
            <figcaption><span>02</span> 芮希 · 花藝背板</figcaption>
          </figure>
          <div className="seal">CURATED<br />FOR YOUR<br />WEDDING</div>
        </div>
      </section>

      <section className="verdict section" id="verdict">
        <div className="section-heading">
          <p className="eyebrow">THE SHORT ANSWER</p>
          <h2>先說結論：兩家不是同一種賽道</h2>
          <p>好醉提供「完整場景」，芮希提供「自由組裝」。選擇關鍵不是誰比較便宜，而是你需要一座主景，還是把預算集中在幾個有感細節。</p>
        </div>
        <div className="verdict-grid">
          <article className="verdict-card savor">
            <div className="card-index">A</div>
            <p className="vendor-label">SAVOR STUDIO · 好醉工作室</p>
            <h3>想要完整、上鏡、到場就成立的送客主景</h3>
            <p>三套公版花園主景，包含氛圍燈光、專人進撤場與場勘，畫面規模與完成度較明確。</p>
            <div className="price-line"><span>主景方案</span><strong>NT$ 21,500 起</strong></div>
            <span className="pill">適合：重視合影效果、希望少做搭配決策</span>
          </article>
          <article className="verdict-card rexi">
            <div className="card-index">B</div>
            <p className="vendor-label">REXI · 芮希</p>
            <h3>想用有限預算，把迎賓與動線細節做得剛剛好</h3>
            <p>迎賓鏡、座位表、寵物立牌、走道花等單品清楚，可依場地現況與需求自由增減。</p>
            <div className="price-line"><span>單品方案</span><strong>NT$ 700 起</strong></div>
            <span className="pill">適合：場地已有背板、偏好彈性搭配</span>
          </article>
        </div>
      </section>

      <section className="compare section" id="compare">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">SIDE BY SIDE</p>
            <h2>完整方案比較</h2>
          </div>
          <p>以下依目前收到的提案內容整理；空白不代表廠商無法提供，而是現有資料尚未載明。</p>
        </div>
        <div className="compare-table" role="table" aria-label="好醉與芮希方案比較">
          <div className="compare-row compare-head" role="row">
            <div role="columnheader">比較項目</div>
            <div role="columnheader"><span className="dot dot-savor" /> 好醉工作室</div>
            <div role="columnheader"><span className="dot dot-rexi" /> 芮希</div>
          </div>
          {[
            ["核心模式", "完整公版主景＋加購模組", "迎賓／輸出／花藝單品自由搭配"],
            ["價格帶", "主景 NT$ 21,500–33,000", "單品 NT$ 700–5,500"],
            ["主視覺", "法式小花園、粉霧花園、精靈花園", "現有主景作品可參考，提案未列主景包套價"],
            ["方案贈送", "Logo／相本桌佈置／地貼，公版 3 選 1", "提案未載明"],
            ["進撤場", "專人進撤場佈置", "提案未載明，建議確認"],
            ["場勘", "專人提前場勘", "提案未載明，建議確認"],
            ["燈光", "含氛圍燈光設計／補光燈", "提案未載明"],
            ["晚宴", "晚宴不加價", "提案未載明"],
            ["場地限制", "僅限室內；報價僅送客區", "大型紙花需先定位，不建議移動"],
            ["交通", "新竹市區優惠免車資", "提案未載明，建議確認"],
            ["證婚共用", "若使用於證婚，需額外報價", "走道花可單獨搭配"],
            ["最適合", "要有完整大景、重視婚紗與送客照", "場地已有硬體、只想補強迎賓與動線"],
          ].map(([label, savor, rexi]) => (
            <div className="compare-row" role="row" key={label}>
              <div role="rowheader">{label}</div>
              <div role="cell">{savor}</div>
              <div role="cell">{rexi}</div>
            </div>
          ))}
        </div>
        <p className="table-note">※ 最終尺寸、花色、施作範圍、運送車資與現場條件，仍應以廠商確認後的正式報價單為準。</p>
      </section>

      <section className="plans section" id="plans">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">SAVOR STUDIO</p>
            <h2>好醉｜三種完整花園主景</h2>
          </div>
          <p>共同包含：公版 Logo／相本桌佈置／地貼 3 選 1，以及燈光、進撤場與提前場勘。</p>
        </div>
        <div className="plan-grid">
          {savorPlans.map((plan, index) => (
            <article className="plan-card" key={plan.name}>
              <div className="plan-image">
                <img src={plan.image} alt={`好醉 ${plan.name} 作品與方案示意`} />
                <span>0{index + 1}</span>
              </div>
              <div className="plan-content">
                <p>{plan.english}</p>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <div className="plan-tone">{plan.tone}</div>
                <ul>
                  {plan.options.map((option) => <li key={option}>{option}</li>)}
                  <li>{plan.size}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="attention">
          <span>PLEASE NOTE</span>
          <p><b>粉霧花園移動限制：</b>原 6 柱小花柱為固定式。如改為可移動花型，優惠價 NT$ 31,500；小花柱每組 2 柱移動一次 NT$ 1,500。</p>
        </div>
      </section>

      <section className="rexi-section section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">REXI · À LA CARTE</p>
            <h2>芮希｜把預算花在看得見的細節</h2>
          </div>
          <p>適合婚宴場地已有背板或佈置基礎，希望加強迎賓、座位引導、寵物元素與走道花藝。</p>
        </div>
        <div className="rexi-showcase">
          <figure>
            <img src="works/rexi-main-backdrop.jpg" alt="芮希婚禮主景花藝背板作品" />
            <figcaption>主景花藝作品參考 <span>提案未附包套價格</span></figcaption>
          </figure>
          <div className="menu-columns">
            <div className="menu-group">
              <p>WELCOME AREA</p>
              <h3>迎賓與座位引導</h3>
              <ul>
                <li><span>婚紗牆／大型座位表</span><b>4,200</b></li>
                <li><span>含花藝版本</span><b>4,600</b></li>
                <li><span>座位表＋迎賓板</span><b>2,500</b></li>
              </ul>
            </div>
            <div className="menu-group">
              <p>MIRROR</p>
              <h3>迎賓鏡面</h3>
              <ul>
                <li><span>公版迎賓鏡・回收</span><b>1,500</b></li>
                <li><span>客製迎賓鏡・可帶回</span><b>3,500</b></li>
                <li><span>全身迎賓鏡</span><b>5,500</b></li>
              </ul>
            </div>
            <div className="menu-group">
              <p>PERSONAL TOUCH</p>
              <h3>個人化輸出</h3>
              <ul>
                <li><span>拍照框 60 × 80 cm</span><b>1,500</b></li>
                <li><span>寵物立牌 45／60／80 cm</span><b>700 起</b></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="aisle-feature">
          <img src="works/rexi-aisle-flowers.jpg" alt="芮希地花、大紙花與花柱走道花方案" />
          <div>
            <p className="eyebrow">AISLE & FLOOR FLORAL</p>
            <h3>走道花藝，從地面長出儀式感</h3>
            <div className="mini-price-grid">
              <span>地花＋草皮一對 <b>NT$ 2,500</b></span>
              <span>大型紙花一對 <b>NT$ 3,500</b></span>
              <span>花柱走道花一對 <b>NT$ 4,000</b></span>
              <span>宴會廳地上花叢一對 <b>NT$ 3,500</b></span>
            </div>
            <p className="muted">大型紙花需事先安排高低層次與位置，不建議婚宴中途移動。</p>
          </div>
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">VISUAL DIRECTION</p>
          <h2>同樣是花園，畫面語言很不同</h2>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-tall">
            <img src="works/savor-blushy-garden.jpg" alt="好醉粉霧花園完整作品" />
            <figcaption><b>好醉 · 粉霧花園</b><span>甜美、柔霧、明亮</span></figcaption>
          </figure>
          <figure>
            <img src="works/savor-table-details.jpg" alt="好醉相本桌及桌面細節作品" />
            <figcaption><b>好醉 · 桌面細節</b><span>復古、層次、故事感</span></figcaption>
          </figure>
          <figure>
            <img src="works/savor-aisle-photo-wall.jpg" alt="好醉走道花與相片牆作品" />
            <figcaption><b>好醉 · 走道／相片牆</b><span>延伸婚禮動線</span></figcaption>
          </figure>
          <figure className="gallery-wide">
            <img src="works/rexi-main-backdrop.jpg" alt="芮希清新花藝背板完整作品" />
            <figcaption><b>芮希 · 清新花藝背板</b><span>留白、自然、可愛的大型紙花</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="calculator section" id="calculator">
        <div className="calculator-top">
          <div className="section-heading">
            <p className="eyebrow">QUICK ESTIMATE</p>
            <h2>加購項目快速試算</h2>
            <p>勾選想要的單品，先掌握大致加購金額。此處不含主景方案、折扣、車資與未載明費用。</p>
          </div>
          <div className="total-card">
            <span>目前加購估算</span>
            <strong>NT$ {money.format(total)}</strong>
            <small>{selected.length} 個項目</small>
          </div>
        </div>
        <div className="filter-tabs" aria-label="篩選廠商">
          {(["全部", "好醉", "芮希"] as const).map((item) => (
            <button className={vendor === item ? "active" : ""} key={item} onClick={() => setVendor(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="addon-grid">
          {filteredAddons.map((item) => (
            <button
              className={`addon-card ${selected.includes(item.id) ? "selected" : ""}`}
              key={item.id}
              onClick={() => toggle(item.id)}
              aria-pressed={selected.includes(item.id)}
            >
              <span className={`vendor-tag ${item.vendor === "好醉" ? "tag-savor" : "tag-rexi"}`}>{item.vendor}</span>
              <span className="check">{selected.includes(item.id) ? "✓" : "+"}</span>
              <h3>{item.name}</h3>
              <strong>NT$ {money.format(item.price)}</strong>
              {item.note && <small>{item.note}</small>}
            </button>
          ))}
        </div>
        <p className="calculator-note">試算僅為理解預算結構，不構成正式報價；同品項不同尺寸或數量將影響價格。</p>
      </section>

      <section className="decision section" id="decision">
        <div className="decision-copy">
          <p className="eyebrow">DECISION GUIDE</p>
          <h2>最後，用三個問題做決定</h2>
          <p>婚禮佈置不是把項目買得越多越好，而是讓賓客走進現場時，視線能自然被引導到你最在乎的畫面。</p>
        </div>
        <div className="decision-list">
          <article>
            <span>01</span>
            <div><h3>場地本身有可以直接使用的背板嗎？</h3><p>沒有，或現有背板不符合婚禮色系 → 優先看好醉完整主景。</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>送客合照會是你最重視的成品嗎？</h3><p>是 → 大景與補光更重要；不是 → 可把預算拆到迎賓鏡、座位表與走道花。</p></div>
          </article>
          <article>
            <span>03</span>
            <div><h3>儀式區與送客區需要共用花藝嗎？</h3><p>需要 → 簽約前確認移動次數、時間、人力與追加費，尤其是固定式紙花與花柱。</p></div>
          </article>
        </div>
        <div className="final-recommendation">
          <div><span>選完整度</span><b>好醉工作室</b><p>完整主景、燈光、場勘與進撤場資訊較清楚。</p></div>
          <div className="or">OR</div>
          <div><span>選自由度</span><b>芮希</b><p>單品透明、低門檻，適合依場地需求精準加購。</p></div>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">W</span><span>WEDDING SCENE<br /><small>佈置提案比較</small></span></div>
        <p>本頁依 2026 年 7 月收到之提案內容整理，作品版權歸原佈置公司所有。<br />實際服務與金額以雙方最終書面確認為準。</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
