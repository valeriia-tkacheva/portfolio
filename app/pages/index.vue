<template>
  <div class="home-page">
    <HeroSection />

    <SberPrimeSection class="home-page__project-section" />
    <TicketDropSection class="home-page__project-section" />
    <PremiumBankingSection class="home-page__project-section" />
    <SberSpasiboSection class="home-page__project-section" />
    <WonderfulStaysSection class="home-page__project-section" />
    <KinopoiskSection class="home-page__project-section" />

    <ProjectsFooterSection class="home-page__project-section" />
  </div>
</template>

<style lang="scss">
.home-page {
  padding-bottom: 40px;

  &__project-section {
    margin-top: 100px;
  }
}
</style>
