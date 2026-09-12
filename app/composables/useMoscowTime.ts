export const useMoscowTime = () => {
  const moscowTime = ref(getMoscowTime());
  let intervalId: ReturnType<typeof setInterval> | undefined;

  onMounted(() => {
    moscowTime.value = getMoscowTime();
    intervalId = setInterval(() => {
      moscowTime.value = getMoscowTime();
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  return moscowTime;
};

const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  timeZone: 'Europe/Moscow',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

function getMoscowTime() {
  return timeFormatter.format(new Date());
}
