<template>
  <div class="login-box">
    <form class="login-form">
      <BaseInput class="login-form__input" label="Телефон" />
      <BaseInput class="login-form__input" label="Пароль" type="password" />
      <BaseButton label="Войти" type="submit" mods="primary block" />
    </form>
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}

.login-form__input {
  margin-bottom: 1em;
}
</style>
