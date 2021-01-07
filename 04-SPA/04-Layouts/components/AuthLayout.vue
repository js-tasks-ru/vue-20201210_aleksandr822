<template>
  <main class="main">
    <div class="page page_onboarding">
      <div class="container">
        <h1 class="page__title text-center">{{title}}</h1>
        <slot />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuthLayout',
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>
