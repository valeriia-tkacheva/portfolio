export default defineNuxtPlugin(() => {
  const basePath = useRuntimeConfig().app.baseURL.replace(/\/$/, '');

  return {
    provide: {
      public: (url?: string) => {
        if (!url?.startsWith('/') || url.startsWith('//')) return url;

        return `${basePath}${url}`;
      },
    },
  };
});
