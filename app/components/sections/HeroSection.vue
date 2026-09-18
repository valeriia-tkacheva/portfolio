<script setup lang="ts">
import { createDraggableDirective } from '~/directives/draggable';
import { toPx } from '#shared/utils/strings.ts';

const vDraggable = createDraggableDirective();

interface Sticker {
  name: string;
  width: number;
  zone: 'top' | 'bottom' | 'left' | 'right';
  offset: number;
  position: number;
}

const stickers: Sticker[] = [
  { name: 'lerochka', width: 214, zone: 'top', offset: 40, position: 0 },
  { name: 'cypa', width: 69, zone: 'top', offset: 35, position: 265 },
  { name: 'sunglasses', width: 134, zone: 'top', offset: 167, position: 320 },
  { name: 'macbook', width: 221, zone: 'top', offset: 57, position: 462 },

  { name: 'sberkot', width: 147, zone: 'left', offset: 203, position: -176 },
  { name: 'drinkit', width: 111, zone: 'left', offset: 57, position: -57 },
  { name: 'rodina_mat', width: 160, zone: 'left', offset: 228, position: 67 },
  { name: 'uprock', width: 104, zone: 'left', offset: 91, position: 123 },
  { name: 'calvin_klein', width: 139, zone: 'left', offset: 41, position: 262 },

  {
    name: 'duolingo_french',
    width: 138,
    zone: 'right',
    offset: 118,
    position: -214,
  },
  { name: 'la_la_land', width: 185, zone: 'right', offset: 71, position: -39 },
  { name: 'leafe', width: 88, zone: 'right', offset: 247, position: 145 },
  { name: 'new_york', width: 187, zone: 'right', offset: 43, position: 231 },

  { name: 'headphones', width: 113, zone: 'bottom', offset: 97, position: 50 },
  { name: 'figma', width: 55, zone: 'bottom', offset: 14, position: 228 },
  { name: 'simba', width: 209, zone: 'bottom', offset: 90, position: 310 },
  { name: 'power', width: 107, zone: 'bottom', offset: -20, position: 518 },
];
</script>

<template>
  <section class="hero-section container">
    <div class="hero-section__content">
      <img
        v-for="sticker in stickers"
        :key="sticker.name"
        v-draggable
        :src="`/images/stickers/${sticker.name}.png`"
        :alt="sticker.name"
        draggable="false"
        class="hero-section__sticker"
        :class="`hero-section__sticker--zone-${sticker.zone}`"
        :style="{
          '--width': toPx(sticker.width),
          '--offset': toPx(sticker.offset),
          '--position': toPx(sticker.position),
        }"
      />

      <div class="hero-section__text text">
        <p>Меня зовут Лера. Я UX/UI-дизайнер с опытом в три года</p>
        <p>
          Работала в дизайн-студиях и над крупным цифровым продуктом —
          <a href="https://www.sberbank.ru/" target="_blank">sberbank.ru</a> с
          аудиторией более 30 млн пользователей в месяц
        </p>
        <p>
          Специализируюсь на промо-проектах, но создаю не просто красивые
          интерфейсы, а продуманные решения, где каждый элемент помогает
          пользователю достичь цели
        </p>
      </div>

      <UiButton class="hero-section__button" text="Перейти к проектам">
        <IconLink />
      </UiButton>
    </div>
  </section>
</template>

<style lang="scss">
.hero-section {
  @include flex-center;
  min-height: 100vh;
  padding-top: 400px;
  padding-bottom: 300px;

  &__content {
    position: relative;
    max-width: 634px;
    margin: auto;
  }

  &__text {
    @include media-up($break-laptop) {
      font-size: 20px;
      line-height: 28px;
    }
  }

  &__button {
    margin-top: 40px;
  }

  &__sticker {
    position: absolute;
    width: var(--width);
    touch-action: none;
    user-select: none;
    cursor: grab;

    @include hover {
      outline: 2px solid #0b99ff;
    }

    &[data-dragging] {
      cursor: grabbing;
    }

    &--zone-top {
      bottom: 100%;
      margin-bottom: var(--offset);
      left: var(--position);
    }

    &--zone-bottom {
      top: 100%;
      margin-top: var(--offset);
      left: var(--position);
    }

    &--zone-left {
      right: 100%;
      margin-right: var(--offset);
      top: var(--position);
    }

    &--zone-right {
      left: 100%;
      margin-left: var(--offset);
      top: var(--position);
    }
  }
}
</style>
