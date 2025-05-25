import { useEffect, useRef } from 'react';
import Sidebar from  'sidebar/sidebar';
import { createApp } from 'sidebar/vue';

export const SidebarWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if(!containerRef?.current) return;

    const sidebar = createApp(Sidebar);
    sidebar.mount(containerRef.current);

    return () => {
      sidebar.unmount();
    };
  }, []);

  return (
    <div className='w-20 h-full' ref={containerRef}/>
  );
};
