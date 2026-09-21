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
  details: {
    title: 'Эстетика путешествий',
    text: [
      'Wonderful Stays\u00a0— это отобранная коллекция уникальных бутик-отелей, дизайнерских апартаментов, шале и\u00a0домиков в\u00a0Германии, Австрии, Италии и\u00a0Корсике. Проект объединяет эстетику slow travel, editorial-дизайна и\u00a0тихой роскоши, раскрывая её\u00a0через крупную serif-типографику, природную палитру, кинематографичные фотографии и\u00a0большое количество воздуха',
      'Визуальный язык проекта формирует ощущение спокойствия, свободы и\u00a0лёгкой мечтательности. Он\u00a0не\u00a0стремится впечатлить роскошью напрямую, а\u00a0мягко создаёт желание замедлиться, уехать подальше от\u00a0города и\u00a0погрузиться в\u00a0атмосферу места.',
    ],
    images: [
      '/projects/wonderful-stays/view-1.png',
      '/projects/wonderful-stays/view-2.png',
      '/projects/wonderful-stays/view-3.png',
      '/projects/wonderful-stays/view-4.png',
      '/projects/wonderful-stays/view-5.png',
      '/projects/wonderful-stays/view-6.png',
    ],
  },
  modalClass: 'wonderful-stays-modal',
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

.wonderful-stays-modal {
  .project-modal {
    &__images {
      margin-top: 100px;
      gap: 80px;

      img {
        &:nth-child(3) {
          margin-top: -80px;
        }
      }
    }
  }
}
</style>
