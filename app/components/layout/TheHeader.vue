<script setup lang="ts">
import { NAME } from '#shared/utils/constants.ts';
import { useMoscowTime } from '~/composables/useMoscowTime.ts';

const moscowTime = useMoscowTime();
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <p class="header__time">Москва. {{ moscowTime }}</p>

      <div class="header__main">
        <p class="header__name">{{ NAME }}</p>

        <UiButton href="/valeriia-tkacheva.pdf" class="header__resume" text="Резюме" download>
          <IconDownload />
        </UiButton>
      </div>

      <ContactLinks class="header__contacts" />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  text-transform: uppercase;

  @include media-down($break-tablet) {
    top: 20px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 634px 1fr;

    @include media-down($break-tablet) {
      display: block;
    }
  }

  &__time {
    @include media-down($break-tablet) {
      display: none;
    }
  }

  &__main {
    display: flex;
    gap: 40px;

    @include media-down($break-tablet) {
      justify-content: space-between;
    }
  }

  &__contacts {
    justify-self: end;

    @include media-down($break-tablet) {
      display: none;
    }
  }
}
</style>
