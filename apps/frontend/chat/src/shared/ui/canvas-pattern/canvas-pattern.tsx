import { cn } from '@packages/utils';
import {
  type FC ,
  type ReactNode
} from 'react';

import patternImg from '@/shared/assets/pattern.png';

import { useCanvasPattern } from './model';


interface ICanvasBackgroundProps {
    children?: ReactNode;
}

export const CanvasPattern: FC<ICanvasBackgroundProps> = ({ children }) => {
  const { canvasRef, canvasSize } = useCanvasPattern({
    patternImg
  });


  return (
    <div
      className='chat:relative chat:left-0
        chat:top-0 chat:overflow-hidden
        chat:w-full chat:h-full chat:dark:bg-dark chat:bg-brown/80'
    >
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className={cn('chat:w-full chat:h-full chat:absolute chat:left-0 chat:top-0')}
      />
      {children}
    </div>
  );
};
