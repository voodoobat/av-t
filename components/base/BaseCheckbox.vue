<template>
  <div class="checkbox-label has-tooltip">
    <div class="checkbox-label__box">
      <input
        :id="id"
        type="checkbox"
        class="checkbox-label__input"
        :value="value"
        :checked="checked"
        :disabled="disabled"
      />
      <label :for="id" class="checkbox-label__main">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { uid } from 'uid'

const id = ref('')

defineProps({
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  id.value = uid()
})
</script>

<style scoped src="@/assets/css/components/checkbox.css" />
<style scoped>
.checkbox-label__box {
  display: flex;
}
</style>
