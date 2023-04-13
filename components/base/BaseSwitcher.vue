<template>
  <div class="switcher-label" :class="{ 'switcher-label--thin': isThin }">
    <input
      :id="id"
      type="checkbox"
      :disabled="disabled"
      class="switcher-label__input"
    />
    <label :for="id" class="switcher-label__main"></label>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { uid } from 'uid'

const id = ref('')

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isThin: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  id.value = `_${uid()}`
})
</script>

<style scoped src="~/assets/css/components/BaseSwitcher.css" />
