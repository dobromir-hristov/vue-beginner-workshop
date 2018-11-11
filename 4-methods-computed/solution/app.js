var app = new Vue({
  el: '#app',
  data: {
    houses: houses,
    currentHouse: null
  },
  methods: {
    toggleCurrent (house) {
      this.currentHouse = this.currentHouse === house ? null : house
    },
    isVisible (house) {
      return this.currentHouse === house
    }
  }
})
