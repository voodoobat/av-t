<template>
  <div class="input-field">
    <label v-if="label" class="input-field__label caption" :for="id">
      {{ label }}
    </label>
    <div class="input-field__main">
      <input
        :id="id"
        class="input-field__input input"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <div v-if="currency" class="extra-field__currency">
        {{ currency }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { uid } from 'uid'
import { inputTypes } from '~/constants/inputTypes'

defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (v) => inputTypes.includes(v)
  },
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  currency: {
    type: String,
    default: ''
  }
})

const id = ref('')

onMounted(() => {
  id.value = `_${uid()}`
})
</script>

<style scoped>
.input[readonly]:focus {
  border-color: #e1e1e3;
}
</style>
