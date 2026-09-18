<script setup lang="ts">
import IconLink from '~/components/icons/IconLink.vue';
import { createDraggableDirective } from '~/directives/draggable';

const vDraggable = createDraggableDirective();

const stickerNames = [
  'lerochka',
  'calvin_klein',
  'cypa',
  'drinkit',
  'duolingo_french',
  'figma',
  'headphones',
  'la_la_land',
  'leafe',
  'macbook',
  'new_york',
  'power',
  'rodina_mat',
  'sberkot',
  'simba',
  'sunglasses',
  'uprock',
];
</script>

<template>
  <section class="hero-section container">
    <div class="hero-section__content">
      <img
        v-for="name in stickerNames"
        :key="name"
        v-draggable
        :src="`/images/stickers/${name}.png`"
        :alt="name"
        draggable="false"
        class="hero-section__sticker"
        :class="`hero-section__sticker--${name}`"
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
@use 'sass:map';

@mixin sticker($name, $width, $zone, $offset, $position) {
  $side: map.get(
    (
      top: bottom,
      bottom: top,
      left: right,
      right: left,
    ),
    $zone
  );

  @if $side == null {
    @error 'Unknown sticker zone: #{$zone}. Expected top, bottom, left, or right.';
  }

  &--#{$name} {
    #{$side}: 100%;
    margin-#{$side}: $offset * 1px;

    @if $zone == top or $zone == bottom {
      left: $position * 1px;
    } @else {
      top: $position * 1px;
    }

    width: $width * 1px;
  }
}

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
    touch-action: none;
    user-select: none;
    cursor: grab;

    @include hover {
      outline: 2px solid #0b99ff;
    }

    &[data-dragging] {
      cursor: grabbing;
    }

    @include sticker('lerochka', 214, 'top', 40, 0);
    @include sticker('cypa', 69, 'top', 35, 265);
    @include sticker('sunglasses', 134, 'top', 167, 320);
    @include sticker('macbook', 221, 'top', 57, 462);

    @include sticker('sberkot', 147, 'left', 203, -176);
    @include sticker('drinkit', 111, 'left', 57, -57);
    @include sticker('rodina_mat', 160, 'left', 228, 67);
    @include sticker('uprock', 104, 'left', 91, 123);
    @include sticker('calvin_klein', 139, 'left', 41, 262);

    @include sticker('duolingo_french', 138, 'right', 118, -214);
    @include sticker('la_la_land', 185, 'right', 71, -39);
    @include sticker('leafe', 88, 'right', 247, 145);
    @include sticker('new_york', 187, 'right', 43, 231);

    @include sticker('headphones', 113, 'bottom', 97, 50);
    @include sticker('figma', 55, 'bottom', 14, 228);
    @include sticker('simba', 209, 'bottom', 90, 310);
    @include sticker('power', 107, 'bottom', -20, 518);
  }
}
</style>
