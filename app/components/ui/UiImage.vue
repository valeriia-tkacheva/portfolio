<script setup lang="ts">
interface Props {
  src: string;
  border?: boolean;
}

const { src, border } = defineProps<Props>();
</script>

<template>
  <div class="ui-image img-box" :class="{ 'ui-image--border': border }">
    <img :src="$public(src)" alt="Image" draggable="false" />
  </div>
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
