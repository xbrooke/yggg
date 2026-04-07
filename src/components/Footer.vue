<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <svg class="brand-icon" viewBox="0 0 24 24" width="20" height="20" fill="#07C160">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
        <span class="brand-name">企小帮</span>
        <span class="brand-dot">·</span>
        <span class="brand-desc">专注深圳企业财税服务</span>
      </div>
      <p class="footer-copy">© 2026 徐大兵维护</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 48px 0;
  background: #FAFAFA;
  border-top: 1px solid #E5E5E5;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;

  .brand-icon {
    flex-shrink: 0;
  }

  .brand-name {
    font-size: 16px;
    font-weight: 700;
    color: #1a1a1a;
  }

  .brand-dot {
    color: #07C160;
  }

  .brand-desc {
    font-size: 14px;
    color: #666666;
  }
}

.footer-copy {
  font-size: 14px;
  color: #999999;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>