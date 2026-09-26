<script setup lang="ts">
import { createDraggableDirective } from '~/directives/draggable';
import { toPx } from '#shared/utils/strings.ts';

const vDraggable = createDraggableDirective();

interface Sticker {
  name: string;
  side: 'top' | 'bottom' | 'left' | 'right';
  width: [number, number];
  offset: [number, number];
  position: [number, number];
}

const stickers: Sticker[] = [
  {
    name: 'lerochka',
    side: 'top',
    width: [214, 180],
    offset: [40, 30],
    position: [0, 0],
  },
  {
    name: 'cypa',
    side: 'top',
    width: [69, 57],
    offset: [35, 30],
    position: [265, 247],
  },
  {
    name: 'sunglasses',
    side: 'top',
    width: [134, 107],
    offset: [167, 114],
    position: [320, 285],
  },
  {
    name: 'macbook',
    side: 'top',
    width: [221, 181],
    offset: [57, 32],
    position: [462, 399],
  },

  {
    name: 'sberkot',
    side: 'left',
    width: [147, 120],
    offset: [203, 156],
    position: [-176, -137],
  },
  {
    name: 'drinkit',
    side: 'left',
    width: [111, 86],
    offset: [57, 71],
    position: [-57, -12],
  },
  {
    name: 'rodina_mat',
    side: 'left',
    width: [160, 135],
    offset: [228, 142],
    position: [67, 63],
  },
  {
    name: 'uprock',
    side: 'left',
    width: [104, 86],
    offset: [91, 38],
    position: [123, 135],
  },
  {
    name: 'calvin_klein',
    side: 'left',
    width: [139, 109],
    offset: [41, 13],
    position: [262, 240],
  },

  {
    name: 'duolingo_french',
    side: 'right',
    width: [138, 108],
    offset: [118, 22],
    position: [-214, -183],
  },
  {
    name: 'la_la_land',
    side: 'right',
    width: [185, 170],
    offset: [71, 37],
    position: [-39, -51],
  },
  {
    name: 'leafe',
    side: 'right',
    width: [88, 59],
    offset: [247, 194],
    position: [145, 97],
  },
  {
    name: 'new_york',
    side: 'right',
    width: [187, 153],
    offset: [43, 68],
    position: [231, 178],
  },

  {
    name: 'headphones',
    side: 'bottom',
    width: [113, 95],
    offset: [97, 37],
    position: [50, 90],
  },
  {
    name: 'figma',
    side: 'bottom',
    width: [55, 52],
    offset: [14, -9],
    position: [228, 249],
  },
  {
    name: 'simba',
    side: 'bottom',
    width: [209, 176],
    offset: [90, 4],
    position: [310, 340],
  },
  {
    name: 'power',
    side: 'bottom',
    width: [107, 88],
    offset: [-20, -31],
    position: [518, 548],
  },
];

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<template>
  <section class="hero-section container">
    <div class="hero-section__content">
      <img
        v-for="{
          name,
          side,
          width: [width, widthLaptop],
          offset: [offset, offsetLaptop],
          position: [position, positionLaptop],
        } in stickers"
        :key="name"
        v-draggable
        :src="$public(`/images/stickers/${name}.png`)"
        :alt="name"
        draggable="false"
        class="hero-section__sticker"
        :class="`hero-section__sticker--side-${side}`"
        :style="{
          '--width': toPx(width),
          '--offset': toPx(offset),
          '--position': toPx(position),
          '--width-laptop': toPx(widthLaptop),
          '--offset-laptop': toPx(offsetLaptop),
          '--position-laptop': toPx(positionLaptop),
        }"
      />

      <div class="hero-section__text text-block">
        <p>Меня зовут Лера. Я UX/UI-дизайнер с опытом в три года</p>
        <p>
          Работала в дизайн-студиях и над крупным цифровым продуктом —
          <a href="https://www.sberbank.ru/" target="_blank">sberbank.ru</a> с аудиторией более 30
          млн пользователей в месяц
        </p>
        <p>
          Специализируюсь на промо-проектах, но создаю не просто красивые интерфейсы, а продуманные
          решения, где каждый элемент помогает пользователю достичь цели
        </p>
      </div>

      <UiButton class="hero-section__button" text="Перейти к проектам" @click="scrollToProjects">
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

  @include media-down($break-laptop) {
    padding-top: 315px;
    padding-bottom: 150px;
  }

  &__content {
    position: relative;
    max-width: 634px;
    margin: auto;
  }

  &__text {
    font-size: 20px;
    line-height: 28px;
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

    @include media-down($break-laptop) {
      width: var(--width-laptop);
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
  }
}
</style>
