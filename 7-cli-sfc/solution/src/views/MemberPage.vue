<template>
  <div class="MemberPage member-page">
    <div>
      {{ currentMember.name }}
    </div>
    <router-link to="/">Back To Map</router-link>
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
      return house.members.find((member) => {
        return member.id === this.memberId
      })
    }
  }
}
</script>
