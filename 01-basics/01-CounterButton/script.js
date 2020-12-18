import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события
export const app = new Vue({
  el: '#app',
  data () {
    return  {
      counter: 0
    }
  },
  methods: {
    counterButton () {
      this.counter++
    }
  },
})
