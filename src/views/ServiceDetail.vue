<template>
  <div class="service-detail" v-if="service">
    <section class="page-header">
      <div class="container">
        <h1>{{ service.title }}</h1>
        <p>{{ service.subtitle }}</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <div class="content-section">
              <h2>服务介绍</h2>
              <p>{{ service.intro }}</p>
            </div>

            <div class="content-section">
              <h2>适用人群</h2>
              <ul class="target-list">
                <li v-for="item in service.targets" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>服务流程</h2>
              <div class="flow-list">
                <div class="flow-item" v-for="(step, index) in service.flows" :key="index">
                  <span class="flow-num">{{ index + 1 }}</span>
                  <div class="flow-info">
                    <h4>{{ step.title }}</h4>
                    <p>{{ step.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar">
            <div class="sidebar-card">
              <h3>扫码咨询</h3>
              <img src="/wechat-qr.jpg" alt="微信二维码" class="qrcode-img" />
              <p class="wechat-id">yuangungundeVX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const servicesData = {
  1: {
    id: 1,
    title: '代理记账',
    subtitle: '专业团队处理日常账务，确保账目清晰合规',
    intro: '代理记账服务是由专业会计团队为您处理日常账务，包括原始凭证审核、账簿登记、财务报表编制、税务申报等工作。严格按会计准则和税法要求执行，确保财务数据准确合规。',
    targets: [
      '刚成立的深圳企业，没有专职会计',
      '业务量较少，聘请专职会计成本过高',
      '希望规范财务管理，降低税务风险',
      '需要专业财务人员但不想增加人员成本'
    ],
    flows: [
      { title: '资料交接', desc: '接收企业的发票、银行流水等原始凭证' },
      { title: '凭证审核', desc: '审核原始凭证的合法性和完整性' },
      { title: '账务处理', desc: '编制记账凭证，登记会计账簿' },
      { title: '报表编制', desc: '编制资产负债表、利润表等财务报表' },
      { title: '税务申报', desc: '按时完成各类税种的申报工作' }
    ]
  },
  2: {
    id: 2,
    title: '税务申报',
    subtitle: '各类税种精准申报，确保企业合规经营',
    intro: '税务申报服务涵盖增值税、企业所得税、个人所得税等各类税种的申报。根据贵公司经营情况和税收优惠政策，提供合理税务筹划建议，确保税负合理化。',
    targets: [
      '不知道如何计算和申报各类税款',
      '希望合理合法降低税负',
      '需要进行年度所得税汇算清缴',
      '希望有人提醒并处理各项税务申报'
    ],
    flows: [
      { title: '税务诊断', desc: '了解企业经营情况，分析税务状况' },
      { title: '方案制定', desc: '根据情况制定合理的税务申报方案' },
      { title: '申报执行', desc: '按时完成各项税种的申报工作' },
      { title: '风险预警', desc: '提示潜在税务风险，提供改进建议' }
    ]
  },
  3: {
    id: 3,
    title: '工商变更',
    subtitle: '快速代办各类工商变更，省心省力',
    intro: '工商变更服务涵盖股权变更、法人代表变更、注册地址变更、经营范围调整、注册资本变更等。提供全程代办服务，让您无需亲自跑腿。',
    targets: [
      '公司股权结构发生变化',
      '需要更换法人代表',
      '注册地址或经营范围需要调整',
      '增减注册资本'
    ],
    flows: [
      { title: '需求沟通', desc: '了解变更需求，评估办理方案' },
      { title: '材料准备', desc: '准备变更所需的全套材料' },
      { title: '代办提交', desc: '代为提交工商变更申请' },
      { title: '领取新证', desc: '领取变更后的营业执照等证件' }
    ]
  },
  4: {
    id: 4,
    title: '公司注册',
    subtitle: '一站式公司注册服务，快速落户',
    intro: '公司注册服务提供从公司核名到领取营业执照的全流程代办服务。熟悉深圳及各地的注册政策，提供注册地址挂靠、工商登记、印章刻制、银行开户指导等一站式服务。',
    targets: [
      '准备创业，需要注册新公司',
      '外地企业想在本地设立分支机构',
      '需要注册地址挂靠服务',
      '希望快速完成公司注册'
    ],
    flows: [
      { title: '公司核名', desc: '提供多个名称进行核名，提高通过率' },
      { title: '地址确认', desc: '确认注册地址或提供地址挂靠' },
      { title: '材料提交', desc: '准备并提交注册材料' },
      { title: '领取证件', desc: '代领营业执照等全套证件' }
    ]
  }
}

const service = computed(() => {
  const id = parseInt(route.params.id)
  return servicesData[id] || null
})

onMounted(() => {
  if (!service.value) {
    router.push('/services')
  }
})
</script>

<style lang="scss" scoped>
.service-detail {
  background: linear-gradient(165deg, #f0fdf4 0%, #ffffff 100%);
  min-height: 100vh;
}

.page-header {
  padding: 120px 0 60px;
  text-align: center;
  background: transparent;

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #111827;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  > .container > p {
    font-size: 16px;
    color: #6b7280;
  }
}

.page-content {
  padding-bottom: 80px;
  background: transparent;

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
  }
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 32px;
}

.main-content {
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
  border: 1px solid #f0f0f0;
}

.content-section {
  background: transparent;
  border-radius: 0;
  padding: 0;
  margin-bottom: 28px;
  border: none;

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 14px;
  }

  p {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.75;
  }
}

.target-list {
  li {
    font-size: 14px;
    color: #374151;
    padding: 9px 0;
    border-bottom: 1px solid #f5f5f5;

    &:last-child {
      border-bottom: none;
    }
  }
}

.flow-list {
  .flow-item {
    display: flex;
    gap: 14px;
    padding: 12px 0;
    border-bottom: 1px solid #f5f5f5;

    &:last-child {
      border-bottom: none;
    }
  }

  .flow-num {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #059669 0%, #10B981 100%);
    color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .flow-info {
    h4 {
      font-size: 15px;
      font-weight: 500;
      color: #111827;
      margin-bottom: 3px;
    }

    p {
      font-size: 13px;
      color: #9ca3af;
    }
  }
}

.sidebar {
  position: sticky;
  top: 84px;
  align-self: start;
}

.sidebar-card {
  text-align: center;
  padding: 24px;
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #f0f0f0;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 16px;
  }

  .qrcode-img {
    width: 140px;
    height: 140px;
    margin: 0 auto 12px;
    border-radius: 8px;
  }

  .wechat-id {
    font-size: 14px;
    font-weight: 600;
    color: #059669;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 100px 0 36px;

    .container {
      padding: 0 20px;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    > .container > p {
      font-size: 14px;
    }
  }

  .page-content {
    padding-bottom: 50px;

    .container {
      padding: 0 20px;
    }
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .main-content {
    padding: 18px;
    border-radius: 10px;
  }

  .content-section {
    padding: 0;
    margin-bottom: 20px;

    h2 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      font-size: 13px;
      line-height: 1.7;
    }
  }

  .target-list {
    li {
      font-size: 13px;
      padding: 7px 0;
    }
  }

  .flow-list {
    .flow-item {
      gap: 10px;
      padding: 10px 0;
    }

    .flow-num {
      width: 26px;
      height: 26px;
      font-size: 12px;
    }

    .flow-info {
      h4 {
        font-size: 14px;
        margin-bottom: 2px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  .sidebar {
    position: static;
    order: -1;
  }

  .sidebar-card {
    padding: 20px;
    border-radius: 10px;

    h3 {
      font-size: 15px;
      margin-bottom: 12px;
    }

    .qrcode-img {
      width: 120px;
      height: 120px;
    }

    .wechat-id {
      font-size: 13px;
    }
  }
}
</style>