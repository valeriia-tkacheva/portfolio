import { HERO_STICKERS } from '~/components/sections/hero/constants.ts';
import breakpoints from '~/assets/styles/breakpoints.module.scss';

export const useMobileStickers = () => {
  const activeMobileSticker = ref(0);
  const isMobileStickerPeeking = ref(false);
  let hasSwitchedMobileSticker = false;
  let mobileStickerMedia: MediaQueryList | undefined;
  let mobileStickerHintTimeout: ReturnType<typeof setTimeout> | undefined;
  let mobileStickerHintInterval: ReturnType<typeof setInterval> | undefined;

  function stopMobileStickerHint() {
    clearTimeout(mobileStickerHintTimeout);
    clearInterval(mobileStickerHintInterval);
    mobileStickerHintTimeout = undefined;
    mobileStickerHintInterval = undefined;
    isMobileStickerPeeking.value = false;
  }

  function startMobileStickerHint() {
    stopMobileStickerHint();

    if (hasSwitchedMobileSticker || !mobileStickerMedia?.matches || HERO_STICKERS.length < 2)
      return;

    mobileStickerHintTimeout = setTimeout(() => {
      mobileStickerHintTimeout = undefined;
      isMobileStickerPeeking.value = true;
      mobileStickerHintInterval = setInterval(() => {
        isMobileStickerPeeking.value = true;
      }, 10_000);
    }, 5000);
  }

  function showNextMobileSticker() {
    if (!mobileStickerMedia?.matches) return;

    hasSwitchedMobileSticker = true;
    stopMobileStickerHint();
    const current = activeMobileSticker.value;
    activeMobileSticker.value = current < HERO_STICKERS.length - 1 ? current + 1 : 0;
  }

  onMounted(() => {
    mobileStickerMedia = window.matchMedia(`(max-width: ${breakpoints.tabletDown})`);
    mobileStickerMedia.addEventListener('change', startMobileStickerHint);
    startMobileStickerHint();
  });

  onUnmounted(() => {
    mobileStickerMedia?.removeEventListener('change', startMobileStickerHint);
    stopMobileStickerHint();
  });

  return { activeMobileSticker, isMobileStickerPeeking, showNextMobileSticker };
};
