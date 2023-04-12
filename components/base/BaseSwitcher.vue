<template>
  <div class="switcher-label" :class="{ 'switcher-label--thin': isThin }">
    <input :id="uid" type="checkbox" class="switcher-label__input" />
    <label :for="uid" class="switcher-label__main"></label>
  </div>
</template>

<script setup>
import { v4 as uuid } from 'uuid'

const uid = uuid()
defineProps({
  isThin: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped src="@/assets/css/components/switcher.css" />
