<template>
  <div
    :class="[houseId, { 'is-active': isVisible }]"
    class="house"
    @click.stop="$emit('change-house', houseId)"
  >
    <img :src="house.sigil">
    <members
      v-if="isVisible"
      :members="house.members"
      :house-id="houseId"
    ></members>
  </div>
</template>

<script>
import Members from '@/components/Members'

export default {
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
</script>
