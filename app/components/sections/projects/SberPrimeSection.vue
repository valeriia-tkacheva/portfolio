<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const project: Project = {
  name: 'СберПрайм',
  company: 'Сбер',
  type: 'Редизайн',
  year: 2026,
  details: {
    title: 'СберПрайм: редизайн лендинга на\u00a0вовлечение в\u00a0подписку',
    text: [
      'В\u00a0центре редизайна лендинга СберПрайм\u00a0— роль подписки в\u00a0повседневной жизни пользователя. Концепция раскрывает ключевое позиционирование «Каждый день лучше со\u00a0СберПрайм» через разнообразие партнёров и\u00a0сервисов, которые помогают решать ежедневные задачи и\u00a0делают привычные моменты приятнее.',
      'Визуальная идея строится на\u00a0образе СберПрайм как\u00a0ежедневного праздника — с\u00a0яркими положительными эмоциями и\u00a0естественным присутствием сервисов подписки в\u00a0жизни пользователя',
    ],
    siteUrl: 'https://www.sberbank.ru/sberprime_ab',
    images: [
      '/projects/sber-prime/view-1.png',
      '/projects/sber-prime/view-2.png',
      '/projects/sber-prime/view-3.png',
    ],
  },
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="sber-prime-section__grid">
    <UiImage class="sber-prime-section__item" src="/projects/sber-prime/preview-1.jpg" />
    <UiVideo
      class="sber-prime-section__item"
      src="/projects/sber-prime/preview-2.mp4"
      poster="/projects/sber-prime/preview-2.jpg"
      alt="Хомяк со стаканчиком кофе на фоне зелёного луга"
    />
    <UiImage class="sber-prime-section__item" src="/projects/sber-prime/preview-3.jpg" />
    <UiImage class="sber-prime-section__item" src="/projects/sber-prime/preview-4.jpg" />
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

    @include media-down($break-tablet) {
      grid-template-columns: 1fr 1fr;
      aspect-ratio: auto;
    }
  }

  &__item {
    &:nth-child(1) {
      grid-row: 1 / 3;
    }

    &:nth-child(2) {
      @include media-down($break-tablet) {
        aspect-ratio: 165 / 162;
      }
    }

    &:nth-child(4) {
      grid-column-start: 3;
      grid-row: 1 / 3;
    }

    &:nth-child(1),
    &:nth-child(4) {
      @include media-down($break-tablet) {
        grid-column: 1 / 3;
        grid-row: auto;
      }
    }
  }
}
</style>
