<script setup lang="ts">
import { createDraggableDirective } from '~/directives/draggable.ts';
import { toPx } from '#shared/utils/strings.ts';
import { HERO_STICKERS } from '~/components/sections/hero/constants.ts';
import { useMobileStickers } from '~/components/sections/hero/useMobileStickers.ts';

const vDraggable = createDraggableDirective();

const { activeMobileSticker, isMobileStickerPeeking, showNextMobileSticker } = useMobileStickers();

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<template>
  <section class="hero-section container">
    <div class="hero-section__content">
      <div class="hero-section__sticker-box" @click="showNextMobileSticker">
        <img
          v-for="(
            {
              name,
              side,
              width: [width, widthLaptop],
              offset: [offset, offsetLaptop],
              position: [position, positionLaptop],
            },
            index
          ) in HERO_STICKERS"
          :key="name"
          v-draggable
          :src="$public(`/images/stickers/${name}.png`)"
          :alt="name"
          draggable="false"
          class="hero-section__sticker"
          :class="[
            `hero-section__sticker--side-${side}`,
            {
              'hero-section__sticker--mobile-active': activeMobileSticker === index,
              'hero-section__sticker--mobile-peeking': index === 1 && isMobileStickerPeeking,
            },
          ]"
          :style="{
            '--width': toPx(width),
            '--offset': toPx(offset),
            '--position': toPx(position),
            '--width-laptop': toPx(widthLaptop),
            '--offset-laptop': toPx(offsetLaptop),
            '--position-laptop': toPx(positionLaptop),
          }"
          @animationend="isMobileStickerPeeking = false"
        />
      </div>

      <div class="hero-section__text text-block">
        <p>Меня зовут Лера. Я&nbsp;UX/UI-дизайнер с&nbsp;опытом в&nbsp;три года</p>
        <p>
          Работала в&nbsp;небольших дизайн-студиях и&nbsp;над крупным цифровым продуктом&nbsp;—
          <a href="https://www.sberbank.ru/" target="_blank">sberbank.ru</a> с&nbsp;аудиторией более
          30&nbsp;млн пользователей в&nbsp;месяц
        </p>
        <p>
          Специализируюсь на&nbsp;промо-проектах, но&nbsp;создаю не&nbsp;просто красивые интерфейсы,
          а&nbsp;продуманные решения, где каждый элемент помогает пользователю достичь цели
        </p>
      </div>

      <UiButton class="hero-section__button" text="Перейти к проектам" @click="scrollToProjects">
        <IconLink />
      </UiButton>

      <ContactLinks class="hero-section__mobile-contacts" />
    </div>
  </section>
</template>

<style lang="scss">
.hero-section {
  @include flex-center;
  min-height: 100vh;
  padding-top: 400px;
  padding-bottom: 300px;

  @include media-down($break-laptop) {
    padding-top: 315px;
    padding-bottom: 150px;
  }

  @include media-down($break-tablet) {
    min-height: 0;
    padding-top: 130px;
    padding-bottom: 0;
  }

  &__content {
    position: relative;
    max-width: 634px;
    margin: auto;

    @include media-down($break-tablet) {
      max-width: none;
    }
  }

  &__sticker-box {
    pointer-events: none;

    @include media-down($break-tablet) {
      display: grid;
      grid-template: 100% / 100%;
      place-items: center;
      isolation: isolate;
      width: 142px;
      height: 142px;
      pointer-events: auto;
      cursor: pointer;
    }
  }

  &__text {
    font-size: 20px;
    line-height: 28px;

    @include media-down($break-tablet) {
      margin-top: 25px;
      font-size: 16px;
      line-height: 23px;
    }
  }

  &__button {
    margin-top: 40px;

    @include media-down($break-tablet) {
      display: none;
    }
  }

  &__mobile-contacts {
    margin-top: 32px;

    @include media-up($break-tablet) {
      display: none;
    }
  }

  &__sticker {
    position: absolute;
    width: var(--width);
    touch-action: none;
    user-select: none;
    cursor: grab;
    pointer-events: auto;

    @include media-down($break-laptop) {
      width: var(--width-laptop);
    }

    @include media-down($break-tablet) {
      display: none;
      position: static;
      grid-area: 1 / 1;
      z-index: 1;
      pointer-events: none;
      width: auto;
      max-width: min(var(--width), 100%);
      max-height: 100%;

      &--mobile-active {
        display: block;
      }

      &--mobile-peeking {
        display: block;
        z-index: 0;
        animation: hero-sticker-peek 1.5s ease-in-out;
      }
    }

    @include hover {
      outline: 2px solid #0b99ff;
    }

    &[data-dragging] {
      cursor: grabbing;
    }

    &--side-top {
      bottom: 100%;
      margin-bottom: var(--offset);
      left: var(--position);

      @include media-down($break-laptop) {
        margin-bottom: var(--offset-laptop);
        left: var(--position-laptop);
      }
    }

    &--side-bottom {
      top: 100%;
      margin-top: var(--offset);
      left: var(--position);

      @include media-down($break-laptop) {
        margin-top: var(--offset-laptop);
        left: var(--position-laptop);
      }
    }

    &--side-left {
      right: 100%;
      margin-right: var(--offset);
      top: var(--position);

      @include media-down($break-laptop) {
        margin-right: var(--offset-laptop);
        top: var(--position-laptop);
      }
    }

    &--side-right {
      left: 100%;
      margin-left: var(--offset);
      top: var(--position);

      @include media-down($break-laptop) {
        margin-left: var(--offset-laptop);
        top: var(--position-laptop);
      }
    }

    &--side-top,
    &--side-bottom,
    &--side-left,
    &--side-right {
      @include media-down($break-tablet) {
        margin: 0;
      }
    }
  }
}

@keyframes hero-sticker-peek {
  0%,
  100% {
    transform: translate(0, 0) rotate(35deg) scale(0.65);
  }

  35%,
  65% {
    transform: translate(48%, -35%) rotate(35deg) scale(0.65);
  }
}
</style>
