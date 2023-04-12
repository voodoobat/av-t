<template>
  <div>
    <PageContainer heading="Настройки">
      <div class="settings-section">
        <div class="settings-section">
          <LayoutWideSection
            class="settings-section__subsection"
            heading="Звонок через SIP"
            :header-modifiers="['is-flex']"
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
        </div>
      </div>
    </PageContainer>
  </div>
</template>
