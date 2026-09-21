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
  details: {
    title: 'Бонусы Спасибо как\u00a0часть экосистемы Сбера',
    text: [
      'Концепция страницы строится вокруг идеи «круговорота выгоды». Пользователь совершает привычные покупки, получает за\u00a0них бонусы Спасибо, а\u00a0затем вновь совершает покупки, используя бонусы.',
      'Спасибки представлены как\u00a0важная связующая часть экосистемы Сбера, объединяющая разные сервисы и\u00a0жизненные сценарии.',
      'Стилеобразующим элементом являются яркие фотоиллюстрации, которые делают коммуникацию более живой и\u00a0близкой для\u00a0пользователя',
    ],
    siteUrl: 'https://www.sberbank.ru/ru/person/sberspasibo',
    images: [
      '/projects/sber-spasibo/view-1.png',
      '/projects/sber-spasibo/view-2.png',
      '/projects/sber-spasibo/view-3.png',
      '/projects/sber-spasibo/view-4.png',
    ],
  },
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
