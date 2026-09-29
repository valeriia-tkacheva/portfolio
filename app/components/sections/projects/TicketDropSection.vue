<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const project: Project = {
  name: 'Ticket Drop Service',
  company: 'Uprock School',
  type: 'Концепт',
  year: 2024,
  externalLink: {
    url: 'https://www.behance.net/gallery/213547005/Ticket-Drop-Mobile-app',
    title: 'Кейс на Behance',
    shortTitle: 'Behance',
  },
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="ticket-drop-section__grid">
    <UiVideo
      class="ticket-drop-section__item"
      src="/projects/ticket-drop/preview-1.mp4"
      poster="/projects/ticket-drop/preview-1.jpg"
      alt="Крыло самолёта над облаками"
    />
    <UiImage
      class="ticket-drop-section__item"
      src="/projects/ticket-drop/preview-2.jpg"
      :sources="{
        tablet: '/projects/ticket-drop/preview-2-mobile.jpg',
      }"
      border
    />
    <UiImage class="ticket-drop-section__item" src="/projects/ticket-drop/preview-3.jpg" border />
    <UiImage class="ticket-drop-section__item" src="/projects/ticket-drop/preview-4.jpg" />
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

    @include media-down($break-tablet) {
      grid-template-columns: auto;
      grid-template-rows: auto;
      aspect-ratio: auto;
    }
  }

  &__item {
    &:nth-child(1) {
      border-radius: 140px;

      @include media-down($break-laptop) {
        border-radius: 110px;
      }

      @include media-down($break-tablet) {
        aspect-ratio: 410 / 500;
        border-radius: 120px;
      }
    }

    &:nth-child(2) {
      grid-column: 2 / 4;
    }

    &:nth-child(3) {
      grid-column: 1 / 3;
    }

    &:nth-child(n) {
      @include media-down($break-tablet) {
        grid-column: auto;
      }
    }
  }
}
</style>
