<script setup lang="ts">
interface Props {
  text: string;
  shortText?: string;
  href?: string;
}

const { text, shortText, href } = defineProps<Props>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    class="ui-button"
    :href="$public(href)"
    :data-short-text="shortText"
  >
    <slot />
    <span class="ui-button__text">{{ text }}</span>
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

  &[data-short-text] {
    @include media-down($break-tablet) {
      .ui-button__text {
        display: none;
      }

      &::after {
        content: attr(data-short-text);
      }
    }
  }
}
</style>
