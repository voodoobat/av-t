<template>
  <div :id="id" class="select" :class="{ 'is-active': isOpen }">
    <div class="select__input" @click="isOpen = !isOpen">
      <div class="input-field__input input">
        {{ selected }}
        <div class="select__chevron">
          <IconChevron />
        </div>
      </div>
    </div>
    <div class="select__options-box">
      <div class="select__options">
        <div
          v-for="option in options"
          :key="option"
          class="select__option"
          @click="select(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { uid } from 'uid'
import { onMounted, ref } from 'vue'
import IconChevron from '@/assets/icons/chevron.svg?inline'

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['select'])

const id = ref('')
const selected = ref(props.value)
const isOpen = ref(false)

const select = (option) => {
  selected.value = option
  isOpen.value = false
  emit('select', option)
}

onMounted(() => {
  id.value = `_${uid()}`

  document.addEventListener('click', ({ target }) => {
    if (!target.closest(`#${id.value}`)) {
      isOpen.value = false
    }
  })
})
</script>

<style scoped src="@/assets/css/components/BaseSelect.css">
