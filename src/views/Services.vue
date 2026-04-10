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

  &::after {
    content: '';
    position: absolute;
    bottom: 15%;
    left: 8%;
    width: 280px;
    height: 280px;
    background: radial-gradient(circle, rgba(4, 176, 63, 0.06) 0%, transparent 65%);
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

.services-list {
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  padding: 8px 0;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 24px 32px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  transition: all 0.25s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f9fafb;

    .item-number {
      background: linear-gradient(135deg, #059669 0%, #10B981 100%);
      color: #FFFFFF;
    }

    .item-arrow {
      color: #059669;
      transform: translateX(4px);
    }
  }
}

.item-number {
  font-size: 24px;
  font-weight: 700;
  color: #e5e7eb;
  transition: all 0.25s ease;
  flex-shrink: 0;
  width: 48px;
}

.item-content {
  flex: 1;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.5;
  }
}

.item-arrow {
  color: #d1d5db;
  transition: all 0.25s ease;
  flex-shrink: 0;
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

  .services-list {
    border-radius: 10px;
    padding: 4px 0;
  }

  .service-item {
    flex-direction: column;
    text-align: center;
    gap: 12px;
    padding: 20px 20px;

    .item-number {
      font-size: 20px;
    }

    .item-arrow {
      display: none;
    }
  }

  .item-content {
    h3 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }
  }
}
</style>