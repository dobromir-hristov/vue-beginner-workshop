var Members = {
  template: '#members-template',
  props: {
    members: Array
  }
}

var House = {
  template: '#house-template',
  props: {
    house: Object,
    houseId: String,
    currentHouse: String
  },
  components: {
    Members: Members
  },
  computed: {
    isVisible () {
      return this.currentHouse === this.houseId
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {
    House: House
  },
  data: {
    houses: houses,
    currentHouse: null
  },
  methods: {
    showHouse (houseId) {
      this.currentHouse = houseId
    }
  }
})
