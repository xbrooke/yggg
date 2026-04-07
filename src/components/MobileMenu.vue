<template>
  <teleport to="body">
    <transition name="slide">
      <div v-if="isVisible" class="mobile-menu-overlay" @click="closeMenu">
        <div class="mobile-menu" @click.stop>
          <div class="menu-header">
            <span class="menu-logo">企小帮</span>
            <button class="menu-close" @click="closeMenu">×</button>
          </div>

          <nav class="menu-nav">
            <router-link to="/" class="menu-link" @click="closeMenu">首页</router-link>
            <router-link to="/services" class="menu-link" @click="closeMenu">服务</router-link>
            <router-link to="/about" class="menu-link" @click="closeMenu">关于</router-link>
            <router-link to="/contact" class="menu-link" @click="closeMenu">联系</router-link>
          </nav>

          <div class="menu-footer">
            <button class="btn-wechat" @click="showWechat">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.406-.032zm-1.564 2.075c.465 0 .842.382.842.853a.844.844 0 0 1-.842.847.844.844 0 0 1-.842-.847c0-.471.377-.853.842-.853zm4.557 0c.465 0 .842.382.842.853a.844.844 0 0 1-.842.847.844.844 0 0 1-.842-.847c0-.471.377-.853.842-.853z"/>
              </svg>
              微信咨询
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>

  <el-dialog v-model="showQR" title="扫码添加微信" width="280px" center>
    <div class="wechat-qrcode">
      <img src="/wechat-qr.jpg" alt="微信二维码" class="qrcode-img" />
      <p class="wechat-id">yuangungundeVX</p>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const showQR = ref(false)

const handleToggle = (event) => {
  isVisible.value = event.detail
}

const closeMenu = () => {
  isVisible.value = false
  window.dispatchEvent(new CustomEvent('toggle-mobile-menu', { detail: false }))
}

const showWechat = () => {
  closeMenu()
  showQR.value = true
}

onMounted(() => {
  window.addEventListener('toggle-mobile-menu', handleToggle)
})

onUnmounted(() => {
  window.removeEventListener('toggle-mobile-menu', handleToggle)
})
</script>

<style lang="scss" scoped>
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;

  @media (max-width: 992px) {
    display: block;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #E5E5E5;

  .menu-logo {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
  }

  .menu-close {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666666;
  }
}

.menu-nav {
  flex: 1;
  padding: 20px;

  .menu-link {
    display: block;
    padding: 16px 0;
    font-size: 16px;
    color: #1a1a1a;
    border-bottom: 1px solid #E5E5E5;

    &:last-child {
      border-bottom: none;
    }
  }
}

.menu-footer {
  padding: 20px;
  border-top: 1px solid #E5E5E5;
}

.btn-wechat {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background: linear-gradient(135deg, #07C160 0%, #04B03F 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(7, 193, 96, 0.3);
  }
}

.wechat-qrcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .qrcode-img {
    width: 180px;
    height: 180px;
    border-radius: 8px;
  }

  .wechat-id {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;

  .mobile-menu {
    transition: transform 0.3s ease;
  }
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;

  .mobile-menu {
    transform: translateX(100%);
  }
}
</style>