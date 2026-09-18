<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const previews = [
  '/projects/wonderful-stays/preview-1.jpg',
  '/projects/wonderful-stays/preview-2.jpg',
  '/projects/wonderful-stays/preview-3.jpg',
];

const project: Project = {
  name: 'Wonderful Stays',
  company: 'Uprock School',
  type: 'Концепт',
  year: 2024,
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="wonderful-stays-section__grid">
    <UiImage
      v-for="(src, index) in previews"
      :key="index"
      class="wonderful-stays-section__item"
      :src="src"
    />
  </ProjectSectionBase>
</template>

<style lang="scss">
.wonderful-stays-section {
  &__grid {
    grid-template-columns:
      percentContentWidth(698)
      1fr
      1fr;
    aspect-ratio: $content-width / 500;
  }
}
</style>
