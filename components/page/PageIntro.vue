<template>
  <div class="page-intro">
    <LayoutContainer>
      <div class="page-intro__header">
        <h1 class="page-intro__heading main-heading">
          {{ heading }}
        </h1>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    required: true
  }
})
</script>
