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
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path :d="item.icon"/>
              </svg>
            </div>
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
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showWechatDialog = ref(false)

const services = [
  { 
    id: 1, 
    title: '代理记账', 
    desc: '专业团队处理日常账务，确保账目清晰合规，税务申报准确及时',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-2h6v2zm4-4H6v-2h10v2zm0-4H6V7h10v2z'
  },
  { 
    id: 2, 
    title: '税务申报', 
    desc: '涵盖增值税、所得税、个税等各类税种，合法节税降低经营成本',
    icon: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'
  },
  { 
    id: 3, 
    title: '工商变更', 
    desc: '股权变更、法人变更、地址变更等全程代办，省心省力',
    icon: 'M19 4h-4L7.11 4.11 4 7.22V4H2v18h2v-6h4l7.89-7.89 3 3.89zM7 18H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V10h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V10h2v2zm0-4h-2V6h2v2z'
  },
  { 
    id: 4, 
    title: '公司注册', 
    desc: '一站式服务，从核名到开户，助您快速落地开业',
    icon: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z'
  }
]

const features = [
  {
    title: '专业资质',
    desc: '中级会计师，8年+行业经验',
    icon: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 18.5L4 16V8.5l8 4v8zm0-9.5L4.5 7 12 3.5 19.5 7 12 11z'
  },
  {
    title: '专属服务',
    desc: '一对一全程对接，及时响应',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z'
  },
  {
    title: '安全保密',
    desc: '严格遵守职业道德，信息安全',
    icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'
  },
  {
    title: '经验丰富',
    desc: '熟悉各类行业财税特点',
    icon: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z'
  }
]

const showWechat = () => {
  showWechatDialog.value = true
}

const goToService = (id) => {
  router.push(`/service/${id}`)
}

const handleScroll = () => {
  const scrollY = window.scrollY
  const heroHeight = window.innerHeight * 0.5

  let headerStyle = 'gradient'
  if (scrollY > heroHeight) {
    headerStyle = 'white'
  } else if (scrollY > 50) {
    headerStyle = 'blur'
  }

  window.dispatchEvent(new CustomEvent('header-style-change', { detail: headerStyle }))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 100px 0 80px;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: -64px;
  left: 0;
  right: 0;
  height: calc(100% + 64px);
  background: linear-gradient(180deg, #f0fdf4 0%, #e8f5e9 40%, #fafafa 70%, #ffffff 100%);
  z-index: 0;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;

  &.circle-1 {
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.06) 0%, transparent 60%);
    top: -300px;
    right: -200px;
  }

  &.circle-2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.05) 0%, transparent 60%);
    bottom: -200px;
    left: -150px;
  }

  &.circle-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(7, 193, 96, 0.04) 0%, transparent 60%);
    top: 30%;
    left: 10%;
  }
}

.hero .container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
}

.hero-content {
  max-width: 580px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(7, 193, 96, 0.06);
  border: 1px solid rgba(7, 193, 96, 0.12);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  color: #059669;
  margin-bottom: 24px;
  letter-spacing: 0.3px;

  .badge-dot {
    width: 6px;
    height: 6px;
    background: #10B981;
    border-radius: 50%;
    animation: pulse 2.5s infinite;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
}

.hero-title {
  font-size: 52px;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.035em;
  line-height: 1.12;
  margin-bottom: 16px;

  .title-highlight {
    background: linear-gradient(135deg, #059669 0%, #07C160 50%, #04B03F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.hero-desc {
  font-size: 17px;
  color: #6b7280;
  margin-bottom: 36px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 30px;
  font-size: 15px;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #059669 0%, #07C160 50%, #04B03F 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(5, 150, 105, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 30px;
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  background: #FFFFFF;
  border: 1.5px solid #e5e7eb;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #07C160;
    color: #059669;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: scale(0.98);
  }
}

.services {
  padding: 80px 0 100px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #059669 0%, #07C160 50%, #04B03F 100%);
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.025em;
  margin-bottom: 10px;
}

.section-desc {
  font-size: 15px;
  color: #9ca3af;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 860px;
  margin: 0 auto;
}

.service-card {
  display: flex;
  gap: 18px;
  padding: 24px;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
    border-color: rgba(5, 150, 105, 0.15);

    .card-icon {
      background: linear-gradient(135deg, #059669 0%, #07C160 50%, #04B03F 100%);
      color: #FFFFFF;
    }

    .card-link {
      color: #059669;
    }
  }

  .card-icon {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    background: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #059669;
    transition: all 0.3s ease;
  }

  .card-content {
    flex: 1;

    h3 {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 6px;
    }

    p {
      font-size: 13px;
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .card-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      font-weight: 600;
      color: #9ca3af;
      transition: color 0.3s ease;
    }
  }
}

.features {
  padding: 60px 0 80px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-item {
  text-align: center;
  padding: 28px 16px;
  background: #FFFFFF;
  border-radius: 14px;
  border: 1px solid #f3f4f6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    border-color: rgba(5, 150, 105, 0.1);
  }

  .feature-icon {
    width: 52px;
    height: 52px;
    margin: 0 auto 14px;
    background: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #059669;
  }

  h4 {
    font-size: 15px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 4px;
  }

  p {
    font-size: 12px;
    color: #9ca3af;
  }
}

.cta {
  padding: 80px 0;
}

.cta-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 64px;
  background: linear-gradient(135deg, #059669 0%, #07C160 50%, #04B03F 100%);
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(5, 150, 105, 0.2);
}

.cta-content {
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 6px;
  }

  p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.85);
  }
}

.cta .btn-primary {
  background: #FFFFFF;
  color: #059669;
  flex-shrink: 0;
  padding: 14px 32px;
  font-size: 15px;

  &:hover {
    background: #f5f5f5;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: scale(0.98);
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
    border-radius: 12px;
  }

  .qrcode-label {
    font-size: 14px;
    color: #888;
  }

  .wechat-id {
    font-size: 14px;
    font-weight: 600;
    color: #07C160;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 90px 0 50px;
    min-height: auto;
  }

  .hero-badge {
    padding: 6px 14px;
    font-size: 12px;
    margin-bottom: 20px;
  }

  .hero-title {
    font-size: 32px;
    letter-spacing: -0.03em;
  }

  .hero-desc {
    font-size: 15px;
    margin-bottom: 28px;
  }

  .hero-actions {
    flex-direction: column;
    gap: 10px;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    padding: 12px 24px;
    font-size: 14px;
  }

  .section-tag {
    font-size: 11px;
    padding: 5px 12px;
  }

  .section-title {
    font-size: 26px;
  }

  .section-desc {
    font-size: 14px;
  }

  .services {
    padding: 60px 0 70px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .service-card {
    padding: 20px;
    gap: 14px;

    .card-icon {
      width: 46px;
      height: 46px;
    }

    .card-content h3 {
      font-size: 16px;
    }
  }

  .features {
    padding: 50px 0 60px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .feature-item {
    padding: 20px 12px;

    .feature-icon {
      width: 44px;
      height: 44px;
    }

    h4 {
      font-size: 14px;
    }
  }

  .cta {
    padding: 60px 0;
  }

  .cta-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 28px;
    padding: 36px 28px;
    border-radius: 20px;
  }

  .cta-content h2 {
    font-size: 24px;
  }

  .cta-content p {
    font-size: 14px;
  }

  .cta .btn-primary {
    width: 100%;
    padding: 13px 28px;
  }
}
</style>