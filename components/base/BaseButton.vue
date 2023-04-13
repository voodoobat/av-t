<template>
  <component :is="component" class="btn" :class="classes" :to="to" :type="type">
    <span v-if="label" class="btn__text">
      {{ label }}
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },
  mods: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'submit'].includes(v)
  }
})

const component = computed(() => (props.to ? 'nuxt-link' : 'button'))
const classes = computed(() => props.mods.split(' ').map((e) => `btn--${e}`))
</script>
