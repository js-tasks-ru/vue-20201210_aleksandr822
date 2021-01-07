<template>
  <div class="container">
    <h2 class="page__title">{{title}}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormLayout',
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped></style>
