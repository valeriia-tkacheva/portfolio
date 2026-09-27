<script setup lang="ts">
interface Props {
  src: string;
  poster: string;
  alt?: string;
}

const { src, poster, alt = '' } = defineProps<Props>();
const { $public } = useNuxtApp();
const player = useTemplateRef<HTMLVideoElement>('player');
const hasStarted = ref(false);

let observer: IntersectionObserver | undefined;
let reducedMotion: MediaQueryList | undefined;
let isNearViewport = false;

function updatePlayback() {
  const video = player.value;
  if (!video) return;

  if (reducedMotion?.matches) hasStarted.value = false;

  if (!isNearViewport || reducedMotion?.matches || document.hidden) {
    video.pause();
    return;
  }

  // Задаём источник при приближении к экрану, чтобы не загружать видео заранее.
  if (!video.hasAttribute('src')) video.src = $public(src)!;

  video.play().catch(() => {
    if (video.paused) hasStarted.value = false;
  });
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  reducedMotion.addEventListener('change', updatePlayback);
  document.addEventListener('visibilitychange', updatePlayback);

  observer = new IntersectionObserver(
    ([entry]) => {
      isNearViewport = entry?.isIntersecting ?? false;
      updatePlayback();
    },
    { rootMargin: '200px' },
  );

  if (player.value) observer.observe(player.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  reducedMotion?.removeEventListener('change', updatePlayback);
  document.removeEventListener('visibilitychange', updatePlayback);
  player.value?.pause();
});
</script>

<template>
  <div class="ui-video img-box">
    <img :src="$public(poster)" :alt="alt" draggable="false" />
    <video
      ref="player"
      class="ui-video__player"
      :class="{ 'ui-video__player--ready': hasStarted }"
      muted
      loop
      playsinline
      preload="none"
      aria-hidden="true"
      @playing="hasStarted = true"
      @error="hasStarted = false"
    />
  </div>
</template>

<style lang="scss">
.ui-video {
  border-radius: var(--border-radius);
  user-select: none;

  &__player {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;

    &--ready {
      opacity: 1;
    }
  }
}
</style>
