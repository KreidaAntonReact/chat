import type { ICanvasWorkerEvent } from '@/shared/ui/canvas-pattern/lib';

let ctx: OffscreenCanvasRenderingContext2D | null = null;
let pattern: CanvasPattern | null = null;
let originalBitmap: ImageBitmap | null = null;

const drawPattern = (width: number, height: number) => {
  if(!ctx || !pattern) return;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = pattern as CanvasPattern;
  ctx?.fillRect(0, 0, width, height);
};

self.onmessage = (event: MessageEvent<ICanvasWorkerEvent>) => {
  const {
    offscreen,
    imageBitmap,
    width = 0,
    height = 0,
    type,
  } = event.data;

  try {
    if(type === 'init' && imageBitmap && offscreen) {
      ctx = offscreen.getContext('2d');

      originalBitmap = imageBitmap;
      offscreen.width = width;
      offscreen.height = height;

      if(!ctx) {
        throw new Error('context not found');
      }

      pattern = ctx.createPattern(originalBitmap, 'repeat');

      ctx.imageSmoothingQuality = 'high';
      ctx.imageSmoothingEnabled = true;

      drawPattern(width, height);
    }

    if(type === 'resize' && originalBitmap) {
      if(ctx && originalBitmap) {
        pattern = ctx.createPattern(originalBitmap, 'repeat');

        ctx.canvas.width = width;
        ctx.canvas.height = height;
      }

      drawPattern(width, height);
    }
  } catch (error) {
    console.error(error);
  }
};

export {};
