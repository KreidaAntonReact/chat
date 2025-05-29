import {
  useEffect, useRef,
  useState
} from 'react';

import { loadImageBitmap } from '@/shared/util';

import type { ICanvasWorkerEvent } from '@/shared/ui/canvas-pattern/lib';

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

      workerRef.current = new Worker(new URL('../../workers/canvas.worker.ts', import.meta.url), {
        type: 'module'
      });

      workerRef.current.postMessage({
        offscreen: ctxRef.current,
        imageBitmap: pattern,
        width: canvasRef.current?.width,
        height: canvasRef.current?.height,
        type: 'init'
      } as ICanvasWorkerEvent,
      [pattern, ctxRef.current]);
    };

    initWorker();

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;

      workerRef.current?.postMessage({
        type: 'resize',
        width: width,
        height: height,
      });
      
      setCanvasSize({
        width,
        height,
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
