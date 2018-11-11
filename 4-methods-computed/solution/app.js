var app = new Vue({
  el: '#app',
  data: {
    houses: houses,
    currentHouse: null
  },
  methods: {
    showHouse (houseId) {
      this.currentHouse = this.currentHouse === houseId ? null : houseId
    },
    isVisible (houseId) {
      return this.currentHouse === houseId
    }
  }
})
