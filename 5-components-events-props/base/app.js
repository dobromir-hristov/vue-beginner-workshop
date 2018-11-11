var app = new Vue({
  el: '#app',
  data: {
    houses: houses,
    currentHouse: null
  },
  methods: {
    showHouse (houseId) {
      this.currentHouse = houseId
    },
    isVisible (houseId) {
      return this.currentHouse === houseId
    }
  }
})
