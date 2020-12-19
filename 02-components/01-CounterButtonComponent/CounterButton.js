export const CounterButton = {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      myCount: this.count
    }
  },
  template: `
    <button type="button" @click="myIncrement">
      {{ count }}
    </button>
  `,
  methods: {
    myIncrement () {
      this.$emit('increment', this.myCount+=1)
    }
  },
};
