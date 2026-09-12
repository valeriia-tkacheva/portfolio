<script setup lang="ts">
const items = [
  { title: 'Behance', href: '#' },
  { title: 'Telegram', href: '#' },
  { title: 'Gmail', href: '#' },
];
</script>

<template>
  <ul class="contact-links">
    <li
      v-for="{ title, href } in items"
      :key="title"
      class="contact-links__item"
    >
      <a :href="href" target="_blank">{{ title }}</a>
    </li>
  </ul>
</template>

<style lang="scss">
.contact-links {
  display: flex;

  &__item {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      &::before {
        content: '';
        @include circle(4px);
        margin: 0 12px;
        background-color: var(--color-text);
      }
    }

    a {
      @include hover {
        background-color: var(--color-text);
        color: var(--color-background);
      }
    }
  }
}
</style>
