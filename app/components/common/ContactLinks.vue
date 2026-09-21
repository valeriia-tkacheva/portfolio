<script setup lang="ts">
interface Item {
  title: string;
  href: string;
}

const items: Item[] = [
  { title: 'Behance', href: 'https://www.behance.net/soma_a' },
  { title: 'Telegram', href: 'https://t.me/valeriabndrnk' },
  { title: 'Gmail', href: 'mailto:valeriiabondarenko01@gmail.com' },
];
</script>

<template>
  <ul class="contact-links">
    <li v-for="{ title, href } in items" :key="title" class="contact-links__item">
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
    text-transform: uppercase;

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
