<template>
  <form class="login-form">
    <BaseInput class="login-form__input" label="Логин" />
    <BaseInput class="login-form__input" label="Пароль" type="password" />
    <BaseButton label="Войти" type="submit" mods="primary block" />
  </form>
</template>

<style scoped>
.login-form__input {
  margin-bottom: 1em;
}
</style>
