<template>
  <div
      class="house"
      :class="[houseId, { 'is-active': isVisible }]"
      @click.stop="$emit('change-house', houseId)"
  >
    <img :src="house.sigil">
    <members
        v-if="isVisible"
        :members="house.members"
        :houseId="currentHouse"
    />
  </div>
</template>

<script>
import Members from './Members'

export default {
  components: {
    Members
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
</script>
