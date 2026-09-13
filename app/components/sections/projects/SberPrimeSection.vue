<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const previews = [
  '/projects/sber-prime/preview-1.jpg',
  '/projects/sber-prime/preview-2.jpg',
  '/projects/sber-prime/preview-3.jpg',
  '/projects/sber-prime/preview-4.jpg',
];

const project: Project = {
  name: 'СберПрайм',
  company: 'Сбер',
  type: 'Редизайн',
  year: 2026,
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="sber-prime-section__grid">
    <UiImage
      v-for="(src, index) in previews"
      :key="index"
      class="sber-prime-section__item"
      :src="src"
    />
  </ProjectSectionBase>
</template>

<style lang="scss">
.sber-prime-section {
  &__grid {
    grid-template-columns:
      percentContentWidth(709)
      percentContentWidth(320)
      1fr;
    aspect-ratio: $content-width / 652;
  }

  &__item {
    &:nth-child(1) {
      grid-row: 1 / 3;
    }

    &:nth-child(4) {
      grid-column-start: 3;
      grid-row: 1 / 3;
    }
  }
}
</style>
