<template>
  <div class="members">
    <member
        v-for="member in members"
        :key="member.id"
        :member="member"
        :house-id="houseId"
    />
  </div>
</template>

<script>
import Member from './Member'

export default {
  components: {
    Member
  },
  props: ['members', 'houseId']
}
</script>
