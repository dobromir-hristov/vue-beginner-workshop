<template>
  <div class="members">
    <div
      v-for="member in members"
      :key="member.id"
      class="member"
    >
      {{ member.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: Array
  }
}
</script>
