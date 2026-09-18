<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const previews = [
  '/projects/premium-banking/preview-1.jpg',
  '/projects/premium-banking/preview-2.jpg',
];

const project: Project = {
  name: 'Премиальный банкинг',
  company: 'Сбер',
  type: 'Редизайн',
  year: 2026,
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="premium-banking-section__grid">
    <UiImage
      v-for="(src, index) in previews"
      :key="index"
      class="premium-banking-section__item"
      :src="src"
    />
  </ProjectSectionBase>
</template>

<style lang="scss">
.premium-banking-section {
  &__grid {
    grid-template-columns:
      percentContentWidth(748)
      1fr;
    aspect-ratio: $content-width / 500;
  }
}
</style>
