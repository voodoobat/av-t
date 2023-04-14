<template>
  <div class="settings-section">

    <LayoutWideSection
      class="settings-section__subsection"
      heading="Звонок через SIP"
      is-flex-header
    >
      <template #header>
        <BaseSwitcher class="settings-section__switcher" is-thin />
      </template>
      <div class="post-entry">
        <p class="is-muted">
          Включите эту функцию чтобы Авито и другие площадки не блокировали
          ваш аккаунт. Будет выглядеть так, будто звонки совершаются с
          разных номеров.
        </p>
      </div>
    </LayoutWideSection>

    <LayoutWideSection
      class="settings-section__subsection"
      heading="Учётная запись"
      is-mobile-hidden-header
    >
      <div class="settings-section__fields">
        <BaseInput
          v-model="settings.companyname"
          class="settings-section__field"
          label="Компания"
          readonly
        />
        <BaseInput
          v-model="settings.login"
          class="settings-section__field"
          label="Логин"
          readonly
        />
        <BaseInput
          v-model="settings.phone"
          class="settings-section__field"
          label="Номер телефона"
          readonly
        />
        <BaseInput
          v-model="settings.fname"
          class="settings-section__field"
          label="Имя"
          readonly
        />
        <BaseInput
          v-model="settings.lname"
          class="settings-section__field"
          label="Фамилия"
          readonly
        >
          <small class="settings-section__info">* Не обязательно</small>
        </BaseInput>
      </div>
    </LayoutWideSection>

    <LayoutWideSection
      class="settings-section__subsection"
      heading="Учётная запись"
      is-mobile-hidden-header
    >
      <div class="post-entry">
        <p class="is-muted">
          Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки.
        </p>
      </div>
      <div class="settings-section__fields">
        <div class="settings-section__subcaption caption is-mobile-hidden">
          Уведомления
        </div>
        <div class="settings-section__notifications">
          <div class="settings-section__field is-flex">
            <BaseRadio
              v-model="settings.notifytype"
              value="-1"
              name="notifytype"
              label="Выкл"
              :checked="settings.notifytype === '-1'"
            />
          </div>
          <div class="settings-section__field is-flex">
            <BaseRadio
              v-model="settings.notifytype"
              value="1"
              name="notifytype"
              label="Push"
              :checked="settings.notifytype === '1'"
              disabled
            />
            <BaseInfoTooltip message="Можно установить только в приложении" />
          </div>
          <div class="settings-section__field is-flex">
            <BaseRadio
              v-model="settings.notifytype"
              value="2"
              name="notifytype"
              label="Email"
              :checked="settings.notifytype === '2'"
            />
            <BaseInputEdit v-model="settings.email" @update="updateEmail" />
          </div>
          <div class="settings-section__field is-flex">
            <BaseRadio
              v-model="settings.notifytype"
              value="3"
              name="notifytype"
              label="Telegram ID"
              :checked="settings.notifytype === '3'"
            />
          </div>
        </div>
      </div>
    </LayoutWideSection>

    <LayoutWideSection
      class="settings-section__subsection"
      heading="Переход в карточку"
      is-mobile-hidden-header
    >
      <div class="post-entry">
        <p class="is-muted">
          Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.
        </p>
      </div>
      <div class="settings-section__fields">
        <div class="settings-section__notifications">
          <div class="settings-section__field is-flex">
            <BaseRadio
              v-model="settings.sendMethod"
              value="-1"
              name="sendMethod"
              label="В карточку в текущем окне"
              :checked="settings.sendMethod === -1"
            />
          </div>
          <div class="settings-section__field is-flex">
            <BaseRadio
              v-model="settings.sendMethod"
              value="1"
              name="sendMethod"
              label="В карточку в отдельном окне"
              :checked="settings.sendMethod === 1"
            />
          </div>
          <div class="settings-section__field is-flex">
            <BaseRadio
              v-model="settings.sendMethod"
              value="2"
              name="sendMethod"
              label="На источник"
              :checked="settings.sendMethod === 2"
            />
            <BaseInfoTooltip message="подсказка..." />
          </div>
        </div>
      </div>
    </LayoutWideSection>

    <LayoutWideSection
      class="settings-section__subsection"
      heading="Прочие настройки"
      is-mobile-hidden-header
    >
      <div class="settings-section__fields">
        <div class="settings-section__field">
          <BaseSelect
            value="Москва"
            label="Часовой пояс"
            :options="['Москва', 'Рязань', 'Воронеж']"
          />
        </div>
        <div class="settings-section__field is-flex is-gap">
          <BaseCheckbox
            label="Автоматически переходить к новым объявлениям"
            checked
          />
          <BaseInfoTooltip message="подсказка..." />
        </div>
        <div class="settings-section__field is-flex is-gap">
          <BaseCheckbox
            label="Включить цвета в ленте"
            checked
          />
          <BaseInfoTooltip message="подсказка..." />
        </div>
      </div>
      <div class="settings-section__bottom">
        <BaseButton label="Сохранить" mods="block primary" />
      </div>
    </LayoutWideSection>
  </div>
</template>

<script setup>
import { reactive, useStore } from '@nuxtjs/composition-api'

const store = useStore()
const { user } = store.state['user.store']

const settings = reactive({ ...user })
const updateEmail = () => {
  store.dispatch('user.store/update', {
    email: settings.email
  })
}
</script>

<style scoped>
.settings-section__field.is-gap {
  justify-content: space-between;
  gap: 2rem;
}
</style>
