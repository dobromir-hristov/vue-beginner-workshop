<template>
  <div class="members">
    <div
      v-for="member in members"
      :key="member.id"
      class="member"
    >
      <router-link :to="{ name: 'member', params: { houseId: houseId, memberId: member.id } }">{{ member.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: Array,
    houseId: String
  }
}
</script>
