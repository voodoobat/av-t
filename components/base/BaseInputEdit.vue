<template>
  <div :id="id" class="base-input-edit" :class="{ 'is-active': isActive }">
    <input
      :id="id"
      class="base-input-edit__input input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @keydown.enter="onUpdate"
      @input="$emit('input', $event.target.value)"
    />
    <span class="base-input-edit__value">{{ value }}</span>
    <EditIcon
      class="base-input-edit__icon"
      @click="isActive = !isActive"
    />
  </div>
</template>

<script setup>
import { uid } from 'uid'
import { onMounted, ref } from 'vue'
import EditIcon from '~/assets/icons/edit.svg?inline'
import { inputTypes } from '~/constants/inputTypes'

defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (v) => inputTypes.includes(v)
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const id = ref('')
const isActive = ref(false)
const emit = defineEmits(['update'])

const onUpdate = () => {
  emit('update')
  isActive.value = false
}

onMounted(() => {
  id.value = `_${uid()}`
  document.addEventListener('click', ({ target }) => {
    if (!target.closest(`#${id.value}`)) {
      onUpdate()
    }
  })
})
</script>

<style scoped src="@/assets/css/components/BaseInputEdit.css" />
