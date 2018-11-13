<template>
  <div class="WesterosMapPage map" @click="currentHouse = null">
    <house
        v-for="(house, houseId) in houses"
        :key="houseId"
        :house="house"
        :house-id="houseId"
        :current-house="currentHouse"
        @change-house="toggleCurrent"
    ></house>
  </div>
</template>

<script>
import houses from '@/data/houses'
import House from '@/components/House'

export default {
  components: {
    House
  },
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
</script>
