<template>
  <PageContainer heading="Вход">
    <UserLoginForm class="form" />
  </PageContainer>
</template>

<script setup>
import { useStore } from '@nuxtjs/composition-api'

const store = useStore()
store.dispatch('user.store/login')
</script>

<style scoped>
.form {
  max-width: 30rem;
  margin: auto;
}
</style>
