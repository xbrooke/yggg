<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img class="brand-icon" src="/logo.png" alt="企小帮" width="20" height="20">
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
  padding: 40px 0;
  background: #FFFFFF;
  border-top: 1px solid #f0f0f0;
}

.footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 4px;
  }

  .brand-name {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
  }

  .brand-dot {
    color: #10B981;
    font-weight: 300;
  }

  .brand-desc {
    font-size: 13px;
    color: #9ca3af;
  }
}

.footer-copy {
  font-size: 13px;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .footer {
    padding: 32px 0;
  }

  .footer-inner {
    flex-direction: column;
    gap: 14px;
    padding: 0 20px;
    text-align: center;
  }

  .footer-brand {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    img {
      display: none;
    }
  }

  .brand-desc {
    width: 100%;
    font-size: 12px;
  }

  .footer-copy {
    font-size: 12px;
  }
}
</style>