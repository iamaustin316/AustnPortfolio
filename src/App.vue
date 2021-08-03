<template>
  <router-view v-slot="{ Component }">
    <transition name="moveUp" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 500ms, transform 500ms ease-in-out;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
  .moveUp-enter-active {
    animation: fadeIn 600ms ease-out;
  }
  @keyframes fadeIn {
    0% {
      transform: translate3d(-100%,0,0);
    }
    100% {
      transform: translate3d(0,0,0);
    }
  }
  .moveUp-leave-active {
    animation: fadeOut 600ms ease-in;
  }
  @keyframes fadeOut {
    0% {
      transform: translate3d(0,0,0);
    }
    100% {
      transform: translate3d(100%,0,0);
    }
  }
</style>
