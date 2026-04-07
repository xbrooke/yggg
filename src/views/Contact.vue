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
  background: #FFFFFF;
  min-height: 100vh;
}

.page-header {
  position: relative;
  padding: 160px 0 100px;
  text-align: center;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%);
  z-index: 0;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;

  &.circle-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.1) 0%, transparent 70%);
    top: -150px;
    right: -100px;
  }

  &.circle-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.08) 0%, transparent 70%);
    bottom: -100px;
    left: -50px;
  }
}

.page-header .container {
  position: relative;
  z-index: 1;
}

.page-tag {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 20px;
}

.page-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.page-header p {
  font-size: 18px;
  color: #888;
}

.page-content {
  padding: 60px 0 120px;
}

.contact-box {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 48px;
  background: #FFFFFF;
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.qrcode-wrapper {
  margin-bottom: 32px;

  .qrcode-img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
  }
}

.contact-info {
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  .wechat-id {
    font-size: 20px;
    font-weight: 700;
    color: #07C160;
    margin-bottom: 8px;
  }

  .contact-tip {
    font-size: 14px;
    color: #888;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 120px 0 60px;

    h1 {
      font-size: 36px;
    }
  }

  .contact-box {
    padding: 40px 32px;
    margin: 0 20px;

    .qrcode-img {
      width: 200px;
      height: 200px;
    }
  }
}
</style>