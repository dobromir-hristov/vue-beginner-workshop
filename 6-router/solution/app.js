var Member = {
  props: ['member', 'houseId'],
  template: '<div class="member"><router-link :to="{ name: \'member\', params: { houseId: houseId, memberId: member.id } }">{{ member.name }}</router-link></div>'
}

var Members = {
  components: {
    Member: Member
  },
  props: ['members', 'houseId'],
  template: `<div class="members">
                <member
                    v-for="member in members"
                    :key="member.id"
                    :member="member"
                    :house-id="houseId"
                />
             </div>`
}

var House = {
  components: {
    Members: Members
  },
  template: '#house-template',
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
    toggleCurrent (house) {
      this.currentHouse = this.currentHouse === house ? null : house
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
  { path: '/', component: WesterosMapPage },
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
