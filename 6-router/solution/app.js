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

var houses = {
  stark: {
    name: 'Stark',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'eddard-stark', name: 'Eddard Stark' },
      { id: 'catelyn-stark', name: 'Catelyn Stark' },
      { id: 'robb-stark', name: 'Robb Stark' },
      { id: 'sansa-stark', name: 'Sansa Stark' },
      { id: 'arya-stark', name: 'Arya Stark' },
      { id: 'bran-stark', name: 'Bran Stark' },
      { id: 'rickon-stark', name: 'Rickon Stark' },
      { id: 'jon-snow', name: 'Jon Snow' }
    ]
  },
  tully: {
    name: 'Tully',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'catelyn-stark', name: 'Catelyn Stark' },
      { id: 'edmure-tully', name: 'Edmure Tully' },
      { id: 'brynden-tully', name: 'Brynden Tully' },
      { id: 'lysa-arryn', name: 'Lysa Arryn' },
      { id: 'roslin-tully', name: 'Roslin Tully' },
      { id: 'hoster-tully', name: 'Hoster Tully' }
    ]
  },
  targaryen: {
    name: 'Targaryen',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'daenerys-targaryen', name: 'Daenerys Targaryen' },
      { id: 'rhaegar-targaryen', name: 'Rhaegar Targaryen' },
      { id: 'aerys-ii-targaryen', name: 'Aerys II Targaryen' },
      { id: 'aegon-targaryen', name: 'Aegon Targaryen' },
      { id: 'viserys-targaryen', name: 'Viserys Targaryen' },
      { id: 'aemon', name: 'Aemon' }
    ]
  },
  lannister: {
    name: 'Lannister',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'tyrion-lannister', name: 'Tyrion Lannister' },
      { id: 'jaime-lannister', name: 'Jaime Lannister' },
      { id: 'tywin-lannister', name: 'Tywin Lannister' },
      { id: 'lancel-lannister', name: 'Lancel Lannister' },
      { id: 'kevan-lannister', name: 'Kevan Lannister' },
      { id: 'joanna-lannister', name: 'Joanna Lannister' }
    ]
  },
  tyrell: {
    name: 'Tyrell',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'margaery-tyrell', name: 'Margaery Tyrell' },
      { id: 'loras-tyrell', name: 'Loras Tyrell' },
      { id: 'olenna-tyrell', name: 'Olenna Tyrell' },
      { id: 'mace-tyrell', name: 'Mace Tyrell' },
      { id: 'alerie-tyrell', name: 'Alerie Tyrell' }
    ]
  },
  baratheon: {
    name: 'Baratheon',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'robert-baratheon', name: 'Robert Baratheon' },
      { id: 'stannis-baratheon', name: 'Stannis Baratheon' },
      { id: 'renly-baratheon', name: 'Renly Baratheon' },
      { id: 'shireen-baratheon', name: 'Shireen Baratheon' },
      { id: 'selyse-baratheon', name: 'Selyse Baratheon' },
      { id: 'gendry', name: 'Gendry' }
    ]
  },
  martell: {
    name: 'Martell',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'oberyn-martell', name: 'Oberyn Martell' },
      { id: 'elia-martell', name: 'Elia Martell' },
      { id: 'doran-martell', name: 'Doran Martell' },
      { id: 'nymeria-sand', name: 'Nymeria Sand' },
      { id: 'obara-sand', name: 'Obara Sand' },
      { id: 'trystane-martell', name: 'Trystane Martell' }
    ]
  },
  greyjoy: {
    name: 'Greyjoy',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'yara-greyjoy', name: 'Yara Greyjoy' },
      { id: 'euron-greyjoy', name: 'Euron Greyjoy' },
      { id: 'balon-greyjoy', name: 'Balon Greyjoy' },
      { id: 'aeron-greyjoy', name: 'Aeron Greyjoy' },
      { id: 'rodrik-greyjoy', name: 'Rodrik Greyjoy' },
      { id: 'maron-greyjoy', name: 'Maron Greyjoy' },
      { id: 'alannys-greyjoy', name: 'Alannys Greyjoy' }
    ]
  },
  arryn: {
    name: 'Arryn',
    sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest',
    members: [
      { id: 'jon-arryn', name: 'Jon Arryn' },
      { id: 'lysa-arryn', name: 'Lysa Arryn' },
      { id: 'robin-arryn', name: 'Robin Arryn' },
      { id: 'artys-i-arryn', name: 'Artys I Arryn' },
      { id: 'aemma-arryn', name: 'Aemma Arryn' },
      { id: 'ronnel-arryn', name: 'Ronnel Arryn' }
    ]
  }
}
