var Members = {
  template: `#members-template`,
  props: {
    members: Array,
    houseId: String
  }
}

var House = {
  template: '#house-template',
  props: {
    house: Object,
    currentHouse: String,
    houseId: String
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

var WesterosMapPage = {
  components: {
    House: House
  },
  template: '#westeros-page',
  data () {
    return {
      houses: houses,
      currentHouse: null
    }
  },
  methods: {
    showHouse (houseId) {
      this.currentHouse = houseId
    }
  }
}

var MemberPage = {
  template: '#member-page',
  props: {
    houseId: String,
    memberId: String
  },
  data () {
    return {
      houses: houses
    }
  },
  computed: {
    currentMember () {
      var house = this.houses[this.houseId]
      return house.members.find(function (member) {
        return member.id === this.memberId
      }.bind(this))
    }
  }
}

// 2. Define some routes
const routes = [
  { path: '/', component: WesterosMapPage, name: 'home' },
  { path: '/:houseId/:memberId', name: 'member', component: MemberPage, props: true }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
  el: '#app',
  router
})
