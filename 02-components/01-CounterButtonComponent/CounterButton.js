export const CounterButton = {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  template: `
    <button type="button" @click="myIncrement(count + 1)">
      {{ count }}
    </button>
  `,
  methods: {
    myIncrement (value) {
      this.$emit('increment', value)
    }
  },
}
