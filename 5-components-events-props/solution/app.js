var Member = {
  props: ['member'],
  template: '<div class="member">{{ member.name }}</div>'
}

var Members = {
  components: {
    Member: Member
  },
  props: ['members'],
  template: `#members-template`
}

var House = {
  template: '#house-template',
  components: {
    Members: Members
  },
  props: {
    house: Object,
    currentHouse: String,
    houseId: String
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
