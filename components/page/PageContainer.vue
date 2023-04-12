<template>
  <div>
    <PageIntro v-if="heading" :heading="heading" />
    <LayoutContainer class="padding-top-2">
      <slot />
    </LayoutContainer>
  </div>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    default: ''
  }
})
</script>
