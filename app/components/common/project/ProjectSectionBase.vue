<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';
import { useProjectModal } from '~/composables/useProjectModal.ts';

interface Props {
  project: Project;
  gridClass: string;
}

const { project, gridClass } = defineProps<Props>();
const { name, company, type, year, details, externalLink } = project;

const { open } = useProjectModal();
</script>

<template>
  <section class="project-section container">
    <div class="project-section__head">
      <h2 class="project-section__title">{{ name }}</h2>
      <UiButton
        v-if="details"
        class="project-section__button"
        text="Подробнее о проекте"
        @click="open(project)"
      >
        <IconPlay />
      </UiButton>

      <UiButton
        v-else-if="externalLink"
        :href="externalLink.url"
        target="_blank"
        :text="externalLink.title"
      >
        <IconPlay />
      </UiButton>
    </div>

    <ul class="project-section__info-list">
      <li v-for="item in [company, type, year]" :key="item" class="project-section__info-item">
        {{ item }}
      </li>
    </ul>

    <div class="project-section__grid" :class="gridClass">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.project-section {
  padding-top: 30px;

  &__head {
    display: flex;
    gap: 20px;
  }

  &__title {
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    grid-gap: 24px;
    margin-top: 32px;
  }

  &__info-list {
    margin-top: 16px;
    margin-left: 16px;
  }

  &__info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    &::before {
      content: '';
      @include circle(4px);
      background-color: var(--color-text);
    }
  }
}
</style>
