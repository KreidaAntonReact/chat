import {
  useCallback, useRef, useState
} from 'react';
import { Outlet } from 'react-router';

import { CanvasBackground, useResize } from '@/shared';
import { ChatList } from '@/widgets';

export const Layout = () => {
  const refWrapperBackground = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  const handleResize = useCallback((width: number, height: number) => {
    if(!refWrapperBackground.current) return;

    setSize({
      width: width,
      height: height
    });
  }, []);

  useResize(refWrapperBackground, handleResize);

  return (
    <div className='chat:w-full chat:h-full chat:flex chat:flex-[1_1_0]'>
      <ChatList/>
      <div
        className='chat:relative chat:left-0
        chat:top-0 chat:overflow-hidden
        chat:w-full chat:h-full'
        ref={refWrapperBackground}
      >
        <CanvasBackground
          className='chat:absolute chat:left-0 chat:top-0'
          width={size.width}
          height={size.height}
        />
        <Outlet/>
      </div>
    </div>
  );
};
