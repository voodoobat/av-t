<template>
  <div>
    <PageContainer heading="Настройки">
      <div class="settings-section">
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
                Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.
              </p>
            </div>
          </LayoutWideSection>
          <LayoutWideSection
            class="settings-section__subsection"
            heading="Учётная запись"
            is-mobile-hidden-header
          >
            <BaseInput
              class="settings-section__field"
              label="Компания"
              value="foo bar"
              readonly
            />
            <BaseInput class="settings-section__field" label="Фамилия">
              <small class="settings-section__info">* Не обязательно</small>
            </BaseInput>
          </LayoutWideSection>
        </div>
      </div>
    </PageContainer>
  </div>
</template>
