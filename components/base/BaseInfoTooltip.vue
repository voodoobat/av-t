<template>
  <div v-title="message" class="base-tooltip">
    <InfoIcon />
  </div>
</template>

<script setup>
import InfoIcon from '~/assets/icons/info.svg?inline'

defineProps({
  message: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.base-tooltip {
  display: inline-block;
  width: 2.2rem;
  height: 2.2rem;
  color: #cdcdcd;
  cursor: help;
}
</style>
