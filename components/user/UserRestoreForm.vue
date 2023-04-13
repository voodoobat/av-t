<template>
  <form class="login-form">
    <BaseInput class="login-form__input" label="Телефон" />
    <BaseButton
      label="Восстановить пароль"
      type="submit"
      mods="primary block"
    />
  </form>
</template>

<style scoped>
.login-form__input {
  margin-bottom: 1em;
}
</style>
