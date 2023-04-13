<template>
  <div class="wide-section">
    <div
      class="wide-section__header"
      :class="{
        'is-flex': isFlexHeader,
        'is-mobile-hidden': isMobileHiddenHeader,
      }"
    >
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
    default: '',
  },
  isFlexHeader: {
    type: Boolean,
    default: false,
  },
  isMobileHiddenHeader: {
    type: Boolean,
    default: false,
  },
})
</script>
