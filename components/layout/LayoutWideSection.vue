<template>
  <div class="wide-section">
    <div class="wide-section__header" :class="headerModifiers">
      <div v-if="heading" class="wide-section__heading">
        {{ heading }}
      </div>
      <slot name="header" />
    </div>
    <div class="wide-section__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    default: ''
  },
  headerModifiers: {
    type: Array,
    default: () => []
  }
})
</script>
