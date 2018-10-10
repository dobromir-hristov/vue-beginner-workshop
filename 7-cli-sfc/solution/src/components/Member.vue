<template>
  <div class="member">
    <router-link :to="{ name: 'member', params: { houseId: houseId, memberId: member.id } }">
      {{ member.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['member', 'houseId']
}
</script>
