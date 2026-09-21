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
  details: {
    title: 'Новый элегантный дизайн Премиум сегмента сбера',
    text: [
      'Сдержанная технологичная роскошь: спокойствие, приватность, лёгкость и\u00a0безупречный комфорт. Премиальность раскрывается не\u00a0через демонстративный статус, а\u00a0через пространство, визуальную тишину и\u00a0внимание к\u00a0деталям.',
      'Новый дизайн премиум сегмента на\u00a0сайте основан на\u00a0обновлённом брендбуке. Раздел обрёл уникальный характер, в\u00a0который заложены идеи минимализма, воздушности и\u00a0элегантности',
    ],
    siteUrl: 'https://www.sberbank.ru/ru/person/bank_cards/debit/sberkarta_premium',
    images: [
      '/projects/premium-banking/view-1.png',
      '/projects/premium-banking/view-2.png',
      '/projects/premium-banking/view-3.png',
      '/projects/premium-banking/view-4.png',
      '/projects/premium-banking/view-5.png',
    ],
  },
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
