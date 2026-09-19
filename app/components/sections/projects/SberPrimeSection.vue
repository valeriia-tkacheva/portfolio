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
    title: 'СберПрайм: редизайн лендинга на&nbsp;вовлечение в&nbsp;подписку',
    text: `
      <p>
          В&nbsp;центре редизайна лендинга СберПрайм&nbsp;&mdash; роль подписки в&nbsp;повседневной
          жизни пользователя. Концепция раскрывает ключевое позиционирование &laquo;Каждый день
          лучше со&nbsp;СберПрайм&raquo; через разнообразие партнёров и&nbsp;сервисов, которые
          помогают решать ежедневные задачи и&nbsp;делают привычные моменты приятнее.
        </p>
        <p>
          Визуальная идея строится на образе СберПрайм как ежедневного праздника — с яркими
          положительными эмоциями и естественным присутствием сервисов подписки в жизни пользователя
        </p>
    `,
    siteUrl: '#',
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
