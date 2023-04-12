<template>
  <div class="page-intro">
    <BaseContainer>
      <div class="page-intro__header">
        <h1 class="page-intro__heading main-heading">
          {{ heading }}
        </h1>
      </div>
    </BaseContainer>
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
