<template>
  <div class="member-page">
    {{ currentMember.name }}
    <router-link :to="{ name: 'home' }">Go Back</router-link>
  </div>
</template>

<script>
import houses from '@/data/houses'

export default {
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
      const house = this.houses[this.houseId]
      return house.members.find(member => member.id === this.memberId)
    }
  }
}
</script>
