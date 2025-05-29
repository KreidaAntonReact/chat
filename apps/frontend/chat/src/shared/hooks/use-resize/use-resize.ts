import { useLayoutEffect, type RefObject } from 'react';

export const useResize = (ref: RefObject<HTMLDivElement | HTMLCanvasElement | null>, callback: (width: number, height: number) => void) => {
  useLayoutEffect(() => {
    const currentRef = ref.current;

    if(!currentRef) return;

    let rafId: number;
    let timer: NodeJS.Timeout;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];

      if(!entry) return;

      clearTimeout(timer);

      timer = setTimeout(() => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          callback(entry.contentRect.width, entry.contentRect.height);
        });
      }, 100);
    });

    resizeObserver.observe(currentRef);
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [callback, ref]);
};
