<script setup lang="ts">
import breakpoints from '~/assets/styles/breakpoints.module.scss';

interface Props {
  src: string;
  border?: boolean;
  sources?: Partial<Record<'mobile' | 'tablet' | 'laptop', string>>;
}

const { src, border, sources } = defineProps<Props>();
</script>

<template>
  <picture class="ui-image img-box" :class="{ 'ui-image--border': border }">
    <source
      v-if="sources?.mobile"
      :media="`(max-width: ${breakpoints.mobileDown})`"
      :srcset="$public(sources.mobile)"
    />
    <source
      v-if="sources?.tablet"
      :media="`(max-width: ${breakpoints.tabletDown})`"
      :srcset="$public(sources.tablet)"
    />
    <source
      v-if="sources?.laptop"
      :media="`(max-width: ${breakpoints.laptopDown})`"
      :srcset="$public(sources.laptop)"
    />
    <img :src="$public(src)" alt="Image" draggable="false" />
  </picture>
</template>

<style lang="scss">
.ui-image {
  border-radius: var(--border-radius);
  user-select: none;

  &--border {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
