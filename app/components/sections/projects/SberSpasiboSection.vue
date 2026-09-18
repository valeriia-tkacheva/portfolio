<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const previews = [
  '/projects/sber-spasibo/preview-1.jpg',
  '/projects/sber-spasibo/preview-2.jpg',
  '/projects/sber-spasibo/preview-3.jpg',
];

const project: Project = {
  name: 'СберСпасибо',
  company: 'Сбер',
  type: 'Редизайн',
  year: 2026,
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="sber-spasibo-section__grid">
    <UiImage
      v-for="(src, index) in previews"
      :key="index"
      class="sber-spasibo-section__item"
      :src="src"
    />
  </ProjectSectionBase>
</template>

<style lang="scss">
.sber-spasibo-section {
  &__grid {
    grid-template-columns:
      1fr
      percentContentWidth(698)
      1fr;
    aspect-ratio: $content-width / 500;
  }
}
</style>
