<template>
  <div class="services-page">
    <section class="page-header">
      <div class="header-bg">
        <div class="bg-circle circle-1"></div>
        <div class="bg-circle circle-2"></div>
      </div>
      <div class="container">
        <span class="page-tag">我们的服务</span>
        <h1>全方位财税服务</h1>
        <p>专业团队，为您解决一切财税难题</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="services-list">
          <div class="service-item" v-for="(item, index) in services" :key="item.id" @click="goToService(item.id)">
            <div class="item-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="item-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <div class="item-arrow">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const services = [
  { id: 1, title: '代理记账', desc: '专业团队处理日常账务，确保账目清晰合规，税务申报准确及时' },
  { id: 2, title: '税务申报', desc: '涵盖增值税、所得税、个税等各类税种，合法节税降低经营成本' },
  { id: 3, title: '工商变更', desc: '股权变更、法人变更、地址变更等全程代办，省心省力' },
  { id: 4, title: '公司注册', desc: '一站式服务，从核名到开户，助您快速落地开业' }
]

const goToService = (id) => {
  router.push(`/service/${id}`)
}
</script>

<style lang="scss" scoped>
.services-page {
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
  margin-bottom: 16px;
}

.page-header p {
  font-size: 18px;
  color: #888;
}

.page-content {
  padding: 80px 0 120px;
}

.services-list {
  max-width: 800px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 32px 0;
  border-bottom: 1px solid #EEEEEE;
  cursor: pointer;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    .item-number {
      background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
      color: #FFFFFF;
    }

    .item-arrow {
      color: #07C160;
      transform: translateX(8px);
    }
  }
}

.item-number {
  font-size: 28px;
  font-weight: 800;
  color: #E5E5E5;
  transition: all 0.3s ease;
  flex-shrink: 0;
  width: 60px;
}

.item-content {
  flex: 1;

  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
  }

  p {
    font-size: 15px;
    color: #666666;
    line-height: 1.6;
  }
}

.item-arrow {
  color: #CCCCCC;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .page-header {
    padding: 120px 0 60px;

    h1 {
      font-size: 36px;
    }
  }

  .service-item {
    flex-direction: column;
    text-align: center;
    gap: 16px;

    .item-number {
      font-size: 24px;
    }

    .item-arrow {
      display: none;
    }
  }
}
</style>