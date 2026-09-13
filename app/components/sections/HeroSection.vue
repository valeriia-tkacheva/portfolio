<script setup lang="ts">
import IconLink from '~/components/icons/IconLink.vue';
import { createDraggableDirective } from '~/directives/draggable';

const vDraggable = createDraggableDirective();

const stickerNames = [
  'cypa',
  'headphones',
  'rodina_mama',
  'power',
  'simba',
  'figma',
  'popcorne',
  'macbook',
  'sberkot',
];
</script>

<template>
  <section class="hero-section container">
    <div class="hero-section__content">
      <img
        v-draggable
        src="/images/stickers/lerochka.png"
        alt="Лера"
        draggable="false"
        class="hero-section__photo"
      />

      <div class="hero-section__text text">
        <p>Меня зовут Лера. Я UX/UI-дизайнер с опытом в три года</p>
        <p>
          Работала в небольших дизайн-студиях и над крупным цифровым продуктом —
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
    </div>
  </section>
</template>

<style lang="scss">
.hero-section {
  &__content {
    position: relative;
    max-width: 634px;
    margin: 0 auto;
    padding: 100px 0 276px;
  }

  &__photo,
  &__sticker {
    touch-action: none;
    user-select: none;
    cursor: grab;

    @include hover {
      outline: 2px solid #0b99ff;
    }

    &[data-dragging] {
      cursor: grabbing;
    }
  }

  &__photo {
    position: relative;
    display: block;
    width: 200px;
  }

  &__text {
    margin-top: 40px;

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

    &--cypa {
      top: 120px;
      left: 278px;
      width: 74px;
    }

    &--headphones {
      top: 84px;
      left: 505px;
      width: 128px;
    }

    &--rodina_mama {
      top: 185px;
      right: -262px;
      width: 148px;
    }

    &--power {
      bottom: 167px;
      right: -335px;
      width: 140px;
    }

    &--simba {
      bottom: 51px;
      left: 454px;
      width: 223px;
    }

    &--figma {
      bottom: 163px;
      left: 258px;
      width: 70px;
    }

    &--popcorne {
      bottom: 47px;
      right: 509px;
      width: 136px;
    }

    &--macbook {
      bottom: 156px;
      left: -385px;
      width: 260px;
    }

    &--sberkot {
      top: 233px;
      left: -292px;
      width: 153px;
    }
  }
}
</style>
