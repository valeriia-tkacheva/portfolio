<template>
  <section class="projects-footer-section container">
    <div class="projects-footer-section__box">
      <h2 class="projects-footer-section__title">Здесь мог быть ваш проект</h2>
      <ContactLinks class="projects-footer-section__contacts" />
    </div>
  </section>
</template>

<style lang="scss">
.projects-footer-section {
  padding-top: 30px;

  &__box {
    @include flex-center;
    flex-direction: column;
    gap: 40px;
    aspect-ratio: $content-width / 500;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    background-color: #111111;
    text-align: center;
  }

  &__title {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
