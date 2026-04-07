<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <div class="bg-circle circle-1"></div>
        <div class="bg-circle circle-2"></div>
        <div class="bg-circle circle-3"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            企小帮财税
          </div>
          <h1 class="hero-title">
            专注深圳企业<br>
            <span class="title-highlight">财税服务</span>
          </h1>
          <p class="hero-desc">代理记账 · 税务申报 · 工商变更 · 公司注册</p>
          <div class="hero-actions">
            <button class="btn-primary" @click="showWechat">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348z"/>
              </svg>
              立即咨询
            </button>
            <button class="btn-secondary" @click="scrollToServices">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="services" id="services">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">我们的服务</span>
          <h2 class="section-title">全方位财税服务</h2>
          <p class="section-desc">专业团队，为您解决一切财税难题</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(item, index) in services" :key="item.id" @click="goToService(item.id)">
            <div class="card-number">0{{ index + 1 }}</div>
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
              <span class="card-link">
                了解更多
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </span>
            </div>
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
          <button class="btn-primary btn-large" @click="showWechat">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348z"/>
            </svg>
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
import { useRouter } from 'vue-router'

const router = useRouter()
const showWechatDialog = ref(false)

const services = [
  { id: 1, title: '代理记账', desc: '专业团队处理日常账务，确保账目清晰合规，税务申报准确及时' },
  { id: 2, title: '税务申报', desc: '涵盖增值税、所得税、个税等各类税种，合法节税降低经营成本' },
  { id: 3, title: '工商变更', desc: '股权变更、法人变更、地址变更等全程代办，省心省力' },
  { id: 4, title: '公司注册', desc: '一站式服务，从核名到开户，助您快速落地开业' }
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

const goToService = (id) => {
  router.push(`/service/${id}`)
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 140px 0 100px;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #F0FDF4 0%, #E8F5E9 50%, #FFFFFF 100%);
  z-index: 0;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;

  &.circle-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.1) 0%, transparent 70%);
    top: -200px;
    right: -100px;
  }

  &.circle-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.08) 0%, transparent 70%);
    bottom: -100px;
    left: -50px;
  }

  &.circle-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.06) 0%, transparent 70%);
    top: 40%;
    left: 20%;
  }
}

.hero .container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(7, 193, 96, 0.1);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #07C160;
  margin-bottom: 24px;

  .badge-dot {
    width: 8px;
    height: 8px;
    background: #07C160;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 20px;

  .title-highlight {
    background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.hero-desc {
  font-size: 20px;
  color: #555;
  margin-bottom: 40px;
  font-weight: 500;
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(7, 193, 96, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(7, 193, 96, 0.4);
  }
}

.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #07C160;
    color: #07C160;
  }
}

.services {
  padding: 120px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.section-desc {
  font-size: 18px;
  color: #888;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.service-card {
  display: flex;
  gap: 24px;
  padding: 32px;
  background: #FFFFFF;
  border-radius: 24px;
  border: 1px solid #EEEEEE;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
    border-color: #07C160;

    .card-number {
      background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
      color: #FFFFFF;
    }

    .card-link {
      color: #07C160;
    }
  }

  .card-number {
    font-size: 32px;
    font-weight: 800;
    color: #E5E5E5;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .card-content {
    flex: 1;

    h3 {
      font-size: 22px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      color: #666;
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .card-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 600;
      color: #888;
      transition: color 0.3s ease;
    }
  }
}

.features {
  padding: 80px 0;
  background: linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%);
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
  padding: 120px 0;
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
    font-size: 36px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.85);
  }
}

.cta .btn-primary {
  background: #FFFFFF;
  color: #07C160;
  flex-shrink: 0;

  &:hover {
    background: #F5F5F5;
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
  .hero .container {
    flex-direction: column;
    text-align: center;
  }

  .hero-visual {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

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
  .hero {
    padding: 100px 0 48px;
    min-height: auto;
  }

  .hero-title {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .hero-badge {
    padding: 6px 12px;
    font-size: 12px;
    margin-bottom: 16px;
  }

  .hero-desc {
    font-size: 15px;
    margin-bottom: 32px;
  }

  .hero-actions {
    flex-direction: column;
    gap: 12px;
    width: 100%;

    .btn-primary,
    .btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }

  .services {
    padding: 80px 0;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-tag {
    font-size: 12px;
    padding: 4px 12px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-desc {
    font-size: 15px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .service-card {
    flex-direction: column;
    text-align: center;
    padding: 24px 20px;

    .card-number {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .card-link {
      display: none;
    }
  }

  .features {
    padding: 60px 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .feature-item {
    padding: 24px 20px;
  }

  .cta {
    padding: 80px 0;
  }

  .cta-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    padding: 40px 24px;
    border-radius: 20px;
  }

  .cta-content h2 {
    font-size: 24px;
  }

  .cta-content p {
    font-size: 15px;
  }

  .cta .btn-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>