<template>
  <div>
    <PageContainer heading="Настройки">
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
        <LayoutWideSection
          class="settings-section__subsection"
          heading="Оповещения о новых подборках"
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
                <BaseRadio name="x" label="Выкл" />
              </div>
              <div class="settings-section__field is-flex">
                <BaseRadio name="x" label="Push" disabled />
              </div>
            </div>
          </div>
        </LayoutWideSection>
        <LayoutWideSection>
          <BaseSelect value="Selected" :options="['foo', 'bar', 'baz']" />
        </LayoutWideSection>
        <LayoutWideSection
          class="settings-section__subsection"
          heading="Оповещения о новых подборках"
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
                <BaseCheckbox label="Автоматически переходить к новым объявлениям" />
                <BaseInfoTooltip message="Neque numquam perspiciatis quos sequi sunt suscipit veniam voluptatem?" />
              </div>
              <div class="settings-section__field is-flex">
                <BaseCheckbox label="Push" disabled />
              </div>
            </div>
          </div>
        </LayoutWideSection>
        <BaseButton label="Сохранить" :mods="['primary']" />
      </div>
    </PageContainer>
  </div>
</template>
