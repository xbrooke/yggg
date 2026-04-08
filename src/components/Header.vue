<template>
  <header class="header" :class="headerClass">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="企小帮" width="24" height="24">
        <span>企小帮</span>
      </router-link>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/services">服务</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/contact">联系</router-link>
      </nav>
      <button class="btn-primary" @click="goToContact">微信咨询</button>
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerClass = ref('gradient')

const updateHeaderStyle = (e) => {
  headerClass.value = e.detail
}

const goToContact = () => {
  window.dispatchEvent(new CustomEvent('show-wechat-qr'))
}

const toggleMobileMenu = () => {
  window.dispatchEvent(new CustomEvent('toggle-mobile-menu', { detail: true }))
}

onMounted(() => {
  window.addEventListener('header-style-change', updateHeaderStyle)
})

onUnmounted(() => {
  window.removeEventListener('header-style-change', updateHeaderStyle)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &.gradient {
    background: transparent;
  }

  &.blur {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
  }

  &.white {
    background: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;

  svg {
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
  }
}

.nav {
  display: flex;
  gap: 32px;

  a {
    font-size: 15px;
    color: #666666;
    transition: color 0.2s ease;

    &:hover {
      color: #07C160;
    }
  }
}

.btn-primary {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  background: linear-gradient(135deg, #059669 0%, #07C160 50%, #04B03F 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(5, 150, 105, 0.3);
  }
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: #1a1a1a;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .btn-primary {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>