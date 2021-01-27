<template>
  <transition v-on="$listeners" v-bind="$attrs" name="fade">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'FadeTransition',
  inheritAttrs: false,
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
