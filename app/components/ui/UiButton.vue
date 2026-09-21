<script setup lang="ts">
interface Props {
  text: string;
  href?: string;
}

const { text, href } = defineProps<Props>();
</script>

<template>
  <component :is="href ? 'a' : 'button'" :href="$public(href)" class="ui-button">
    <slot />
    <span>{{ text }}</span>
  </component>
</template>

<style lang="scss">
.ui-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 3px;

  @include hover {
    text-decoration: none;
  }
}
</style>
