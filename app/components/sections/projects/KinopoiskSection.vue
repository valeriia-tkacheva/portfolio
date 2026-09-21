<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const previews = [
  '/projects/kinopoisk/preview-1.jpg',
  '/projects/kinopoisk/preview-2.jpg',
  '/projects/kinopoisk/preview-3.jpg',
];

const project: Project = {
  name: 'Kinopoisk Deluxe',
  company: 'Сбер Университет',
  type: 'Концепт',
  year: 2026,
  externalLink: {
    url: '/projects/kinopoisk/Презентация_Редизайн_Кинопоиск.pdf',
    title: 'Смотреть презентацию',
  },
};
</script>

<template>
  <!-- TODO: Текст кнопки "Смотреть презентацию" -->
  <ProjectSectionBase :project="project" grid-class="kinopoisk-section__grid">
    <UiImage
      v-for="(src, index) in previews"
      :key="index"
      class="kinopoisk-section__item"
      :src="src"
      border
    />
  </ProjectSectionBase>
</template>

<style lang="scss">
.kinopoisk-section {
  &__grid {
    grid-template-columns:
      1fr
      percentContentWidth(748)
      1fr;
    aspect-ratio: $content-width / 460;
  }
}
</style>
