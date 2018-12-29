<template>
  <div id="app">
    <div
      class="map"
      @click="showHouse(null)"
    >
      <house
        v-for="(house, houseId) in houses"
        :key="houseId"
        :house="house"
        :house-id="houseId"
        :current-house="currentHouse"
        @change-house="showHouse"
      ></house>
    </div>
  </div>
</template>
<script>
import houses from '@/data/houses'
import House from '@/components/House'

export default {
  components: {
    House: House
  },
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
</script>
