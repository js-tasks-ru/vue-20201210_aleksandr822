<template>
  <div>
    <transition name="fade">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FadeTransition',

  inheritAttrs: false
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
