<script setup lang="ts">
import { useMoscowTime } from '~/composables/useMoscowTime.ts';
import { NAME } from '~/constants/common.ts';

const moscowTime = useMoscowTime();
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <p class="header__time">Москва. {{ moscowTime }}</p>

      <div class="header__main">
        <p class="header__name">{{ NAME }}</p>

        <UiButton href="#" class="header__resume" text="Резюме" download>
          <IconDownload />
        </UiButton>
      </div>

      <ContactLinks class="header__contacts" />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding-top: 30px;
  text-transform: uppercase;

  &__container {
    display: grid;
    grid-template-columns: 1fr 634px 1fr;
  }

  &__main {
    display: flex;
    gap: 40px;
  }

  &__contacts {
    justify-self: end;
  }
}
</style>
