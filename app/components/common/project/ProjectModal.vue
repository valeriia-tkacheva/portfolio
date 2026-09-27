<script setup lang="ts">
import IconClose from '~/components/icons/IconClose.vue';
import type { ProjectDetails } from '#shared/types/Project.ts';

interface Props {
  projectDetails: ProjectDetails;
}

const { projectDetails } = defineProps<Props>();
defineEmits(['close']);

const { title, text, siteUrl, images } = projectDetails;
const isScrolled = ref(false);

function onScroll(event: Event) {
  isScrolled.value = (event.currentTarget as HTMLElement).scrollTop > 0;
}

onMounted(() => document.body.classList.add('overflow-hidden'));
onBeforeUnmount(() => document.body.classList.remove('overflow-hidden'));
</script>

<template>
  <div class="project-modal">
    <div class="project-modal__head" :class="{ 'project-modal__head--scrolled': isScrolled }">
      <button type="button" class="project-modal__close hover-opacity" @click="$emit('close')">
        <IconClose />
      </button>
    </div>

    <div class="project-modal__body" @scroll.passive="onScroll">
      <div class="project-modal__content">
        <p class="project-modal__title">{{ title }}</p>

        <div class="project-modal__text text-block">
          <p v-for="(p, index) in text" :key="index">{{ p }}</p>
        </div>

        <UiButton
          v-if="siteUrl"
          :href="siteUrl"
          class="project-modal__button"
          target="_blank"
          text="Смотреть сайт"
        >
          <IconLinkExternal />
        </UiButton>

        <div class="project-modal__images">
          <img v-for="src in images" :key="src" :src="$public(src)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgb(from var(--color-background) r g b / 0.9);
  backdrop-filter: blur(30px);

  &__head {
    z-index: 1;
    @include flex-center;
    padding: 30px 0;

    &,
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }

    &::before {
      content: '';
      z-index: -1;
      height: 40vh;
      background: linear-gradient(180deg, var(--color-background), transparent);
      opacity: 0;
      transition: opacity 0.3s linear;
      pointer-events: none;
    }

    &--scrolled::before {
      opacity: 1;
    }
  }

  &__close {
    font-size: 0;
  }

  &__body {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  &__content {
    max-width: 715px + 24px * 2;
    padding: 154px 24px 100px;
    margin: 0 auto;
    text-align: center;

    @include media-down($break-mobile) {
      padding-top: 134px;
    }
  }

  &__title {
    line-height: 1.5;
    text-transform: uppercase;
  }

  &__text {
    margin-top: 24px;
    line-height: 23px;
  }

  &__button {
    margin-top: 40px;
  }

  &__images {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-top: 80px;

    @include media-down($break-mobile) {
      gap: 40px;
      margin-top: 60px;
    }
  }
}
</style>
