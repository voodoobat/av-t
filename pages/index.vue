<template>
  <PageContainer :heading="pageHeading">
    <UserLoginForm v-if="!isAuthorized" class="form" />
    <div v-else>
      User
    </div>
  </PageContainer>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'

const store = useStore()
const isAuthorized = computed(() => store.getters['user.store/isAuthorized'])
const pageHeading = computed(() => {
  return isAuthorized.value ? 'Настройки' : 'Авторизация'
})

store.dispatch('user.store/fetch')
</script>

<style scoped>
.form {
  max-width: 30rem;
  margin: auto;
}
</style>
