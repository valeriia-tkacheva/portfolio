<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const previews = [
  '/projects/ticket-drop/preview-1.jpg',
  '/projects/ticket-drop/preview-2.jpg',
  '/projects/ticket-drop/preview-3.jpg',
  '/projects/ticket-drop/preview-4.jpg',
];

const project: Project = {
  name: 'Ticket Drop Service',
  company: 'Uprock School',
  type: 'Концепт',
  year: 2024,
  externalLink: {
    url: 'https://www.behance.net/gallery/213547005/Ticket-Drop-Mobile-app',
    title: 'Кейс на Behance',
  },
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="ticket-drop-section__grid">
    <UiImage
      v-for="(src, index) in previews"
      :key="index"
      class="ticket-drop-section__item"
      :src="src"
      :border="index === 1 || index === 2"
    />
  </ProjectSectionBase>
</template>

<style lang="scss">
.ticket-drop-section {
  &__grid {
    $grid-height: 1004;
    grid-template-columns:
      percentContentWidth(410)
      1fr
      percentContentWidth(748);
    grid-template-rows: percentRatio(500, $grid-height) 1fr;
    aspect-ratio: $content-width / 1004;
  }

  &__item {
    &:nth-child(1) {
      border-radius: 140px;
    }

    &:nth-child(2) {
      grid-column: 2 / 4;
    }

    &:nth-child(3) {
      grid-column: 1 / 3;
    }
  }
}
</style>
