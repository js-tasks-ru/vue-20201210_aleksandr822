<template>
  <button @click="handleIncrementClick">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  model: {
    prop: 'count',
    event: 'increment',
  },

  data() {
    return {
      localCount: this.count,
    };
  },

  watch: {
    count: {
      deep: true,
      handler(newValue) {
        this.localCount = newValue;
      },
    },
  },

  methods: {
    handleIncrementClick() {
      this.$emit('increment', this.localCount += 1)
    },
  },
};
</script>

<style></style>
