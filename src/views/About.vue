<template>
  <div class="about-page">
    <section class="page-header">
      <div class="header-bg">
        <div class="bg-circle circle-1"></div>
        <div class="bg-circle circle-2"></div>
      </div>
      <div class="container">
        <span class="page-tag">关于我们</span>
        <h1>专业可信的财税合作伙伴</h1>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <div class="intro-content">
          <h2>企小帮</h2>
          <p class="intro-title">专业团队 · 专注深圳企业财税服务</p>
          <p class="intro-text">
            8年+行业经验，为500+深圳企业提供专业财税服务。<br>
            擅长代理记账、税务筹划、工商变更等领域。<br>
            坚持一对一专属服务，让您的企业财税无忧。
          </p>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container">
        <div class="stats-wrapper">
          <div class="stat-item" v-for="stat in stats" :key="stat.label">
            <span class="stat-num">{{ stat.num }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item" v-for="item in features" :key="item.title">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path :d="item.icon"/>
              </svg>
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-wrapper">
          <div class="cta-content">
            <h2>准备好开始了吗？</h2>
            <p>添加微信，获取专业财税顾问一对一服务</p>
          </div>
          <button class="btn-primary" @click="showWechat">
            立即咨询
          </button>
        </div>
      </div>
    </section>

    <el-dialog v-model="showWechatDialog" title="扫码添加微信" width="320px" center>
      <div class="wechat-qrcode">
        <img src="/wechat-qr.jpg" alt="微信二维码" class="qrcode-img" />
        <p class="qrcode-label">长按识别二维码</p>
        <p class="wechat-id">yuangungundeVX</p>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showWechatDialog = ref(false)

const stats = [
  { num: '8+', label: '年行业经验' },
  { num: '500+', label: '服务客户' },
  { num: '100%', label: '客户好评' },
  { num: '24h', label: '快速响应' }
]

const features = [
  {
    title: '专业资质',
    desc: '中级会计师，8年+行业经验',
    icon: 'M12 2L2 7v10l10 5 10-5V7L12 2z'
  },
  {
    title: '专属服务',
    desc: '一对一全程对接，及时响应',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
  },
  {
    title: '安全保密',
    desc: '严格遵守职业道德，信息安全',
    icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'
  },
  {
    title: '经验丰富',
    desc: '熟悉各类行业财税特点',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
  }
]

const showWechat = () => {
  showWechatDialog.value = true
}
</script>

<style lang="scss" scoped>
.about-page {
  background: #FFFFFF;
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
}

.intro {
  padding: 80px 0;
}

.intro-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  .intro-title {
    font-size: 16px;
    color: #07C160;
    font-weight: 500;
    margin-bottom: 32px;
  }

  .intro-text {
    font-size: 16px;
    color: #444444;
    line-height: 1.8;
  }
}

.stats {
  padding: 40px 0 80px;
}

.stats-wrapper {
  display: flex;
  justify-content: center;
  gap: 80px;
}

.stat-item {
  text-align: center;
}

.stat-num {
  display: block;
  font-size: 42px;
  font-weight: 800;
  background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #888;
}

.features {
  padding: 80px 0;
  background: #FAFAFA;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.feature-item {
  text-align: center;
  padding: 40px 24px;
  background: #FFFFFF;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.06);
  }

  .feature-icon {
    width: 72px;
    height: 72px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, #F0FDF4 0%, #E8F5E9 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #07C160;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #888;
  }
}

.cta {
  padding: 100px 0;
}

.cta-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
  background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(7, 193, 96, 0.25);
}

.cta-content {
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.85);
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #07C160;
  background: #FFFFFF;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
}

.wechat-qrcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .qrcode-img {
    width: 200px;
    height: 200px;
    border-radius: 16px;
  }

  .qrcode-label {
    font-size: 14px;
    color: #888;
  }

  .wechat-id {
    font-size: 18px;
    font-weight: 700;
    color: #07C160;
  }
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 32px;
    padding: 48px 40px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 120px 0 60px;

    h1 {
      font-size: 36px;
    }
  }

  .stats-wrapper {
    flex-wrap: wrap;
    gap: 40px;
  }

  .stat-num {
    font-size: 36px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-content h2 {
    font-size: 28px;
  }
}
</style>