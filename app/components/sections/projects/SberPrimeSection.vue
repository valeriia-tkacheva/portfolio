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
