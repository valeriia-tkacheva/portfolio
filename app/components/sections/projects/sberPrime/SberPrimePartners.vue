<script setup lang="ts">
const partners = [
  'citydrive',
  'samokat',
  'kuper',
  'afisha',
  'okko',
  '2gis',
  'zvuk',
  'insurance',
  'mobile',
  'disk',
  'foxford',
  'whoosh',
  'health',
  'megamarket',
  'netologia',
];

const { $public } = useNuxtApp();
const activePartnerIndex = ref(0);
let partnerInterval: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  partners.forEach((partner) => {
    const image = new Image();
    image.src = $public(`/projects/sber-prime/partners/${partner}.jpg`)!;
  });

  partnerInterval = setInterval(() => {
    activePartnerIndex.value = (activePartnerIndex.value + 1) % partners.length;
  }, 500);
});

onUnmounted(() => {
  clearInterval(partnerInterval);
});
</script>

<template>
  <UiImage :src="`/projects/sber-prime/partners/${partners[activePartnerIndex]}.jpg`" />
</template>
