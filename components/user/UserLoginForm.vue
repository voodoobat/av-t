<template>
  <form class="login-form" @submit.prevent="submit">
    <BaseInput v-model="input.login" class="login-form__input" label="Логин" />
    <BaseInput v-model="input.password" class="login-form__input" label="Пароль" type="password" />
    <BaseButton label="Войти" type="submit" mods="primary block" />
  </form>
</template>

<script setup>
import { reactive, useStore } from '@nuxtjs/composition-api'

const store = useStore()
const input = reactive({
  login: '',
  password: ''
})

const submit = () =>
  store.dispatch('user.store/login', input)
</script>

<style scoped>
.login-form__input {
  margin-bottom: 1em;
}
</style>
