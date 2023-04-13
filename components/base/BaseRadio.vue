<template>
  <div class="radio-label">
    <input
      :id="id"
      :value="value"
      type="radio"
      :checked="checked"
      :disabled="disabled"
      :name="name"
      class="radio-label__input"
    />
    <label :for="id" class="radio-label__main">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { uid } from 'uid'

const id = ref('')

defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    // type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  id.value = uid()
})
</script>
