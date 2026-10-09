<template>
  <section class="hosted-deployment" aria-label="平台托管部署">
    <div class="hosted-intro">
      <span class="hosted-label">另一种部署方式</span>
      <h2>选择平台托管，让上线更简单</h2>
      <p>想减少自己搭建环境的步骤？选择我们的 dujiao-next 托管部署方案，把时间留给店铺经营。</p>
    </div>
    <div class="hosted-cards">
      <article><span class="card-number">01</span><h3>省去环境搭建</h3><p>通过平台托管方案开始部署，减少服务器环境配置的准备工作。</p></article>
      <article><span class="card-number">02</span><h3>专注店铺经营</h3><p>把更多精力放在商品、订单与客户服务上，让开店过程更轻松。</p></article>
      <article><span class="card-number">03</span><h3>按需选择方案</h3><p>查看服务详情、托管内容与购买说明，选择适合自己的部署方式。</p></article>
    </div>
    <div class="hosted-footer">
      <span>从了解方案开始，找到适合你的上线方式</span>
      <a href="https://hfz.pw/shop/2667.html" target="_blank" rel="noopener noreferrer">了解托管部署 <span aria-hidden="true">↗</span></a>
    </div>
  </section>
</template>

<style scoped>
.hosted-deployment {
  margin: 28px 0 32px;
  padding: 28px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 48%, transparent);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.hosted-label { color: var(--vp-c-brand-1); font-size: 12px; font-weight: 600; letter-spacing: .08em; }
.hosted-intro h2 { margin: 10px 0 12px; padding: 0; border: 0; font-size: 24px; line-height: 1.4; }
.hosted-intro p { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.8; }
.hosted-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 22px 0; }
.hosted-cards article {
  padding: 20px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 65%, transparent);
  border-radius: 16px;
  background: color-mix(in srgb, var(--vp-c-bg) 48%, transparent);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 16px rgba(28, 48, 40, .035);
}
.card-number { color: var(--vp-c-brand-1); font-size: 12px; font-weight: 600; }
.hosted-cards h3 { margin: 10px 0 8px; font-size: 16px; }
.hosted-cards p { margin: 0; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.75; }
.hosted-footer { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.hosted-footer > span { color: var(--vp-c-text-2); font-size: 12px; }
.hosted-footer a { display: inline-flex; align-items: center; gap: 12px; flex-shrink: 0; padding: 10px 20px; border-radius: 999px; background: var(--vp-c-brand-1); color: var(--vp-c-bg); font-size: 14px; font-weight: 600; text-decoration: none; transition: background .2s; }
.hosted-footer a:hover { background: var(--vp-c-brand-2); }
.hosted-footer a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 4px; }
@media (max-width: 640px) {
  .hosted-deployment { padding: 20px; border-radius: 20px; }
  .hosted-intro h2 { font-size: 21px; }
  .hosted-cards { grid-template-columns: 1fr; }
  .hosted-footer { align-items: flex-start; flex-direction: column; }
}
</style>
