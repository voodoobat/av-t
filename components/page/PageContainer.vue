<template>
  <div>
    <PageIntro v-if="heading" :heading="heading" />
    <BaseContainer class="padding-top-2">
      <slot />
    </BaseContainer>
  </div>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    default: () => ''
  }
})
</script>
