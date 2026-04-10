<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="header-bg">
        <div class="bg-circle circle-1"></div>
        <div class="bg-circle circle-2"></div>
      </div>
      <div class="container">
        <span class="page-tag">联系我们</span>
        <h1>期待与您合作</h1>
        <p>有问题想咨询？直接扫码加微信吧</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="contact-box">
          <div class="qrcode-wrapper">
            <img src="/wechat-qr.jpg" alt="微信二维码" class="qrcode-img" />
          </div>
          <div class="contact-info">
            <h2>扫码添加微信</h2>
            <p class="wechat-id">yuangungundeVX</p>
            <p class="contact-tip">长按识别二维码，或搜索微信号添加</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  background: linear-gradient(165deg, #f0fdf4 0%, #ffffff 100%);
  min-height: 100vh;
}

.page-header {
  position: relative;
  padding: 140px 0 70px;
  text-align: center;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 65%);
    border-radius: 50%;
  }
}

.page-header .container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
}

.page-tag {
  display: inline-block;
  padding: 5px 14px;
  background: linear-gradient(135deg, #059669 0%, #10B981 100%);
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.page-header h1 {
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.page-header p {
  font-size: 15px;
  color: #6b7280;
}

.page-content {
  padding: 40px 0 80px;
}

.contact-box {
  max-width: 380px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 36px;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
}

.qrcode-wrapper {
  margin-bottom: 24px;
  text-align: center;

  .qrcode-img {
    width: 200px;
    height: 200px;
    border-radius: 12px;
    margin: 0 auto;
  }
}

.contact-info {
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 10px;
  }

  .wechat-id {
    font-size: 18px;
    font-weight: 600;
    color: #059669;
    margin-bottom: 6px;
  }

  .contact-tip {
    font-size: 13px;
    color: #9ca3af;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 100px 0 40px;

    .container {
      padding: 0 20px;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
    }
  }

  .page-content {
    padding: 20px 0 50px;
  }

  .contact-box {
    padding: 28px 20px;
    margin: 0 20px;
    border-radius: 12px;

    .qrcode-img {
      width: 160px;
      height: 160px;
    }

    h2 {
      font-size: 18px;
    }

    .wechat-id {
      font-size: 16px;
    }
  }
}
</style>