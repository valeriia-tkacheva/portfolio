import type { ObjectDirective } from 'vue';

export function createDraggableDirective(): ObjectDirective<HTMLElement> {
  let zIndex = 0;
  const cleanups = new WeakMap<HTMLElement, () => void>();

  return {
    mounted(element) {
      const controller = new AbortController();
      const options = { signal: controller.signal };
      let pointerId: number | null = null;
      let x = 0;
      let y = 0;
      let startX = 0;
      let startY = 0;

      const move = (event: PointerEvent) => {
        if (event.pointerId !== pointerId) return;

        const nextX = event.pageX - startX;
        const nextY = event.pageY - startY;

        if (nextX === x && nextY === y) return;

        x = nextX;
        y = nextY;
        element.style.transform = `translate(${x}px, ${y}px)`;
      };

      const stop = () => {
        const capturedPointerId = pointerId;
        pointerId = null;
        element.removeAttribute('data-dragging');

        if (
          capturedPointerId !== null &&
          element.hasPointerCapture(capturedPointerId)
        ) {
          element.releasePointerCapture(capturedPointerId);
        }
      };

      const finish = (event: PointerEvent) => {
        if (event.pointerId !== pointerId) return;

        if (event.type === 'pointerup') move(event);
        stop();
      };

      element.addEventListener(
        'pointerdown',
        (event) => {
          if (pointerId !== null || !event.isPrimary || event.button !== 0) {
            return;
          }

          event.preventDefault();
          element.setPointerCapture(event.pointerId);
          pointerId = event.pointerId;
          startX = event.pageX - x;
          startY = event.pageY - y;
          element.style.zIndex = String(++zIndex);
          element.setAttribute('data-dragging', '');
        },
        options,
      );
      element.addEventListener('pointermove', move, options);
      element.addEventListener('pointerup', finish, options);
      element.addEventListener('pointercancel', finish, options);
      element.addEventListener('lostpointercapture', finish, options);

      cleanups.set(element, () => {
        controller.abort();
        stop();
      });
    },

    beforeUnmount(element) {
      cleanups.get(element)?.();
      cleanups.delete(element);
    },
  };
}
