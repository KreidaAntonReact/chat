import { cn } from '@packages/utils';
import { useRef, useEffect, type FC } from 'react';

import pattern from '@/shared/assets/pattern.png';


interface ICanvasBackgroundProps {
    width?: number;
    height?: number;
    className?: string;
}

export const CanvasBackground: FC<ICanvasBackgroundProps> = ({ className, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(() => {
    if(!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    if(!ctx) return;

    const image = new Image();
    image.src = pattern;

    image.onload = () => {
      const pattern = ctx.createPattern(image, 'repeat') as CanvasPattern;
      ctx.clearRect(0, 0, width ?? 1000, height ?? 1000);
      ctx.fillStyle = pattern as CanvasPattern;
      ctx.imageSmoothingQuality = 'high';
      ctx.imageSmoothingEnabled = true;
      ctx?.fillRect(0, 0, width ?? 1000, height ?? 1000);
    };
  }, [height, width]);

  return (
    <canvas
      ref={canvasRef}
      width={width ?? 1000}
      height={height ?? 1000}
      className={cn('chat:dark:bg-dark chat:bg-brown/80', className)}
    />
  );
};
