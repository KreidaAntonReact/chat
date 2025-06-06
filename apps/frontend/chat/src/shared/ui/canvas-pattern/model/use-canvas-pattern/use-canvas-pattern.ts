import {
  useEffect,
  useRef,
  useState
} from 'react';

import { loadImageBitmap } from '@/shared/util';

import type { ICanvasWorkerEvent } from '@/shared/ui/canvas-pattern/lib';

const loadWebWorker = async (): Promise<Blob> => {
  const workerCode = await fetch(new URL('../../workers/canvas.worker.ts', import.meta.url))
    .then((res) => res.text());
  return new Blob([workerCode], { type: 'application/javascript' });
};

interface IUseCanvasPatternArgs {
    patternImg: string
}

export const useCanvasPattern = ({ patternImg }: IUseCanvasPatternArgs) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<OffscreenCanvas | null>(null);
  const refTransferCanvas = useRef<boolean>(false);
  const workerRef = useRef<Worker | null>(null);
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0
  });


  useEffect(() => {
    const canvas = canvasRef.current;

    if(refTransferCanvas.current || !canvas) return;

    const initWorker = async () => {
      ctxRef.current = canvasRef.current?.transferControlToOffscreen() ?? null;
      refTransferCanvas.current = true;

      if(!ctxRef.current) return;

      const pattern  = await loadImageBitmap(patternImg);

      const blob =  await loadWebWorker();
      const url = URL.createObjectURL(blob);

      workerRef.current = new Worker(url, {
        type: 'module'
      });

      const floorWidth = Math.floor(canvas.width);
      const floorHeight = Math.floor(canvas.height);

      workerRef.current.postMessage({
        offscreen: ctxRef.current,
        imageBitmap: pattern,
        width: floorWidth,
        height: floorHeight,
        type: 'init'
      } as ICanvasWorkerEvent,
      [pattern, ctxRef.current]);

    };

    initWorker();

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;

      const floorWidth = Math.floor(width);
      const floorHeight = Math.floor(height);

      workerRef.current?.postMessage({
        type: 'resize',
        width: floorWidth,
        height: floorHeight,
      });

      setCanvasSize({
        width: floorWidth,
        height: floorHeight,
      });
    });

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      workerRef.current?.terminate();
    };
  }, [patternImg]);


  return {
    canvasRef,
    canvasSize
  };
};
